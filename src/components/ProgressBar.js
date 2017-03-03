import React, { Component } from 'react';
import ProgressValues from '../components/ProgressValues';

export default class ProgressBar extends Component {

  constructor() {
    super();

    this.state = {
      activeBar: 0,
      activeBarValue: 0,
      value: 'p1'
    }

    this.optionChange = this.optionChange.bind(this)
  }

  handleBarClick(i, value) {
    this.setState({
      activeBar: i,
      activeBarValue: value
    });
    this.props.handleBarClick(i,value);
  }

  handleValueButtonClick(type, value) {
    let updatedPercent;
    if(type == 'add') {
      updatedPercent = this.state.activeBarValue + value;
    } else {
      updatedPercent = this.state.activeBarValue - value;
      if(updatedPercent < 0) {
        updatedPercent = 0;
      }
    }
    this.setState({
      activeBarValue: updatedPercent
    });
    this.props.handleBarClick(this.state.activeBar,updatedPercent);
  }

  optionChange(e) {
    this.setState({ value: e.target.value });
    if(e.target.value == 'p1') {
       this.setState({ activeBar: 0 });
    } else if(e.target.value == 'p2') {
       this.setState({ activeBar: 1 });
    } else if(e.target.value == 'p3') {
       this.setState({ activeBar: 2 });
    } else {
       this.setState({ activeBar: 3 });
    }

  }

  render() {
    const { actionOne, actionTwo, actionThree, actionFour } = this.props;
    const endPoint = this.props.endPoint;
    const buttons = this.props.endPoint.buttons;

    return (
      <div id="main-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <h1>Control Progress Bars</h1>
            {
              endPoint.bars.map((bar, index) => {
                return <ProgressValues
                          key={ index }
                          barWidth={ bar }
                          onBarClick={ this.handleBarClick.bind(this, index, bar) }
                          isActive={ this.state.activeBar === index ? true : false }/>
              })
            }
          </div>
          <div className="clearfix"></div>
          <hr></hr>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <select className="form-control" onChange={this.optionChange} value={this.state.value}>
                  <option value="p1">Progress One</option>
                  <option value="p2">Progress Two</option>
                  <option value="p3">Progress Three</option>
                  <option value="p4">Progress Four</option>
                </select>
              </div>
              <div className="col-xs-12 col-sm-6">
                {
                  buttons.map((button, i) => {
                    const buttonType = (button < 0) ? 'sub' : 'add';
                    const buttonValue = Math.abs(button);
                    return <button
                              type="button"
                              onClick= { this.handleValueButtonClick.bind(this, buttonType, buttonValue) }
                              className="col-xs-12 col-md-3 btn btn-primary">{ button }</button>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
