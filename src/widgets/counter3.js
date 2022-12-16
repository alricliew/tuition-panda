import React from 'react';
import '../custom-theme.scss'
const { useState, useEffect, useRef } = React;

// Up Down Counter with Customizable Start, End & Period
// Reference: https://learnersbucket.com/examples/interview/number-increment-counter-in-javascript-react/
// duration - Duration of the counts . Default : 1 (seconds)
// start - Starting value. Default : 0
// end - Finishing value. Default : 0
function Counter(props) {
  const [count, setCount] = useState(0)

  let duration = props.duration || 1
  let start =  props.start || 0;
  let end = props.end || 0;
  let direction = end - start >= 0 ? 'up' : 'down';

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      //calculate the value to be used in calculating the number to be displayed
      // const progress = Math.min((currentTime - startTime) / duration, 1);
      //calculate what to be displayed using the value gotten above
      // let currentValue = (direction === 'up') ?  String(Math.floor(progress * (end - start) + start)) :  String(Math.floor(start - progress * Math.abs(end - start)))

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      // let currentValue = (count + deltaTime * 0.01) % 100
      setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
      // setCount(currentValue);

    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }



  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once


  return count
  // (
  //   <div>{count}</div>
  // );

}

export default Counter;


