import React from "react";
import "./Body.css";

import { UserInput } from "../userInput/UserInput";
import { Goals } from "../../features/goals/Goals";

//import leftArrow from "../../resources/line-angle-left.svg";
//import rightArrow from "../../resources/line-angle-right.svg";
import { useDispatch } from "react-redux";
/*import {
  changeCurrentBackgroundBack,
  changeCurrentBackgroundFront,
} from "../../features/background/BackgroundSlice";
*/
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