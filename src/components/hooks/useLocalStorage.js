import { useState, useEffect } from 'react';

export function useLocalStorage(key, defVal) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defVal;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
