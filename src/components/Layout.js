import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOperator } from "../contexts/operator";
import { Ellipse } from "../constants/icon";

function Layout({ children }) {
  return (
    <>
      <div className="Layout">
        <Link to="/start">
          <span>Start</span>
        </Link>
        <Link to="/restart">
          <strong>
            <Ellipse />
          </strong>
          Restart
        </Link>
      </div>
    </>
  );
}

export default Layout;
