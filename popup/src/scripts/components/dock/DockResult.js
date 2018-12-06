import React, { Component } from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';

import Menu from '../menu/Menu';
import { FooterContainer, FooterNav } from '../common/common';

const DockSuccess = styled.div`
    text-align: center;
    height: 65%;
    margin: 3rem 0;
`;

class DockResult extends Component {

    renderContent() {
        return (
            <DockSuccess>
                {this.props.message}
            </DockSuccess>
        );
    }


    renderNavButton() {
        return (
            <FooterContainer>
                <FooterNav>
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={() => goTo(Menu)}
                    >
                        <img src="img/menu.svg" alt="dockit" />
                    </a>
                </FooterNav>
            </FooterContainer>
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
                {this.renderNavButton()}
            </div>
        );
    }
}

export default DockResult;