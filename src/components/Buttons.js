import React from "react";
import { Link } from "react-router-dom";

const Buttons = props => (
  <div className="buttons">
    <Link>
      <button>Start</button>
    </Link>
    
    <button onClick={props.start}>Restart</button>
  </div>
)

export default Buttons;