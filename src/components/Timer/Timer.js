import React from 'react';
import "./Timer.styles.scss"
export default function({timer, ...props}) {
  // NOTE: if the number is less than 10 it added a 0 to first;
  const minutes = String(Math.floor(timer / 60)).padStart(2,'0');
  const seconds = String(timer - minutes * 60).padStart(2,'0');

  return (
    <>
      <span className="timer-box">{seconds}</span>
      <span className="timer-box">{minutes}</span>
    </>
  )
}
