import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Data extends React.Component {
    constructor(props){
        super(props);       
    }
  render() {
    return(
      <div id="form">
        <h1>Data Input Component</h1>
        <form onSubmit={this.props.handleFormSubmit}>
        <div class="form-group">
            <label for="developer">Developer</label>
            <input type="username" class="form-control" id="developer" aria-describedby="developerHelp" placeholder="Enter Developer Name"/>
            <small id="developerHelp" class="form-text text-muted">Please write your name.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputSkills">Skills</label>
            <input type="text" class="form-control" id="exampleInputSkills" placeholder="Skills"/>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="workingcheck"/>
            <label class="form-check-label" for="workingcheck">Currently Working</label>
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        
      </div>
    )
  }

}
export default Data;