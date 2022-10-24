import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });
  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
