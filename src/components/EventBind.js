//learning about events that change state
//using the 3rd method, refer to myNotes
import React from 'react';

class Bind extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'Philile'
    }
    //this line makes the event to function, else this keyword is not defined inside the setState method
    this.changename=this.changename.bind(this)
  }
  changename(){
    this.setState({
      name:'Philani'
    })
  }
  render(){
    return(
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changename}>CHANGE</button>
      </div>
    )
  }
}


export default Bind;