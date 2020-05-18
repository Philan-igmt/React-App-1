// learning about event handling on Function Compenent

import React from 'react';

function Event(){
  const clickhandler=()=>{
    alert('the button is clicked')
  }
  return(
    <div>
        <button className='btn btn-danger' onClick={clickhandler}>Click me!</button>
    </div>
  )
}

export default Event;