import React, { Component } from 'react';
import MyDropzone from "./dropzone";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <div className="App">
          <h1>React Dropzone Component Demo</h1>
          <MyDropzone />
        </div>
      </div>
    );
  }
}