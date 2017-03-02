import React, { Component } from 'react';

export default class ProgressBar extends Component {

  constructor() {
    super();
    this.state = {
      barOne: true,
      barTwo: true,
      barThree: true,
      barFour: true
    };
  }


  getProgressBars(bars) {
   return bars.map((bar,index) => {
     const progressWidth = {
       width:bar+'%'
     };
     console.log(typeof index);
     return <div className="progress" key={index}>
        <div className={"progress-bar progress-bar-info progress-bar-striped " +(this.state.barOne ? 'active' : '') } role="progressbar" style={progressWidth}>
          {bar}%
        </div>
      </div>
    });
  }

  render() {
    const { actionOne,actionTwo,actionThree,actionFour } = this.props;
    const endPoint = this.props.endPoint;

    return (
      <div id="main-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <h1>Control Progress Bars</h1>
            {this.getProgressBars(endPoint.bars)}
          </div>
          <div className="clearfix"></div>
          <hr></hr>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <select className="form-control">
                  <option value="p1">Progress One</option>
                  <option value="p2">Progress Two</option>
                  <option value="p3">Progress Three</option>
                  <option value="p4">Progress Four</option>
                </select>
              </div>
              <div className="col-xs-12 col-sm-6">
                <button type="button" onClick= { actionOne } className="col-xs-12 col-md-3 btn btn-primary">-10</button>
                <button type="button" onClick= { actionTwo } className="col-xs-12 col-md-3 btn btn-primary">+20</button>
                <button type="button" onClick= { actionThree } className="col-xs-12 col-md-3 btn btn-primary">+30</button>
                <button type="button" onClick= { actionFour } className="col-xs-12 col-md-3 btn btn-primary">-25</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
