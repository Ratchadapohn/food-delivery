import React from "react";
import "./Time.css";

const Time = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="time">
      <p>{`${formatTime(hours)}:${formatTime(minutes)}`}</p>
    </div>
  );
};

export default Time;
