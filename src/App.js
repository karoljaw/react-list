import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor() {
    super()
    this.state = { input: ""}
  }

  input(e) {
    this.setState({
      input: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <input placeholder="Enter value" onChange={this.input.bind(this)} type="text"/>
        <button>Click me!</button>
        <Child value={this.state.input}></Child>
      </div>
    );
  }
}

export default App;
