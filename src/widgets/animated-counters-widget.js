import React, { useEffect, useRef, useState, useCallback  } from 'react';
import AnimatedCounter from '../widgets/counter4'
import '../custom-theme.scss'

// col - Columns . Default : 4
// duration - Array of duration of the counts . Default : [1,1,1,1] (seconds)
// start - Array of Starting value. Default : [0,0,0,0]
// end -  Array of Finishing value. Default : [0,0,0,0]
// prefix -  Array of prefix text. Default : [,,,]
// suffix -  Array of prefix text. Default : [,,,]
// subtitle -  Array of subtitle text. Default : [,,,]
// topStyle -  Array of Title style. Default : [,,,]
// titleStyle -  Array of Title style. Default : [,,,]
// counterStyle -  Array of Title style. Default : [,,,]
// prefixStyle -  Array of prefix style. Default : [,,,]
// suffixStyle -  Array of prefix style. Default : [,,,]
// subtitleStyle -  Array of Subtitle style. Default : [,,,]
function AnimatedCountersWidget(props) {
  const myRef = useRef();
  // const myRef2 = useRef();
  // const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const [elementViewed, setElementViewed] = useState(false);
  const [runCounter, setRunCounter] = useState([]);

  // ---------------------------------------------------------------------------- //
  // ----- Version 1: Issue- everytime scroll through the ele, the remaining counter will be triggered
  // ---------------------------------------------------------------------------- //
  // Trigger a Function when Scrolling to an Element in React Intersection Observer
  // Reference https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/
  // useEffect(() => {
  //   const observer = new IntersectionObserver( (entries, observer) => {
  //     const entry = entries[0];
  //     updateMyElementIsVisible(entry.isIntersecting);

  //     // if (entry.isIntersecting && !elementViewed) {
  //       // setRunCounter(<AnimatedCounter start={0} end={1000} duration={3}/>);
  //       // setElementViewed(true)
  //     // }

  //     // console.log('entry', entry);
  //     // console.log('entry.isIntersecting', entry.isIntersecting);

  //   });
  //   // let target = document.querySelector('#a');
  //   // observer.observe(target);

  //   observer.observe(myRef.current);

  // }, []);

  // useEffect(() => {

  //   if (myElementIsVisible && !elementViewed) {
  //     // console.log('hi')
  //     setRunCounter(<AnimatedCounter start={0} end={1000} duration={3}/>);
  //     setElementViewed(true)
  //   }

  // }, [myElementIsVisible, elementViewed])
  // ---------------------------------------------------------------------------- //

  // ---------------------------------------------------------------------------- //
  // ------------------------------ Version 2 ----------------------------------- //
  // ---------------------------------------------------------------------------- //
  const handleScroll = useCallback(() => {
    const element = myRef.current;
    const elementPosition = element.getBoundingClientRect().bottom;
    // console.log(window.pageYOffset, elementPosition, window.innerHeight)

    if (elementPosition < window.innerHeight) {
      if (!elementViewed) {
        // setRunCounter(<AnimatedCounter start={0} end={1000} duration={3}/>);
        setRunCounter([<AnimatedCounter start={props.start[0]} end={props.end[0]} duration={props.duration[0]}/>,
                        <AnimatedCounter start={props.start[1]} end={props.end[1]} duration={props.duration[1]}/>,
                        <AnimatedCounter start={props.start[2]} end={props.end[2]} duration={props.duration[2]}/>,
                        <AnimatedCounter start={props.start[3]} end={props.end[3]} duration={props.duration[3]}/>]);

        setElementViewed(true)
        // Make sure the counter run only Once
        window.removeEventListener("scroll", handleScroll)
      }
      return;
    }
  }, [props, elementViewed])


  // Attach the scroll listener to the div
  useEffect(() => {
    const element = myRef.current;
    const elementPosition = element.getBoundingClientRect().bottom;
    // console.log(window.pageYOffset, elementPosition, window.innerHeight)

    // If ele is fall within the viewport, run AnimatedCounter.
    // Else, attach scroll listenr to check if we scroll into the element
    if (elementPosition < window.innerHeight){
      if (!elementViewed) {
        setRunCounter([<AnimatedCounter start={props.start[0]} end={props.end[0]} duration={props.duration[0]}/>,
                        <AnimatedCounter start={props.start[1]} end={props.end[1]} duration={props.duration[1]}/>,
                        <AnimatedCounter start={props.start[2]} end={props.end[2]} duration={props.duration[2]}/>,
                        <AnimatedCounter start={props.start[3]} end={props.end[3]} duration={props.duration[3]}/>]);
        setElementViewed(true)
      }
      return;
    }
    else {

      window.addEventListener("scroll", handleScroll)
    }
  }, [props, elementViewed, handleScroll])



  function createItem(pos, props){
    return (
      <div className={`col ${props.topStyle}`} >
        <div className={props.titleStyle[pos]}>
          <span className={props.prefixStyle[pos]}>{props.prefix[pos]}</span>
          <span className={props.counterStyle[pos]}>{runCounter[pos]}</span>
          <span className={props.suffixStyle[pos]}>{props.suffix[pos]}</span>
        </div>
        <div className={props.subtitleStyle[pos]}>{props.subtitle[pos]}</div>

      </div>
    )
  }
  function createAllItems(col){
    if (props.col === 1){
      return (<div className='row'>{createItem(0, props)}</div>)
    }
    else if (props.col === 2){
      return (<div className='row'>{createItem(0, props)} {createItem(1, props)}</div>)
    }
    else if (props.col === 3){
      return (<div className='row'>{createItem(0, props)} {createItem(1, props)} {createItem(2, props)}</div>)
    }
    else if (props.col === 4){
      return (<div className='row'>{createItem(0, props)} {createItem(1, props)} {createItem(2, props)} {createItem(3, props)}</div>)
    }
    else{}
  }

  return (
    <div className="pb-5"  ref={myRef}>
      {createAllItems(props)}
      {/* <div className='row'  ref={myRef}>
        <div className="col">
          <h2>{runCounter[0]}</h2>
        </div>
        <div className="col">
          <h2>{runCounter[1]}</h2>
        </div>
        <div className="col">
          <h2>{runCounter[2]}</h2>
        </div>
        <div className="col">
          <h2>{runCounter[3]}</h2>
        </div>
      </div> */}
    </div>

  );
}

export default AnimatedCountersWidget;
