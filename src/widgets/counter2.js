// Number increment counter
// Reference: https://learnersbucket.com/examples/interview/number-increment-counter-in-javascript-react/


import React, { useState, useEffect, useRef } from "react";
import countAnimate2 from '../widgets/counter-method'

//Count Method -setInterval
const CountSetInterval = (props) => {
  const intervalRef = useRef();
  const countRef = useRef();

  // label of counter
  // number to increment to
  // duration of count in seconds
  const { number, duration } = props;

  // number displayed by component
  const [count, setCount] = useState("0");

  // calc time taken for computation
  const [timeTaken, setTimeTaken] = useState(Date.now());

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number);
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;

      //update uisng state
      setCount(String(start));

      //update using ref
      //   countRef.current.innerHTML = start;

      if (start === end) {
        clearInterval(timer);
        // clearTimeout(intervalRef.current);

        const diff = Date.now() - timeTaken;
        setTimeTaken(diff / 1000);

        //uncomment this when using ref
        // setCount(String(start));
      }
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <>
      <span ref={countRef} className="Count">
        {count}
      </span>{" "}
      {"     "}
      {number === count && (
        <span>
          | Took : <b>{timeTaken}</b> seconds to complete
        </span>
      )}
    </>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(false);
  const countRef = useRef();

  //If any input changes reset
  const basicReset = () => {
    setStart(false);
  };

  //store number
  const numberChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(value);
    basicReset();
  };

  //store duration
  const durationChangeHandler = (e) => {
    const { value } = e.target;
    setDuration(value);
    basicReset();
  };

  const startHandler = () => {
    // trigger the animation
    setStart(true);

    // obj, initVal, lastVal, duration
    countAnimate2(
      countRef.current,
      0,
      parseInt(number),
      parseInt(duration) * 1000
    );

  };

  const resetHandler = () => {
    window.location.reload();
  };


  return (
    <main style={{ width: "500px", margin: "50px auto" }}>
      <section className="input-area">
        <div>
          <div>
            <label htmlFor="number">Number:</label>{" "}
            <input
              id="number"
              type="number"
              value={number}
              onChange={numberChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration:</label>{" "}
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={durationChangeHandler}
            />
          </div>
        </div>
        <br />
        <div>
          <button onClick={startHandler}>start</button>{" "}
          <button onClick={resetHandler}>reset</button>
        </div>
      </section>
      <br />
      <section className="result-area">
        <div>
          Animate: <span ref={countRef}>0</span>
        </div>
      </section>
      {/* <section className="result-area">
        <div>
          SetInterval:{" "}
          {(start && (
            <CountSetInterval
              label={"count"}
              number={number}
              duration={parseInt(duration)}
            />
          )) ||
            0}
        </div>
      </section> */}
    </main>
  );
};

export default Counter;