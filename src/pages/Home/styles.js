import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  
  :before{
    content: "";
    position: absolute;
    width: 100%; 
    height: 100%;
    background-image: url(${props => props.leftElement});
    background-position: top left;
    background-repeat: no-repeat;
    z-index: -1;
  }

  :after {
    content: "";
    position: absolute;
    width: 100%; 
    height: 100%;
    background-image: url(${props => props.rightElement});
    background-position: right bottom;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;


export const FilterOption = styled.li`
    background: ${props => props.selected ? darken(0.1, props.theme.colors.filterOptionBackground) : props.theme.colors.filterOptionBackground};
    border: 1px solid ${props => props.theme.colors.filterOptionBorder};
    margin-top: ${props => props.selected ? "-2px" : "0"};

    :before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 20px;
        background-color: ${props => props.backgroundColor};
        margin-right: 8px;
    }

    span {
        background-color: ${props => props.backgroundColor};
    }

    :hover {
        margin-top: -2px;
        background: ${props => props.selected ? darken(0.1, props.theme.colors.filterOptionBackground) : lighten(0.1, props.theme.colors.filterOptionBackground)};
    }
`;

export const FilterList = styled.div``;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 886px;
   min-height: 755px;
   background: ${props => props.theme.colors.backgroundContent};
   box-shadow: 0px 4px 50px ${props => props.theme.colors.black};
   border-radius: 14px;

   @media(max-width: 800px) {
       width: 100%;
       min-height: 100vh;
       border-radius: 0;
   }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 16px;

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
        max-width: 554px;
        border-radius: 14px;
        border: 1px solid ${props => props.theme.colors.inputBorder};
        background-color: ${props => props.theme.colors.inputBackground};

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
            padding: 24px;
            color: ${props => props.theme.colors.inputColor};

            ::placeholder {
                color: ${props => props.theme.colors.placeholder};
            }
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    min-height: 315px;
    background: ${props => props.theme.colors.backgroundHeader};
    border-radius: 14px 14px 0 0;
    padding: 40px;

    div#header-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-weight: 700;
            font-size: 24px;
        }

        div.theme {
            display: flex;
            align-items: center;

            img {
                margin-right: 16px;
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
                border-radius: 14px;
                border: none;
                background: ${props => props.theme.colors.themeButtonBackgroundColor};
                transition: all 200ms ease-in-out;
                
                :hover {
                    background: ${props => darken(0.1, props.theme.colors.themeButtonBackgroundColor)};
                }

                svg {
                    stroke: #fff;
                }
            }
        }

        @media(max-width: 475px) {
            flex-direction: column-reverse;
            align-items: flex-start;
            
            h1 {
                margin-top: 24px;
            }
        }
    }

    div#header-form {
        display: flex;
        width: 100%;
        margin-top: 32px;

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
            align-self: flex-end;

            :disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            :hover {
                background: ${props => darken(0.1, props.theme.colors.buttonPrimary)};
            }
        }

        @media(max-width: 755px) {
            flex-direction: column;
            margin-top: 24px;

            button {
                width: 100%;
                align-self: center;
                margin-top: 24px;
                margin-bottom: 16px;
            }

            ${Input} {
                width: 100%;
                max-width: 100%;
                margin-top: 24px;

                div.input-container {
                    max-width: 100%;
                }

                :nth-child(2) {
                    width: 100%;
                }
            }
        }
    }

    div#filter {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 24px;

        span {
            font-size: 14px;
            font-weight: 600;
            color: ${props => props.theme.colors.label};
            margin-right: 16px;
        }

        ${FilterList} {
            width: 100%;
            display: flex;
            list-style: none;

            ${FilterOption} {
                padding: 12px 16px;
                height: 36px;
                border-radius: 43px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                cursor: pointer;
                position: relative;
                margin-left: 16px;
                transition: all 200ms ease-in-out;

                :nth-child(1) {
                    :before {
                        display: none;
                    }
                }

                span {
                    width: 26px;
                    height: 26px;
                    color: ${props => props.theme.colors.filterOptionColor};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    border-radius: 50px;
                    position: absolute;
                    right: -24px;
                    top: -10px;
                    z-index: 1000;
                }
            }
        }

        @media(max-width: 455px) {
            > span {
                margin-right: 0;
            }

            ${FilterList} {
                ${FilterOption} {
                    margin-left: 8px;
                }
            }
        }

        @media(max-width: 415px) {
            flex-direction: column;
            margin: 8px 0;

            > span {
                align-self: flex-start;
            }

            ${FilterList} {
                flex-direction: column;
                ${FilterOption} {
                    margin-top: 8px;
                    margin-left: 0;
                }
            }
        }
    }

    @media(max-width: 475px) {
        padding: 40px 24px;
    }
`;

