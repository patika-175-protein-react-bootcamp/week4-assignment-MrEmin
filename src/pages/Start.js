import React, { useEffect, useState } from 'react';
import '../App.css';
import { Circle, Line } from '../constans/icon';
import { useOperator } from '../contexts/operator';

function Start() {
    const [start, setStart] = useState([]);
  
    useEffect(() => {
      
    }, []);
  

  
    return (
      <div className='main'>
          <h2>Mathematics Game</h2>
          <span><Line /></span>
          <span>Total Score: {item.score}</span>
          <span>Total Questions {item.questions}</span>
          <span>Correct Answers {item.correct}</span>
          <button><Circle /></button>
      </div>
    );
  }
  
  export default Start;