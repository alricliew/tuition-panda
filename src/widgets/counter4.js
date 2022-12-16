import React from 'react';
const { useState, useEffect } = React;

// Up Down Counter with Customizable Start, End & Period
// Reference: https://codepen.io/HunorMarton/pen/EqmyMN
// duration - Duration of the counts . Default : 1 (seconds)
// start - Starting value. Default : 0
// end - Finishing value. Default : 0
function Counter(props) {
  const [count, setCount] = useState(0)

  let duration = props.duration * 1000 || 1 * 1000; // * 1000 to convert to miliseconds
  let start =  props.start || 0;
  let end = props.end || 0;
  let direction = end - start >= 0 ? 'up' : 'down';
  let startTime = null;

  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = time => {

    // Register the start time
    if (!startTime) {
      startTime = time;
      previousTimeRef.current = time;
    }

    // Calc progress ellapsed
    const progress = Math.min((previousTimeRef.current - startTime) / duration, 1);
    let currentValue = (direction === 'up') ?  String(Math.ceil(progress * (end - start) + start)) :  String(Math.floor(start - progress * Math.abs(end - start)))

    // Update count
    setCount(currentValue)
    // console.log(progress)

    //checking to make sure the counter does not exceed the last value (end)
    if (progress < 1) {

      window.requestAnimationFrame(animate);
    } else {
      // window.cancelAnimationFrame(window.requestAnimationFrame(animate));
    }

    // Update current time
    previousTimeRef.current = time;
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return count
}

export default Counter;


