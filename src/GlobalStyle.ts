import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-background: #222;
        --color-primary: #757575;
        --color-secondary: green;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html
    body {
        width: 100vw;
        min-height: 100vh;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-background);
        color: var(--color-primary);
        font-family: Arial, Helvetica, sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body,
    input,
    textarea {
        color: var(--color-primary);
    }
`;
