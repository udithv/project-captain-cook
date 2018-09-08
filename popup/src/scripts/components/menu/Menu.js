import React, { Component } from 'react';

import { goTo } from 'route-lite';

import MenuItem from './MenuItem';

//Menu item omponents
import Dock from '../dock/Dock';
import SettingsMain from '../settings/SettingsMain';
import Team from '../team/Team';

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
        <div className="menu">
            <div className="menu__items">
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
         </div>    
    )
  }
}
