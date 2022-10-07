import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, selectLatestId } from "../../features/goals/GoalsSlice";
import "./UserInput.css";

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  

  let newID = useSelector(selectLatestId);

  if (newID === undefined) {
    newID = 0;
  } else {
    newID = newID.id + 1;
  }

  const onChangeHandler = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      dispatch(addGoal({ id: newID, text: e.target.value }));
      setUserInput("");
    }
  };

  return (
    <div className="UserInput">
      <h1>What's on your mind today?</h1>
      <input
        maxLength={57}
        value={userInput}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => onKeyPressHandler(e)}
      />
    </div>
  );
};