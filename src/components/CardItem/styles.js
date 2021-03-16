import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

const slide = keyframes`
  0% { 
      bottom: -300px;
      opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% { 
      bottom: 0; 
      opacity: 1;
  }
`

export const Card = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 14px;
    background: ${props => `linear-gradient(270deg, ${props.theme.colors.gradientSecondary} 23.54%,${props.theme.colors.gradientPrimary} 104.01%)`};
    box-shadow: 0px 2px 3px ${props => props.theme.colors.shadowCard};
    position: relative;
    animation: ${slide} 400ms 0s both;

    img {
        box-shadow: 0px 0px 6px 5px ${props => props.theme.colors.avatarShadow};
        margin-right: 16px;
        border-radius: 50px;
        border: 1px solid ${props => props.theme.colors.avatarBorderColor};
        opacity: ${props => props.done ? 0.2 : 1};
        width: 30px;
        height: 30px;
    }
    
    ::before {
        content: '';
        position: absolute;
        width: 3px;
        left: 0;
        height: 80px;
        background: ${props => props.theme.colors.borderCardLeft};
        border-radius: 76px;
    }

    div#content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        strong {
            color: ${props => props.done ? transparentize(0.8, props.theme.colors.colorCardTopic) : props.theme.colors.colorCardTopic};
            text-decoration: ${props => props.done ? 'line-through' : 'none'};
            font-weight: 800;
        }

        p.content-description {
            color: ${props => props.done ? transparentize(0.8, props.theme.colors.colorCardDescription) : props.theme.colors.colorCardDescription};
            text-decoration: ${props => props.done ? 'line-through' : 'none'};
            font-weight: 600;
            margin-top: 4px;
        }

        span.content-autor {
            font-weight: 600;
            color: ${props => props.done ? transparentize(0.8, props.theme.colors.colorCardAutor) : props.theme.colors.colorCardAutor};
            text-decoration: ${props => props.done ? 'line-through' : 'none'};
            margin-top: 4px;
            font-size: 14px;

            span {
                font-weight: 200;
                font-size: 14px;
            }
        }
    }

    @media(max-width: 670px) {
        padding: 8px 16px;
    }
`;
