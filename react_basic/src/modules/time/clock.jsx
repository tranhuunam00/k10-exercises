import React, { useState, useEffect } from "react";
import "./Clock.css"; // import the CSS file

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container"> {/* add the clock-container class */}
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
