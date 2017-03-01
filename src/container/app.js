import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../components/ProgressBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons() {
    console.log(this.props);
  }

  render() {
    return ( <ProgressBar
      onButtonClick={this.handleButtons} endPoint={this.props.endPoint}/> );
  }
}

function mapStateToProps(state) {
  return {
    endPoint: state.endPoint
  };
}

export default connect(mapStateToProps)(App);