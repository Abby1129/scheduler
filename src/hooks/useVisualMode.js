import { useState } from "react";

export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (!replace) {
      history.push(newMode);
    }
  };

  const back = () => {
    if (history.length > 1) {
      history.pop(); //Remove last history item
      setMode(history[history.length - 1]); //set mode to new last hist item
    }
    console.log(history);
  };

  return { mode, transition, back };
}
