import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, goTo } from 'route-lite';

import { dockWebPage } from '../../actions';

import Dock from '../dock/Dock';
import DockResult from '../dock/DockResult';
import DockView from '../dock/DockView';
import WebPageQRCodeView from '../webpage/WebPageQRCodeView';
import { SubmitButton, FormGroup, FormLabel, FormInput } from '../common/common';

const WebPageFormContainer = styled.div`
    margin-top: 1.2rem;
`;

const FormTextArea = FormInput.withComponent('textarea');

class WebPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.webpage.title,
            url: props.webpage.url,
            description: ''
        }
    }

    //hack for intializing state with props
    componentWillReceiveProps(nextProps){
        if (nextProps.webpage.url !== this.props.webpage.url) {
          this.setState({ title: nextProps.webpage.title, url: nextProps.webpage.url })
        }
    }

    handleClick() {
        const { projectName, _id } = this.props.current_dock;
        goTo(DockView, { projectName, id:_id })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { title, url } = this.state;
        const { favIconUrl } = this.props.webpage;
        this.props.dockWebPage({
            title,
            url,
            favIconUrl
        }, this.props.current_dock._id);
        goTo(DockResult, { message: "Docking Success"});
    }

    handleWebPageQRCode() {
        const { title, url } = this.state;
        goTo(WebPageQRCodeView, { title, url })
    }

    renderSubmitButton() {
        return (
            <SubmitButton>
                <img 
                    src="img/big-anchor.svg" 
                    alt="dockit"
                />
                <span>
                    Dock it
                </span>
            </SubmitButton>
        );
    }


    render() {
        return(
            <WebPageFormContainer>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <FormGroup>
                        <FormInput 
                            type="text"
                            placeholder="Title" 
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                            disabled={this.state.submitted}
                        />
                        <FormLabel>Title</FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormInput 
                            type="text"
                            placeholder="URL"  
                            value={this.state.url}
                            onChange={event => this.setState({ url: event.target.value })}
                            disabled 
                        />
                        <a 
                            className="form__input-icon" 
                            title="Get QRCode"
                            onClick={this.handleWebPageQRCode.bind(this)}
                        >
                            <img src="img/qrcode.svg" alt="qrcode"  />
                        </a>
                        <FormLabel>Url</FormLabel>
                    </FormGroup>
                    <FormGroup>

                        <Link component={Dock}>
                            <span 
                                className="btn__float btn__float--small"
                            >
                                <img 
                                src="img/sea-ship-with-containers.svg"
                                alt="dockit" 
                                />
                            </span>
                        </Link>
                         
                        <span className="dock__name" onClick={this.handleClick.bind(this)}>
                            {this.props.current_dock ? this.props.current_dock.projectName : 'no current dock'}
                        </span>
                    </FormGroup>
                    <FormGroup>
                        <FormTextArea 
                            rows="3"
                            placeholder="Description" 
                            onChange={event => this.setState({ description: event.target.value })}
                            value={this.state.description}
                            disabled={this.state.submitted}
                        />
                        <FormLabel>Description</FormLabel>
                    </FormGroup>
                    <FormGroup>
                        { this.renderSubmitButton() }
                    </FormGroup>
                </form>
            </WebPageFormContainer>
        );
    }
}

function mapStateToProps({ current_dock, selected_webpage, submitted_webpage }) {
    return {
        current_dock,
        selected_webpage,
        submitted_webpage
    }
}

export default connect(mapStateToProps, { dockWebPage })(WebPageForm);