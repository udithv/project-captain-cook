import { keyframes } from 'styled-components';

export const spin = keyframes`
    100% {
        -moz-transform: rotate(360deg);
        webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;