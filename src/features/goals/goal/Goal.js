import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGoal } from "../GoalsSlice";

import "./Goal.css";

export const Goal = ({
  id,
  text,
  color,
  confettiTrigger,
  setConfettiTrigger,
}) => {
  const dispatch = useDispatch();

  const [finished, setFinished] = useState(true);

  const onClickHandler = () => {
    setFinished(!finished);
    setConfettiTrigger(!confettiTrigger);
  };

  return finished ? (
    <div className="Goal" style={{ backgroundColor: color }}>
      <div className="ButtonsDisplay">
        <div
          className="Remove"
          onClick={() => dispatch(removeGoal({ id: id }))}
        >
          Remove
        </div>

        <div className="Done" onClick={onClickHandler}>
          Done
        </div>
      </div>
      {text}
    </div>
  ) : (
    <div
      className="Goal"
      style={{
        backgroundColor: "rgba(103, 110, 115, 0.2)",
        border: "2px solid rgba(201, 198, 198, 0.3)",
      }}
    >
      <div className="ButtonsDisplay">
        <div
          className="RemoveRedo"
          onClick={() => dispatch(removeGoal({ id: id }))}
        >
          Remove
        </div>

        <div className="DoneRedo" onClick={onClickHandler}>
          Redo
        </div>
      </div>
      {text}
    </div>
  );
};