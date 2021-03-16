import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    min-height: inherit;
    align-items: center;

    button {
        color: ${props => props.theme.colors.buttonColor};
        background: ${props => props.theme.colors.buttonPrimary};
        border: 1px solid ${props => props.theme.colors.buttonBorderColor};
        padding: 24px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        box-shadow: 0px 1px 3px ${props => darken(0.2, props.theme.colors.buttonPrimary)};
        transition: all 200ms ease-in-out;
        width: 250px;
        margin-top: 32px;

        :disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        :hover {
            background: ${props => darken(0.1, props.theme.colors.buttonPrimary)};
        }
    }

    @media(max-width: 580px) {
        flex-direction: column;
        max-width: 380px;
        padding: 24px;
        justify-content: center;

        button {
            width: 100%;
            max-width: 100%;
        }
    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    position: relative;

    > span{
        color: #ce4545;
        margin-top: 8px;
        padding-left: 4px;
        position: absolute;
        bottom: -24px;
    }

    :nth-child(2) {
        width: 60%;
    }

    label {
        color: ${props => props.theme.colors.label};
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 12px;
    }

    div.input-container {
        height: 56px;
        width: 100%;
        border-radius: 14px;
        border: 1px solid ${props => props.theme.colors.inputBorder};
        background-color: ${props => props.theme.colors.inputBackground};
        display: flex;
        align-items: center;
        padding: 16px;

        :focus-within {
            background: ${props => darken(0.03, props.theme.colors.inputFocusBackground)};
            border: 1px solid ${props => props.theme.colors.inputOutline};
            transition: all 200ms ease-in-out;
        }

        input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            height: 56px;
            padding: 24px 24px 24px 8px;
            color: ${props => props.theme.colors.inputColor};

            ::placeholder {
                color: ${props => props.theme.colors.placeholder};
            }
        }
    }
`;
