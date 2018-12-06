import React, {Component} from 'react';

import WebPageCard from './WebPageCard';
import { CardListContainer, LoaderContainer, Loader } from '../common/common';


class WebPageList extends Component {
  

  renderList() {
      return this.props.webpages.map(wp => {
        return <WebPageCard webPage={wp} key={wp._id} />
      });
  }

  renderContent() {
    if(this.props.webpages == null){
        return (
            <LoaderContainer>
                <Loader src="img/wheel.svg" alt="" size="large" />
            </LoaderContainer>
        );
    }else if(this.props.webpages.length === 0){
        return <div>No webpages yet</div>
    }else {
        return this.props.webpages.map(wp => {
            return <WebPageCard webPage={wp} key={wp._id} />
          });
    }
  }

  render() {
      return (
          <CardListContainer webpage>
               {this.renderContent()}
          </CardListContainer>
      );
  }

}

export default WebPageList;


