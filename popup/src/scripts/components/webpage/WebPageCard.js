import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { goTo } from 'route-lite';

import { deletePage } from '../../actions';

import WebPageQRCodeView from './WebPageQRCodeView';
import { DockCardContainer, DockListIcon } from '../common/common';

const WebPageCardContainer = styled.div`
    height: 8rem;

    p {
        max-width: 20rem;
    }

    a {
        cursor: pointer;
        transition: all .2s;

        &:active, &:focus {
            transform: translate(0) scale(1);
        }

        &:hover {
            transform: translate(-1px) scale(1.1);
        }
    }
`;

class WebPageCard extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
      this.props.deletePage(this.props.webPage._id, this.props.webPage.dock);
  }

  handleNewTab() {
      window.open(this.props.webPage.url);
  }

  handleWebPageQRCode() {
      const { title, url } = this.props.webPage;
      goTo(WebPageQRCodeView, { title, url })
  }

  render() {
      return (
        <DockCardContainer>
            <WebPageCardContainer>
                <DockListIcon 
                    src={this.props.webPage.favIconUrl} 
                    alt="favicon"
                    float="left"
                />
                <p className="left" title={this.props.webPage.title} >
                    {this.props.webPage.title}
                </p>
                <a 
                    className="btn__float--small right" 
                    title="Get QRCode" 
                    onClick={this.handleWebPageQRCode.bind(this)}
                >
                    <img src="img/qrcode.svg" alt="get qrcode" />
                </a>
                <a 
                    className="btn__float--small right" 
                    title={this.props.webPage.url} 
                    onClick={this.handleNewTab.bind(this)}
                >
                    <img src="img/external-link.svg" alt="open in new tab" />
                </a>
                <a 
                    className="btn__float--small right" 
                    title="Delete webpage"
                    onClick={this.handleDelete.bind(this)}
                >
                    <img src="img/delete.svg" alt="delete" />
                </a>
            </WebPageCardContainer>
        </DockCardContainer>
      );
  }

}


export default connect(null, { deletePage })(WebPageCard);
