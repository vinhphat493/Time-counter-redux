import React from "react";
import Timer from "./Timer/Timer";
import "./Timers.css";

const timer = props => {
  const { infoTimer } = props;
  let showTimer = [];
  for (let timer in infoTimer) {
    if (timer !== "activeSession") {
      showTimer.push({
        key: timer,
        value: infoTimer[timer]
      });
    }
  }
  return (
    <div className="Timers">
      <p className="title__introduct">Total time spent on the project</p>
      <div className="Timers__container">
        <p className="title__introduct title_introduct--right">
          Active session: {infoTimer.activeSession}
        </p>
        <div className="Timers__row">
          {showTimer.map(e => (
            <Timer key={e.key} name={e.key} value={e.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default timer;
