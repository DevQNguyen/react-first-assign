import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h2 onClick={props.click}>This Box Belongs to {props.username}</h2>
      <p onClick={props.click}><strong>{props.username}</strong> Bacon ipsum dolor amet tenderloin capicola pig leberkas bresaola pastrami, salami fatback cow andouille picanha porchetta turkey ground round. Flank burgdoggen chuck.</p>
      <p onClick={props.click}>Chuck pork chop boudin tail pork belly. Alcatra tongue capicola tail shankle, pancetta boudin. Pastrami tongue sirloin filet mignon. Kevin alcatra swine sirloin chicken. Ground round corned beef turkey ham hock picanha tail landjaeger beef. <strong>{props.username}</strong></p>
    </div>

  )
}

export default userOutput; 