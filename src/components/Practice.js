import React from 'react';

class Practice extends React.Component{
  constructor(){
    super()
    this.state= {
      name:'Philani',
      color:'btn btn-success',
      count:0
    }
  }
  fun=()=>{
    this.setState({
      name:'Philile'
    })
  }
  render(){
    return(
      <div>
        <p>{this.state.name}</p>
        <button className={this.state.color} onClick={this.fun}>change name</button>
      </div>
    )
  }
}

export default Practice;