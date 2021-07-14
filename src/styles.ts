import styled from 'styled-components';

interface PreviewProps {
    borderRadius: string;
}

export const H1 = styled.h1`
    margin-bottom: 2rem;
`;

export const Container = styled.div`
    width: 50vh;
    display: flex;
    justify-content: space-between;

    input {
        &:first-child {
            transform: translateX(-50%);
        }

        &:last-child {
            transform: translateX(50%);
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--color-primary);
    text-align: center;
    font-size: 2rem;
    color: var(--color-primary);
`;

export const Preview = styled.div<PreviewProps>`
    width: 50vh;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    margin: 1rem 0;
    padding: 0.25rem;
    border-radius: ${({ borderRadius }) => borderRadius};
`;

export const Code = styled.p`
    text-align: center;
    color: var(--color-background);
    font-weight: bold;
`;
