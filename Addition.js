import React, { Component } from "react";

import "./App.css";

import InputField from "./Components/InputText";

export default class Addition extends Component {
  state = {
    text: "",
    number: "",
  };
  constructor()
  {
    super()
    this.state={
      showMe:true,
      first:'',
      readOnly:false,
      showPageTwo:false,
      showVisualOfFirst:false
    }
   
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  Show_And_Hide = () => {
    this.setState({
      showMe:false,
      showPageTwo:true,
      showVisualOfFirst:true
    })
  };
  render() {
    const { text, country, message, acceptance } = this.state;

    return (
      <div className="container-fluid w-70 h-75 d-inline-block">
        <div className="row">
          <div className="d-flex justify-content-center h1">Addition</div>
        </div>
        <div className=" mx-sm-3 mb-2 form-group col-md-6">
          {/* {hideFirstInput ? ( */}
          <div className="d-flex justify-content-center">
            <div className=" mx-sm-3 mb-2 ">
            
            </div>
          </div>
        </div>
        <div className="row my-custom-row justify-content-center align-items-center ">
          <div className="col-sm-6 col-md-4">
         { this.state.showVisualOfFirst?<Bar /> :null}
            <div className="  ">
              {/* <Bar /> */}{" "}
             
              {this.state.showMe?
              <div>Enter First Number<input
                type="text"
                autoComplete="off"
                value={this.first}
                readOnly={this.readOnly}
                onChange={(e) => this.setState.first(e.target.value)}
                id="first"
              /><button className="btn btn-primary " onClick={this.Show_And_Hide}>
                Next
              </button></div>
              :null}
              <input
              type="number"
              class="form-control"
              autoComplete="off"
              value={second}
              readOnlyTwo={readOnlyTwo}
              onChange={(a) => setSecond(a.target.value)}
              id="second"
            />
            <button class="btn btn-primary ml-2 " onClick={Hide_And_Show}>
              Next
            </button>
              
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="  ">
              {/* <Bar /> */}
              <InputField
                value={text}
                type="number"
                placeholder="Enter text here..."
                onChange={this.handleChange("text")}
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-4">
            {/* <Bar /> */}{" "}
            <InputField
              value={message}
              type="number"
              placeholder="Enter message!"
              onChange={this.handleChange("message")}
            />
          </div>
        </div>

        {/* {show ? (
              <div>
                <AdditionTwo first={first} />
              </div>
            ) : null} */}
      </div>
    );
  }
}
