import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const updatedTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(updatedTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={updatedTime}>Get Time</button> */}
    </div>
  );
}

export default App;
