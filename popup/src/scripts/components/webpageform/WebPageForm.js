import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, goTo } from 'route-lite';

import { dockWebPage } from '../../actions';

import Dock from '../dock/Dock';
import DockResult from '../dock/DockResult';
import DockView from '../dock/DockView';

import WebPageQRCodeView from '../webpage/WebPageQRCodeView';

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
            <button className="btn-submit">
                <img 
                    className="btn-submit__icon" 
                    src="img/big-anchor.svg" 
                    alt="dockit"
                />
                <span className="btn-submit__text">
                    Dock it
                </span>
            </button>
        );
    }


    render() {
        const { url, title } = this.props.webpage;
        return(
            <div className="dock__form">
                <form  className="form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
                            placeholder="Title" 
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                            disabled={this.state.submitted}
                        />
                        <label  className="form__label">Title</label>
                    </div>
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
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
                        <label  className="form__label">Url</label>
                    </div>
                    <div className="form__group">

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
                    </div>
                    <div className="form__group">
                        <textarea 
                            rows="3"
                            className="form__input" 
                            placeholder="Description" 
                            onChange={event => this.setState({ description: event.target.value })}
                            value={this.state.description}
                            disabled={this.state.submitted}
                        />
                        <label className="form__label">Description</label>
                    </div>
                    <div className="form__group">
                        { this.renderSubmitButton() }
                    </div>
                </form>
            </div>
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