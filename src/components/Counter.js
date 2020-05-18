// learn how to use state or setState

import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
    }
  }
// use 'setState to change the values of the state value'

  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
  // end of increment function

  //decrement 
  decrement(){
    this.setState({
      count:this.state.count-1
    })
  }
  //end od decrement
  render(){
    return(
        <div>
            <p className='text-primary'>count={this.state.count}</p>
            <button className='btn btn-danger' onClick={()=>this.increment()}>increment</button>
            <button className='btn btn-primary m-2' onClick={()=>this.decrement()}>decrement</button>
        </div>
    )
  }
}

export default Counter;