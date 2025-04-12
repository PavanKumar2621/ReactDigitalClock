// src/components/DigitalClock.js
import React, { useState, useRef } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [time, setTime] = useState('Present Time');
  const intervalRef = useRef(null);

  const showTime = () => {
    intervalRef.current = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalRef.current);
    setTime('Time Stopped');
  };

  return (
    <div id="container">
      <div id="clock">Digital Clock</div>
      <input id="me" type="text" value={time} readOnly /><br /><br />
      <div id="buttons">
        <button className="button" onClick={showTime}>Show</button>
        <button className="button" onClick={stopTime}>Close</button>
      </div>
    </div>
  );
};

export default DigitalClock;
