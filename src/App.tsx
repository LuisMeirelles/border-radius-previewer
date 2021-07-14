import React from 'react';
import {
    useState
} from 'react';

import GlobalStyle from './GlobalStyle';

import {
    H1,
    Container,
    Input,
    Preview,
    Code
} from './styles';

const App: React.FC = () => {
    const [topLeftBorder, setTopLeftBorder] = useState('0px');
    const [topRightBorder, setTopRightBorder] = useState('0px');
    const [bottomLeftBorder, setBottomLeftBorder] = useState('0px');
    const [bottomRightBorder, setBottomRightBorder] = useState('0px');

    return (
        <>
            <GlobalStyle />

            <H1>Informe também a unidade de medida</H1>

            <Container>
                <Input
                    type="text"
                    placeholder="top-left"
                    onChange={(evt) => setTopLeftBorder(evt.target.value)}
                    value={topLeftBorder}
                />

                <Input
                    type="text"
                    placeholder="top-right"
                    onChange={(evt) => setTopRightBorder(evt.target.value)}
                    value={topRightBorder}
                />
            </Container>

            <Preview
                borderRadius={
                    `${topLeftBorder} ${topRightBorder} ${bottomRightBorder} ${bottomLeftBorder}`
                }
            >
                <Code
                    onClick={() => {
                        navigator.clipboard.writeText(
                            `border-radius: ${topLeftBorder} ${topRightBorder} ${bottomRightBorder} ${bottomLeftBorder};`
                        );

                        alert('Código copiado com sucesso.');
                    }}
                >
                    {`border-radius: ${topLeftBorder} ${topRightBorder} ${bottomRightBorder} ${bottomLeftBorder};`}
                </Code>
            </Preview>

            <Container>
                <Input
                    type="text"
                    placeholder="bot-left"
                    onChange={(evt) => setBottomLeftBorder(evt.target.value)}
                    value={bottomLeftBorder}
                />

                <Input
                    type="text"
                    placeholder="bot-right"
                    onChange={(evt) => setBottomRightBorder(evt.target.value)}
                    value={bottomRightBorder}
                />
            </Container>
        </>
    );
};

export default App;
