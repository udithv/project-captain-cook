import React, { Component } from 'react';
import styled from 'styled-components';

import { LoginButton } from '../common/common';

const ChromeExtHeader = styled.header`
    color: #006df0;
    font-family: 'Baumans', cursive;
    text-align: center;
    font-weight: 900;
    font-size: 4rem;
    letter-spacing: .5rem;
    text-transform: uppercase;
    margin-top: 1.5rem !important;
`;

const LoginContainer = styled.div`
    text-align: center;
`;

const LogoBox = styled.div`
    margin-bottom: 2rem;
`;

const Logo = styled.img`
    width: 100%;
    height: 26rem;
`

class Login extends Component {
  constructor(props) {
    super(props);
  }

  renderLoginContent() {
    return (
        <LoginContainer>
            <LogoBox>
                <Logo src="img/loginbanner.svg" alt="svg image" />
            </LogoBox>
                <LoginButton 
                  onClick={() =>  window.open("https://errordock.herokuapp.com/auth/google")}
                > 
                        <img src="img/google-plus.svg" alt="sign-in-google" /> 
                        <span>
                            Sign In with Google
                        </span>
                </LoginButton>
                <LoginButton 
                  onClick={() =>  window.open("https://errordock.herokuapp.com/auth/github")}
                > 
                    
                    <img src="img/github.svg" alt="sign-in-github" /> 
                    <span>
                        Sign In with Github
                    </span>
                </LoginButton>
        </LoginContainer>
    );

  }

  render() {
    return(
      <div>
          <ChromeExtHeader>
            ErrorDock
          </ChromeExtHeader>
          {this.renderLoginContent()}
      </div>
    )
  }

}



export default Login;
