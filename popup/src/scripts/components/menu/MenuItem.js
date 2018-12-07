import React, { Component } from 'react';
import styled from 'styled-components';
import { FloatButton } from '../common/common';

const MenuItemContainer = styled.div`
    display: inline-block;
    margin: 1rem;
    text-align: center;
    height: 9rem;
    width: 9rem;
    padding: 1rem;
`;

const MenuItemName = styled.span`
    display: block;
    color: #006df0;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default class MenuItem extends Component {
  render() {
      const { name, iconUrl, title } = this.props;
    return (
        <MenuItemContainer>
            <FloatButton
                size="small"
                onClick={() => this.props.gothere(name)}
            >
                <img src={iconUrl} alt={name} />
            </FloatButton>
            <MenuItemName>
                {title}
            </MenuItemName>
        </MenuItemContainer>
    )
  }
}
