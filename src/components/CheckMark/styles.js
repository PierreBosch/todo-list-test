import styled from 'styled-components';

export const Container = styled.div`
    width: 28px;
    height: 28px;
    
    .checkbox {
        -webkit-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
    }
    
    .checkbox span {
        display: inline-block;
        vertical-align: middle;
        transform: translate3d(0, 0, 0);
    }
    
    .checkbox span:first-child {
        position: relative;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        transform: scale(1);
        vertical-align: middle;
        background-color: ${props => props.theme.colors.checkMarkDisableBackground};
        transition: all 0.2s ease;

        :hover {
            background-color: ${props => props.theme.colors.checkMarkBackground};
        }
    }
    
    .checkbox span:first-child svg {
        position: absolute;
        z-index: 1;
        top: 10px;
        left: 8px;
        fill: none;
        stroke: ${props => props.theme.colors.checkMarkDisableSvgColor};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 0;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
    }
    
    .checkbox span:first-child:before {
        content: "";
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.checkMarkBackground};
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
        transition-delay: 0.2s;
    }
    
    .checkbox span:last-child {
        margin-left: 8px;
    }
    
    .checkbox span:last-child:after {
        content: "";
        position: absolute;
        top: 12px;
        left: 0;
        height: 1px;
        width: 100%;
        background: #B9B8C3;
        transform-origin: 0 0;
        transform: scaleX(0);
    }

    .checkbox:hover span:first-child {
        border-color: ${props => props.theme.colors.checkMarkBackground};
    }

    .input-checkbox:checked + .checkbox span:first-child {
        border-color: ${props => props.theme.colors.checkMarkBackground};
        background: ${props => props.theme.colors.checkMarkBackground};
        animation: check 0.6s ease;
    }

    .input-checkbox:checked + .checkbox span:first-child svg {
        stroke-dashoffset: 0;
        stroke: ${props => props.theme.colors.checkMarkSvgColor};
    }

    .input-checkbox:checked + .checkbox span:first-child:before {
        transform: scale(2.2);
        opacity: 0;
        transition: all 0.6s ease;
    }

    .input-checkbox:checked + .checkbox span:last-child {
        color: #B9B8C3;
        transition: all 0.3s ease;
    }

    .input-checkbox:checked + .checkbox span:last-child:after {
        transform: scaleX(1);
        transition: all 0.3s ease;
    }

    @keyframes check {
        50% {
            transform: scale(1.2);
        }
    }
`;
