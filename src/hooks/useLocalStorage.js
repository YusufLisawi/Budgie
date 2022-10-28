import { useState, useEffect } from "react";

function getSavedValue(key, init) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (init instanceof Function) return init();
  return init;
}

export default function useLocalStorage(key, init) {
  const [val, setVal] = useState(() => {
    return getSavedValue(key, init);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, val);

  return [value, setVal];
}
