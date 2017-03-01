import React, { Component } from 'react';

export default class ProgressBar extends Component {


  getProgressBars(bars) {
   return bars.map((bar) => {
     return <div className="progress">
        <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
          {bar}%
        </div>
      </div>
    });
  }

  render() {
    const { onButtonClick } = this.props;
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
                <button type="button" onClick= { onButtonClick } className="col-xs-12 col-md-3 btn btn-primary">-10</button>
                <button type="button" className="col-xs-12 col-md-3 btn btn-primary">+20</button>
                <button type="button" className="col-xs-12 col-md-3 btn btn-primary">+30</button>
                <button type="button" className="col-xs-12 col-md-3 btn btn-primary">-25</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
