import React, { Component } from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';

import Menu from '../menu/Menu';
import { FloatButton, FooterContainer, FooterNav } from '../common/common';

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
                    <FloatButton
                        onClick={() => goTo(Menu)}
                        size="medium"
                        title="Go To Menu"
                    >
                        <img src="img/menu.svg" alt="menu" />
                    </FloatButton>
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