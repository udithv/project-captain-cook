import styled from 'styled-components';
import { spin, moveInBottom } from './animations';

export const Heading = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    color: #000;
    margin: 1.2rem 1.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: underline #006df0;
    text-overflow: ellipsis;
    cursor: pointer;
`;


export const FormGroup = styled.div`
    position: relative;

    ${ props => (props.inline ? 'margin: .5rem;' :
        `
            margin-left: 2rem;
            &:not(:last-child) {
                margin-bottom: .5rem;
        `
    )}
`;

export const FormLabel = styled.label`
    visibility: hidden;
`;

export const FormInput = styled.input`

    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-bottom: 1px solid lightblue;
    ${props => (props.inline ? 
            `display: inline-block;` :
            `
                width: 90%;
                display: block;
            `
    )}
    transition: all .3s;

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
        border-bottom: 3px solid #006df0;
    }

    &:focus:invalid {
        border-bottom: 3px solid #006df0;
    }

    &::-webkit-input-placeholder {
        color: lightblue; 
    }


    
`;

export const LoaderContainer = styled.div`
    text-align: center;
    height: 30rem;
`;

export const Loader = styled.img`

    ${props => props.float && `float: ${props.float};` }
    ${props => {
        if(props.size === 'small') {
            return `
                margin-left: .5rem;
                margin-right: .5rem;
                width: 3rem;
                height: 3rem;
            `
        }else if(props.size === 'large') {
            return `
                margin-top: 7.5rem;
                margin-bottom: 7.5rem;
                width: 15rem;
                height: 15rem;
            `
        }
    }}
    -webkit-animation: ${spin} 1s linear infinite;
    -moz-animation: ${spin} 1s linear infinite;
    animation: ${spin} 1s linear infinite;

`;

export const FooterContainer = styled.div`
    a {
        margin: 1rem;
    }
`;

export const FooterNav = styled.div`
    text-align: center;
`;

export const DockCardContainer = styled.div`
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    color: #000;
    width: 90%;
    min-height: 6rem;
    box-shadow: 2px 2px 5px skyblue;
    transition: all .2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 1rem 1rem 2rem skyblue;
    }

    &:focus, &:active {
        transform: translateY(0);
        box-shadow: 2px 2px 5px skyblue; 
    }

    p {
        margin-top: .5rem;
        max-width: 16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        white-space: nowrap;
    }
`;

export const CardListContainer = styled.div`
    margin-left: 1.6rem;
    overflow: hidden;
    overflow-y: auto;
    height: ${props => (props.webpage ? 33 : 30.2)}rem;
`;

export const DockListIcon = styled.img`
    margin-left: .5rem;
    margin-right: .5rem;
    width: 3rem;
    height: 3rem;
    transition: all .2s; 
    ${props => props.float && `float: ${props.float};` }

    &:hover {
        transform: translateY(-2px) scale(1.1);
    }

    &:active, &:focus {
        transform: translateY(0) scale(1);
    }
`;


export const FloatButton = styled.a`
    &,
    &:link,
    &:visited {

        border-radius: 50%;
        position: relative;
        text-decoration: none;
        display: inline-block;
        box-shadow: 0 .5rem 2rem rgba(0, 0, 0,.2);
        border: none;
        background-color: #fff;
        cursor: pointer;
        ${props => {
            if(props.size === 'small') {
                return `
                    height: 5rem;
                    width: 5rem;
                    padding: .8rem .8rem;
                `
            } else if(props.size === 'medium') {
                return `
                    height: 7rem;
                    width: 7rem;
                    padding: 1rem 1rem;
                `
            }
        }}
        transition: all .2s;

    }


    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0,.2);
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0,.2);

    }


    img {
        ${props => {
            if(props.size === 'small') {
                return `
                    height: 3rem;
                    width: 3rem;
                `
            } else if(props.size === 'medium') {
                return `
                    height: 4rem;
                    width: 4rem;
                `
            }
        }}
    }
`;

export const SubmitButton = styled.button`
    background-color: #fff;
    border: none;
    color: #006df0;
    border-radius: ${props => (props.inline ? '50%' : '10rem')};
    ${props => (props.inline ? 
        `
            margin-left: .5rem;
        `
        :

        `
            padding: 1.5rem 1rem;
            width: 90%;
        `
    )}

    ${props => {
        if(props.size == 'small') {
            return `
                height: 5rem;
                width: 5rem;
            `
        }
    }}
    font-size: 1.6rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transition: all .2s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }

    &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    &:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0; 
    }

    &:active, &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    img {
        
        ${props => {
            if(props.size == 'small') {
                return `
                    width: 3rem;
                    height: 3rem;
                `
            }else {
                return `
                    width: 3.5rem;
                    height: 3.5rem;
                    margin-left: 1.6rem;
                    float: left;
                `
            }
        }}
        
    }

    span {
        float: left;
        padding-top: 1.4rem;
        margin-left: 2.4rem;
        font-weight: 900;
    }
`;

export const LoginButton = styled.a`
    display: block;
    margin-bottom: 1.5rem !important;
    
    &,
    &:link,
    &:visited {
        text-decoration: none;
        padding: 1rem 1.5rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all 0.2s;
        position: relative;
        font-size: 1.6rem;
        cursor: pointer;

        color: #006df0;
        background-color: #fff;
        border: 2px solid #006df0;

        animation: ${moveInBottom} .5s ease-out .30s;
        animation-fill-mode: backwards;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);

        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);

    }

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;

    }

    span {
        float: right;
        padding-top: .3rem;
        font-weight: 900;
    }

    img {
        width: 3rem;
        height: 3rem;
        margin-right: .9rem;
        float: left;
    }

`;

export const IconBtn = styled.a`
    &, 
    &:link, 
    &:visited {
        height: 5rem;
        width: 5rem;
        padding: .8rem .8rem;
        ${props => props.float && `float: ${props.float};` }
    }

    img {
        height: 3rem;
        width: 3rem;
    }

`;