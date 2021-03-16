import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    background:rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity linear 0.15s;
    z-index: 2000;
    overflow-y: hidden;

    &.fade-in {
        opacity: 1;
        transition: opacity linear 0.15s;
    }

    &.fade-out {
        opacity: 0;
        transition: opacity linear 0.15s;
    }

    .modal-content {
        position: relative;
        width: 100%;
        max-width: 768px;
        max-height: 90vh;
        padding: 33px;
        background: ${props => props.theme.colors.modalBackgroundColor};
        box-shadow: rgb(0 0 0 / 56%) 0px 5px 30px;
        border-radius: 5px;
        transform: translateY(20px);
        transition: transform 0.2s ease-in 0s, opacity 0.2s ease-in 0s;
        overflow-y: auto;
        text-align: left;
        cursor: default;

        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 1.33em;
            color: ${props => props.theme.colors.modalTitleColor};
        }

        @media(max-width: 768px) {
            min-height: 100vh;
            transform: translateY(0px);
            padding: 24px;
            border-radius: 0;
        }
    }

    .modal-close {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 10px;
        right: 10px;
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: rgb(135, 134, 139);
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    .modal-close:hover {
        background: ${props => props.theme.colors.modalCloseBackground};
        color: rgb(255, 255, 255);
    }

    .modal-area {
        margin-top: 8px;
        position: relative;
        padding: 32px 0;
        display: flex;
        justify-content: center;

        &:after {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0px;
            background-color: ${props => props.theme.colors.sectionSeparatorColor};
        }

        form {
            width: 100%;
            max-width: 400px;
        }

        @media(max-width: 768px) {
            form {
                max-width: 100%;
            }
        }
    }

    .modal-footer {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        width: 100%;
        padding-top: 32px;
        border-top: 1px solid ${props => props.theme.colors.sectionSeparatorColor};

        .transparent {
            background: transparent;
            color: ${props => props.theme.colors.modalButtonOutlineColor};
        }

        button {
            position: relative;
            padding: 16px 32px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            color: ${props => props.theme.colors.modalButtonColor};
            border: 2px solid ${props => props.theme.colors.buttonPrimary};
            border-radius: 5px;
            transition: background 0.2s ease 0s, border 0.2s ease 0s;
            cursor: pointer;
            background: ${props => props.theme.colors.buttonPrimary};

            + button {
                margin-right: 8px;
            }

            :disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            &:not(:disabled):hover {
                background: ${props => lighten(0.1, props.theme.colors.buttonPrimary)};
                border-color: ${props => lighten(0.1, props.theme.colors.buttonPrimary)};
                color: ${props => props.theme.colors.modalButtonOutlineHoverColor};
            }
        }

        .btn-delete {
            border: 1px solid #e24343;
            margin-right: auto;
            background: #e24343;
            
            &:not(:disabled):hover {
                background: ${lighten(0.1, "#e24343")};
                border-color: ${lighten(0.1, "#e24343")};
            }

            @media(max-width: 768px) {
                position: fixed;
                bottom: 32px;
                width: calc(100% - 48px);
            }
        }

        @media(max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;

            button {
                width: 100%;
                font-size: 12px;
                padding: 12px 24px;

                + button {
                    margin-right: 0;
                    margin-top: 16px;
                }
            }
        }
    }
`;