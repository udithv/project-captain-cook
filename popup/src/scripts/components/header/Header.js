import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { logout } from '../../actions';

const DockHeader = styled.div`
    height: 5rem;
    box-shadow: 0 0 10px grey;
`;

const DockHeaderTitle = styled.span`
    color: #006df0;
    margin-top: .8rem;
    letter-spacing: .5rem;
    font-weight: 900;
    font-size: 2rem;
    font-family: 'Baumans', cursive;
    float: left;
`;

const DockHeaderLogo = styled.img`
    height: 3rem;
    width: 3rem;
    margin: .8rem 1rem;
    float: left;
`;

const DockHeaderLogoutIcon = styled.img`
    height: 2.5rem;
    border-radius: 50%;
    width: 2.5rem;
    margin: 1.2rem 1rem;
    float: right;
    transition: all .2s;

    &:hover {
        transform: translateY(-0.4rem);
    }

    &:active, &:focus {
        transform: translateY(0);
    }
`;

class Header extends Component {
    handleLogout() {
        window.open("https://errordock.herokuapp.com/api/logout")
        this.props.logout();
    }

    render() {
        return (
            <DockHeader>
              <DockHeaderLogo 
                src="img/boat-from-front-view.svg"
                alt="icon-left" 
              />
              <DockHeaderTitle>
                  ErrorDock
              </DockHeaderTitle>
              <DockHeaderLogoutIcon 
                src="img/turn-off.svg"
                alt="logout"
                onClick={this.handleLogout.bind(this)} 
              />
          </DockHeader>
        );
    }
    
}

export default connect(null, { logout })(Header);