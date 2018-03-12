import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <h1>I'm The User Input Field!</h1>
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  )
}


export default userInput;