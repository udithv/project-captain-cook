import { keyframes } from 'styled-components';

export const spin = keyframes`
    100% {
        -moz-transform: rotate(360deg);
        webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(3rem); 
    }
    100% {
        opacity: 1;
        transform: translate(0); 
    } 
`;