import { darken } from "polished";
import styled from "styled-components";

export const Input = styled.input`
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
`;

export const Container = styled.div`
    width: ${props => `${props.width}%`};
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    position: relative;
    
    + div {
        margin-top: ${props => props.noMargin ? '0' : '24px' };
    }

    > span{
        color: #ce4545;
        margin-top: 8px;
        padding-left: 4px;
        position: absolute;
        bottom: -24px;
    }

    label {
        color: ${props => props.theme.description === 'dark' ? props.theme.colors.label : props.theme.colors.labelDark};
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
    }

    @media(max-width: 768px) {
        width: 100%;
        + div {
            margin-top: 24px;
        }
    }
`;