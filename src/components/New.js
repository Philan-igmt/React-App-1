//learn to use class component
import React from 'react';

class New extends React.Component{
  constructor(){
    super()
    this.state ={
      name :'Sithembiso',
      surname:'Ndhlela',
      color:'btn btn-primary m-2'
      }
    }
// the function to change the state value
    change=()=>{
      this.setState({
        name:'now Philile'
      })
    }
    render(){
      return(
        <div>
            <h1>This is {this.state.name}</h1>
            <button className={this.state.color} onClick={this.change}>change name</button>
        </div>
      )
    }
  }
export default New;