import React, { Component } from "react";
import FormCode from "./components/form/form";

class App extends Component {
  submit = values => {
    alert("submit");
    console.log(values);
  };

  render() {
    return (
      <div className="container">
        <h3 className="jumbotron text-center">Redux Form Validation</h3>
        <FormCode onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
