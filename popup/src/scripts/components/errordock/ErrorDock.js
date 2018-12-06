import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Router, { Link, goBack } from 'route-lite';

import { fetchWebPage } from '../../actions';


//Components
import Header from '../header/Header';
import WebPageForm from '../webpageform/WebPageForm';
import Menu from '../menu/Menu';

const CHROME_URL_REGEX = /^(chrome:\/\/)((\w|\d)+\/*)*/;

const isChromeURL = (url) => {
    return CHROME_URL_REGEX.test(url);
}

class ErrorDock extends Component {

  componentWillMount() {
    this.props.fetchWebPage();
  }

  handleChangePage(page) {
    this.setState({ page });
  }

  pageContent() {
    if(isChromeURL(this.props.selected_webpage.url)){
      return (
        <Router>
          <Menu />
        </Router>
      );
    }else {
        return (
              <Router>
                <WebPageForm 
                  webpage={this.props.selected_webpage}
                />
              </Router>
                
            );
    }
    
  }

  renderContent(){
    return (
      <Fragment>
        <Header />
        {this.pageContent()}
      </Fragment> 
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    );
  }

}


function mapStateToProps({ selected_webpage }) {
  return {
    selected_webpage
  }
}



export default connect(mapStateToProps, { fetchWebPage })(ErrorDock);
