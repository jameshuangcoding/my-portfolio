import { useEffect, useRef, useState } from 'react';

export const useTypingEffect = (text: string, duration: number): string => {
  const [currPosition, setCurrPosition] = useState(0);
  const currPositionRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrPosition((value) => value + 1);
      currPositionRef.current += 1;
      if (currPositionRef.current > text.length) clearInterval(intervalId);
    }, duration);
    return () => {
      clearInterval(intervalId);
      currPositionRef.current = 0;
      setCurrPosition(0);
    };
  }, [duration, text]);

  return text.substring(0, currPosition);
};
