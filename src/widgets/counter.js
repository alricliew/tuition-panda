import React from 'react';
import '../custom-theme.scss'
const { useEffect, useRef, useState } = React;

// Up Down Counter with Customizable Start, End & Period
// Reference: https://learnersbucket.com/examples/interview/number-increment-counter-in-javascript-react/
// duration - Duration of the counts . Default : 1 (seconds)
// start - Starting value. Default : 0
// end - Finishing value. Default : 0
function Counter(props) {
  const countRef = useRef();

  let duration = props.duration || 1
  let start =  props.start || 0;
  let end = props.end || 0;
  let direction = end - start >= 0 ? 'up' : 'down';

  const countAnimate = (obj, start, end, duration, direction) => {
    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);

      //calculate what to be displayed using the value gotten above
      let currentValue = (direction === 'up') ?  String(Math.floor(progress * (end - start) + start)) :  String(Math.floor(start - progress * Math.abs(end - start)))
      obj.innerHTML = currentValue // String(Math.floor(progress * (end - start) + start));

      //checking to make sure the counter does not exceed the last value (end)
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
        // add time diff
        // const diff = currentTime - startTime;
        // const elm = document.createElement("SPAN");
        // elm.innerHTML = `  | Took : <b>${diff / 1000}</b> seconds to complete`;
        // obj.appendChild(elm);
      }

    };

    //start animating
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    countAnimate(
      countRef.current,
      parseInt(start),
      parseInt(end),
      parseInt(duration) * 1000,
      direction
    );
  });

  return (
    // <div>
      <span ref={countRef}>{start}</span>
    // </div>
  );

}

export default Counter;


