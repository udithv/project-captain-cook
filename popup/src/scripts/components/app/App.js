import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions';

//Components
import Login from '../login/Login';
import ErrorDock from '../errordock/ErrorDock';

const ChromeExtBody = styled.div`
  height: 55rem;
  width: 35rem;
  border: 0.2rem solid #006df0;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
      this.props.fetchUser();
  }

  render() {
    return (
      <ChromeExtBody>
        { this.props.auth ? <ErrorDock /> : <Login/>  }
      </ChromeExtBody>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
