import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../components/ProgressBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.actionOne = this.actionOne.bind(this);
    this.actionTwo = this.actionTwo.bind(this);
    this.actionThree = this.actionThree.bind(this);
    this.actionFour = this.actionFour.bind(this);
  }

  actionOne() {
    console.log(this.props);
  }

  actionTwo() {
    console.log(this.props);
  }

  actionThree() {
    console.log(this.props);
  }

  actionFour() {
    console.log(this.props);
  }

  render() {
    return ( <ProgressBar
      actionOne={this.actionOne}
      actionTwo={this.actionTwo}
      actionThree={this.actionThree}
      actionFour={this.actionFour}
      endPoint={this.props.endPoint}/> );
  }
}

function mapStateToProps(state) {
  return {
    endPoint: state.endPoint
  };
}

export default connect(mapStateToProps)(App);