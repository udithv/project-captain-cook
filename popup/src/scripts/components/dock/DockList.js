import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from  'react-redux';

import DockCard from './DockCard';
import { CardListContainer, LoaderContainer, Loader } from '../common/common';

class DockList extends Component {

    renderLoader() {
        return (
            <LoaderContainer>
                <Loader src="img/wheel.svg" alt="" size="large" />
            </LoaderContainer>
        );
    }

    renderList() {
        return (
            <CardListContainer>
                {
                    this.props.docks.map(({ projectName, _id }) => {
                        return <DockCard
                                     key={_id}
                                     projectName={projectName}
                                     id={_id}
                                />;
                    })
                }
                
            </CardListContainer>
        );
    }

    render() {
        return (
            <div>
                { (this.props.docks.length === 0) ? this.renderLoader() : this.renderList() }
            </div>
        );
    }
}

function mapStateToProps({ docks }) {
    return {
        docks
    }
}

export default connect(mapStateToProps)(DockList);