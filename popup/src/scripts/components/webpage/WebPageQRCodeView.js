import React, { Component } from 'react';
import { goBack } from 'route-lite';
import QRCode from 'qrcode-react';

import { Heading, FooterContainer, FooterNav } from '../common/common';

export default class WebPageQRCodeView extends Component {

  renderHeading() {
      return (
          <Heading>
              {this.props.title}
          </Heading>
      );
  }

  renderUtilityButton() {
      return (
          <FooterContainer>
              <FooterNav>
                  <a 
                      onClick={() => goBack()} 
                      className="btn__float btn__float--medium"
                      title="Go Back"
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
        {this.renderHeading()}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '4rem'
          }}
        >
          <QRCode
            fgColor="#91dc5a"
            renderAs='svg'
            value={this.props.url}
            logo="img/big-anchor.svg"
            size={256}
          />
        </div>
        
        {this.renderUtilityButton()}
      </div>
    )
  }
}
