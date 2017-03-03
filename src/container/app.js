import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeBarValue } from '../actions/progressBarActions';
import ProgressBar from '../components/ProgressBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.onProgressBarClick = this.onProgressBarClick.bind(this);
  }

  onProgressBarClick(i,value) {
    this.props.changeBarValue(i,value);
  }
  render() {
    return ( <ProgressBar
      handleBarClick = {this.onProgressBarClick}
      endPoint={this.props.endPoint}/> );
  }
}

function mapStateToProps(state) {
  return {
    endPoint: state.endPoint
  };
}

export default connect(mapStateToProps, { changeBarValue })(App);