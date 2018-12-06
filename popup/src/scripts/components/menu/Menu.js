import React, { Component } from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';

import MenuItem from './MenuItem';

//Menu item omponents
import Dock from '../dock/Dock';
import SettingsMain from '../settings/SettingsMain';
import Team from '../team/Team';

const MenuContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 8.5rem);
`;

export default class Menu extends Component {

  gothere(name) {
    console.log(name);
    switch(name) {
      case 'dock':
           goTo(Dock)
           return;
      case 'settings': 
           goTo(SettingsMain);
           return;
      case 'team': 
           goTo(Team);
           return;
    }
    
  }
  render() {
    return (
        <MenuContainer>
            <div>
                <MenuItem
                  title="Docks"
                  name="dock"
                  iconUrl="img/sea-ship-with-containers.svg"
                  gothere={this.gothere}
                />
                <MenuItem
                  title="Settings"
                  name="settings"
                  iconUrl="img/settings-gears.svg"
                  gothere={this.gothere}
                />
                <MenuItem
                  title="Team"
                  name="team"
                  iconUrl="img/team.svg"
                  gothere={this.gothere}
                />
            </div>
         </MenuContainer>    
    )
  }
}
