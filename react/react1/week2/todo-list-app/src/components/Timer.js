import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer((count) => count + 1);
    }, 1000);
  }, [timer]);

  return <span>{timer}</span>;
};

export default Timer;
