import InputNumber from "elements/Form/InputNumber";
import React, { Component } from "react";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              min={1}
              max={20}
              onChange={this.handleChange}
              value={this.state.value}
              suffix=" night"
              isSuffixPlural
              name="value"
            />
          </div>
        </div>
      </div>
    );
  }
}
