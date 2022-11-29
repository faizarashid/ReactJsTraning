import React, { Component } from 'react';

export class Table extends React.Component {

  render() {
    // let items= this.props.tableValues;
    const {formData} = this.props.tableValues;
     let rows = [];
     if(formData){
       for(var i=0; i<formData.length;i++){
        rows.push(<tr><td>{formData[i].developer}</td>
        <td>{formData[i].skills}</td></tr>)
        }  
      }
    return(
      <div id="form">
        <h1>Table Component</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Developer</th>
                <th scope="col">Skills</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                {rows}
                {/* {items?.map(item=>{
                  return(
                    <tr>
                      <td>{item.developer}</td>
                      <td>{item.skills}</td>
                    </tr>
                  );
                })} */}
                
                </tr>
            </tbody>
        </table>
    </div>
    )
  }

}
export default Table;