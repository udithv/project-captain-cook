import React, { Component } from 'react';
import { goBack } from 'route-lite';
import QRCode from 'qrcode-react';

import { FloatButton ,Heading, FooterContainer, FooterNav } from '../common/common';

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
                  <FloatButton 
                    size="medium"
                    onClick={() => goBack()} 
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
