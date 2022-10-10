import React from "react";
import "./Body.css";

import { UserInput } from "../userInput/UserInput";
import { Goals } from "../../features/goals/Goals";


import { useDispatch } from "react-redux";

export const Body = () => {
  const dispatch = useDispatch();

  return (
    <div className="Body">
      
      <div style={{ flexGrow: "3" }}>
        <UserInput />
        <Goals />
        
      </div>
      
      
    </div>
  );
};