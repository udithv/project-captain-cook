import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addDock } from '../../actions';

import { SubmitButton, FormGroup, FormInput } from '../common/common';

const DockCreateFormContainer = styled.div`
    margin: 2rem 1.6rem;
`;

class DockCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addDock(this.state);

    }


    render () {
        return (
            <DockCreateFormContainer>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <FormGroup inline>
                        <FormInput 
                            type="text" 
                            inline
                            placeholder="Dock Name"
                            onChange={ e => this.setState({ projectName: e.target.value })}
                            value={this.state.projectName}
                        />
                        {/* <button className="btn-submit-inline btn-submit-inline--small">
                            <img className="btn-submit-inline__icon" src="img/plus-black-symbol.svg" alt="dockit" />
                        </button> */}
                        <SubmitButton
                            inline
                            size="small"
                        >
                            <img src="img/plus-black-symbol.svg" alt="add_dock" />
                        </SubmitButton>
                    </FormGroup>
                </form>
            </DockCreateFormContainer>
        );
    }
}

export default connect(null, { addDock })(DockCreate);