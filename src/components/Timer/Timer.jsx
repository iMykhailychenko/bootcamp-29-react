import { useEffect, useState, useRef } from 'react';

import { Button } from 'components/Button';
import { formatTime } from 'helpers/time';
import { IoStopOutline, IoPlayOutline } from 'react-icons/io5';

const ONE_SECOND = 1000;

export const Timer = () => {
  const paragraphRef = useRef();

  const timerRef = useRef();
  const [time, setTime] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('setInterval');
  //     setTime(new Date());
  //   }, ONE_SECOND);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      console.log('setInterval');
      setTime(prev => prev + 1);
    }, 0);
  };

  const handleStop = () => {
    console.log(timerRef.current);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    console.log(paragraphRef);

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

// export class Timer extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//     }, ONE_SECOND);
//   }

//   componentWillUnmount() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   render() {
//     const { time } = this.state;

//     return (
//       <>
//         <p className="h1 mb-4 text-center">{formatTime(time)}</p>

//         <div className="d-flex justify-content-center">
//           <Button className="btn-primary btn-lg mx-2">
//             <IoPlayOutline />
//           </Button>

//           <Button className="btn-danger btn-lg mx-2">
//             <IoStopOutline />
//           </Button>
//         </div>
//       </>
//     );
//   }
// }
