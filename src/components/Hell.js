// learn how to use props

import React from 'react';

function Hello(props){
  return(
    <div>
        <h1>Hello {props.name}</h1>
    </div>
  )
}

export default Hello;