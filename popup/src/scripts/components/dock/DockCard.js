import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'route-lite';

import { setCurrentDock } from '../../actions';

import DockView from './DockView';
import { DockCardContainer, DockListIcon, Loader } from '../common/common';

class DockCard extends Component {

    handleClickSelect(e) {
       this.props.setCurrentDock(this.props.id);
    }

    renderCheck() {

        if(this.props.nxt_curr_dock) {
            if(this.props.id === this.props.nxt_curr_dock) {
                return <Loader src="img/wheel.svg" alt="loading" size="small" float="right" />;
            }else {
                return (
                    <DockListIcon 
                        src="img/inactive.svg" 
                        alt="unselected" 
                        float="right"
                        onClick={this.handleClickSelect.bind(this)}
                    />
                );
            }
        }else {
            if(this.props.id === this.props.current_dock._id) {
                return (
                    <DockListIcon src="img/active.svg" alt="selected" float="right" />
                );
            }else {
                return (
                    <DockListIcon 
                        src="img/inactive.svg" 
                        alt="unselected" 
                        float="right"
                        onClick={this.handleClickSelect.bind(this)}
                    />
                );
            }
        }
        
    }

    render() {
        const { id, projectName } = this.props;
        return (
            <DockCardContainer>
                <DockListIcon src="img/sea-ship-with-containers.svg" alt="" float="left" />
                <Link component={DockView} componentProps={{ projectName, id }} style={{
                    textDecoration: 'none'
                }} >
                    <p style={{ float: 'left' }}>{this.props.projectName}</p>
                </Link>
                {this.renderCheck()}
            </DockCardContainer>
        );
    }
}

function mapStateToProps({ current_dock, nxt_curr_dock }) {
    return {
        current_dock,
        nxt_curr_dock
    }
}

export default connect(mapStateToProps, { setCurrentDock })(DockCard);