import React from 'react';

class Comp extends React.Component{

  Event=()=>{
    console.log("button clicked")
  }
  render(){
    return(
      <div>
          <button onClick={this.Event}>CLICK ME!</button>
      </div>
    )
  }
}


export default Comp;