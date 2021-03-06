import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <h1>I'm The User Input Field!</h1>
      <input className="inputStyle" type="text" onChange={props.changed} value={props.currentUserName} />
    </div>
  )
}


export default userInput;