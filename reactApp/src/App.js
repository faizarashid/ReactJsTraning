import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Table  from './Components/Table';
import React, { Component } from 'react';

class App extends Component{
  constructor() {
    super();}
  tableValues = [];

    handleFormSubmit=(event)=> {
      event.preventDefault();
      let items= this.tableValues;
      this.tableValues.push({
        developer: event.target.developer.value,
        skills: event.target.exampleInputSkills.value
      });
      alert('inside App Parent handleFormSubmit')
    }
  render(){
  return (
    <div >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App
        </a>
      </header>    
      <Data handleFormSubmit={this.handleFormSubmit}/>
      <Table tableValues={this.tableValues}/>
    </div>

  );
}
}
export default App;
