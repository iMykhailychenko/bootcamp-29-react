import { useEffect, useState, useRef } from 'react';

import { Button } from 'components/Button';
import { formatTime } from 'helpers/time';
import { IoStopOutline, IoPlayOutline } from 'react-icons/io5';

export const Timer = () => {
  const paragraphRef = useRef();

  const timerRef = useRef();
  const [time, setTime] = useState(0);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 0);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      handleStop();
    };
  }, []);

  return (
    <>
      <p ref={paragraphRef} className="h1 mb-4 text-center">
        {formatTime(time)}
      </p>

      <div className="d-flex justify-content-center">
        <Button onClick={handleStart} className="btn-primary btn-lg mx-2">
          <IoPlayOutline />
        </Button>

        <Button onClick={handleStop} className="btn-danger btn-lg mx-2">
          <IoStopOutline />
        </Button>
      </div>
    </>
  );
};
