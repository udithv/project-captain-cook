import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'route-lite';

import DockCreate from './DockCreate';
import DockList from './DockList';
import { FloatButton, FooterContainer, FooterNav } from '../common/common';

import { fetchDocks } from '../../actions';



class Dock extends Component {

    componentDidMount() {
        this.props.fetchDocks();
    }

    renderGoBack() {
        return (
            <FooterContainer>
                <FooterNav>
                    
                    <FloatButton
                        onClick={() => goBack()}
                        size="medium"
                        title="Go Back"
                    >
                        <img src="img/back-arrow.svg" alt="dockit" />
                    </FloatButton>
                </FooterNav>
            </FooterContainer>
        );
    }
    render() {
        return (
            <div>
                <DockCreate />
                <DockList /> 
                {this.renderGoBack()}
            </div>
        );  
    }
    
}

function mapStateToProps({ selected_webpage }) {
    return {
        selected_webpage
    }
}


export default connect(mapStateToProps, { fetchDocks })(Dock);