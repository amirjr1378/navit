import {useState, useEffect} from 'react';


export default function(start = 0) {
  const [timer, setTimer] = useState(start)

  useEffect(() => {
    const timerId = setInterval(() => setTimer(state => state -1), 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [start])
  return {
    timer
  }
}
