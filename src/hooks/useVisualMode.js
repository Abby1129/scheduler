import { useState } from "react";

export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
      setHistory((prev) => [...prev]);
    } else {
      setMode(newMode);
      // setHistory([...history, newMode]); // add new mode to history
      setHistory((prev) => [...prev, newMode]);
    }
    // console.log(history);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop(); //Remove last history item
      setMode(history[history.length - 1]); //set mode to new last history item
    }
    // console.log(history);
  };

  return { mode, transition, back };
}
