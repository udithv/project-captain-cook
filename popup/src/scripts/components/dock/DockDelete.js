import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { goBack, goTo } from 'route-lite';

import { deleteDock } from '../../actions';

import DockResult from './DockResult';
import { FooterContainer, FooterNav } from '../common/common';

const DockMessage = styled.div`
    text-align: center;
    height: 20rem;
    margin-top: 10rem;
`;

const DockMessageMain = styled.span`
    font-weight: 500;
    font-size: 4rem;
    color: #006df0;
`;

const DockMessageSecondary = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    color: grey;
`;

class DockDelete extends Component {

    handleClick() {
        this.props.deleteDock(this.props.id);
        goTo(DockResult, { message: "Dock Deleted."});
    }

    renderMessage() {
        return (
            <DockMessage>
                <DockMessageMain>Are you Sure ?</DockMessageMain>
                <DockMessageSecondary>
                    All webpages will be deleted 
                </DockMessageSecondary>
                <DockMessageSecondary>
                    Dock has {this.props.wpcount || '0'} pages.
                </DockMessageSecondary>
            </DockMessage>
        );
    }

    renderNav() {
        return (
            <FooterContainer>
                <FooterNav>
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={this.handleClick.bind(this)}
                    >
                        <img src="img/check-mark.svg" alt="dockit" />
                    </a>
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={() => goBack()}
                    >
                        <img src="img/back-arrow.svg" alt="dockit"/>
                    </a>
                </FooterNav>
            </FooterContainer>  
        );
        
    }

    render() {
        return (
            <div>
                {this.renderMessage()}
                {this.renderNav()}
            </div>
        );
    }

    
}

export default connect(null, { deleteDock })(DockDelete);