import React from 'react'
import './Guess.css';

function Guess() {
  return (
    <div className='Guess'>
        <input className="letter-input" type="text" id="letter-one" />
        <input className="letter-input" type="text" id="letter-two" />
        <input className="letter-input" type="text" id="letter-three" />
        <input className="letter-input" type="text" id="letter-four" />
        <input className="letter-input" type="text" id="letter-five" />
    </div>
  )
}

export default Guess;