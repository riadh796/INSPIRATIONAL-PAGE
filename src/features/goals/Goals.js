import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Goal } from "./goal/Goal";
import "./Goals.css";
import { selectGoals } from "./GoalsSlice";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "confetti-react";

export const Goals = () => {
  const goals = useSelector(selectGoals).goals;

  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const { width, height } = useWindowSize();

  const colors = ["#BA7077", "#819384", "#C18F6C", "#71899C"];
  return (
    <div className="Goals">
      {confettiTrigger ? (
        <Confetti
          width={120}
          height={height}
          recycle={false}
          onConfettiComplete={() => setConfettiTrigger(false)}
        />
      ) : null}
      {goals.map((goal) => {
        return (
          <Goal
            key={goal.id}
            id={goal.id}
            text={goal.text}
            color={colors[goal.id % 4]}
            confettiTrigger={confettiTrigger}
            setConfettiTrigger={setConfettiTrigger}
          />
        );
      })}
    </div>
  );
};