import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'route-lite';

import DockCreate from './DockCreate';
import DockList from './DockList';
import { FooterContainer, FooterNav } from '../common/common';

import { fetchDocks } from '../../actions';



class Dock extends Component {

    componentDidMount() {
        this.props.fetchDocks();
    }

    renderGoBack() {
        return (
            <FooterContainer>
                <FooterNav>
                    <a  
                        onClick={() => goBack() }
                        className="btn__float btn__float--medium"
                    >
                        <img src="img/back-arrow.svg" alt="dockit" />
                    </a>
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