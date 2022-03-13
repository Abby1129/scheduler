import { useState } from "react";

export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
    } else {
      setMode(newMode);
      setHistory((prev) => [...prev, mode]);
    }
};

  const back = () => {
    if (history.length > 1) { 
      setHistory((prev) => prev.slice(0, -1));
      setMode(history[history.length - 1]); 
    }
  };

  return { mode, transition, back };
}
