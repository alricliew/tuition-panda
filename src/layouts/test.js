import React, { useEffect, useRef, useState, useCallback  } from 'react';
import AnimatedCounterWidget from '../widgets/animated-counters-widget'
import AnimatedCounter from '../widgets/counter'
import Counter3 from '../widgets/counter3'
import Counter4 from '../widgets/counter4'

import RequestForm from '../widgets/form-request'
import ReactBootstrapMultistepForm from '../widgets/form-wizard-request'
import FormWizardRequest from '../widgets/form-wizard-formiz'
import FormSimpleValidationBootstrap from '../widgets/form-simple-validation-bootstrap'


import SectionDefault from '../components/section-default';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


// import '../custom-theme.scss'


// duration - Array of duration of the counts . Default : [1,1,1,1] (seconds)
// start - Array of Starting value. Default : [0,0,0,0]
// end -  Array of Finishing value. Default : [0,0,0,0]
function Test(props) {
  const myRef = useRef();
  const myRef2 = useRef();

  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const [elementViewed, setElementViewed] = useState(false);
  const [runCounter, setRunCounter] = useState([]);


  return (
    <div className="app">


      {/* Request Form */}
      {/* <SectionDefault>

        <div>
          <FormSimpleValidationBootstrap>

          </FormSimpleValidationBootstrap>
        </div>

      </SectionDefault> */}

      {/* <div classNameName="d-flex bd-highlight mb-3  flex-wrap" >
        <div className="p-2 me-auto bd-highlight new-order-1" style={{background: "red"}}>Flex item 1</div>
        <div className="p-2 bd-highlight new-order-2" style={{background: "green"}}>Flex item 2</div>
        <div className="p-2 ms-auto bd-highlight new-order-3" style={{background: "blue"}}>Flex item 3</div>
      </div> */}

      {/* Request Form */}
      {/* <SectionDefault>

        <div>
          <FormWizardRequest>

          </FormWizardRequest>
        </div>

      </SectionDefault> */}

      {/* Request Form */}
      <SectionDefault>
        <ReactBootstrapMultistepForm>

        </ReactBootstrapMultistepForm>
      </SectionDefault>

      {/* Request Form */}
      {/* <SectionDefault>
        <RequestForm>

        </RequestForm>
      </SectionDefault> */}

      {/* Counter */}
      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-linear-160-green-black'}>
        <AnimatedCounterWidget
          col={4}
          start={[0,200,0,190]}
          end={[100,0,500,0]}
          duration={[0, 1,2,3]}
          prefix={['RM','SGD','','']}
          suffix={['','+','++','']}
          subtitle={['Students', 'School', '', 'House']}
          topStyle={'text-white'}
          titleStyle={['fs-1 fw-bold', '', '', '']}
          counterStyle={['', 'fs-13 fw-bold text-danger', 'fs-15 fw-bold', 'fs-16 fw-bold']}
          prefixStyle={['', 'fs-3 fw-bold', 'fs-3 fw-bold', 'fs-3 fw-bold']}
          suffixStyle={['', 'fs-3 fw-bold', 'fs-3 fw-bold', 'fs-3 fw-bold']}
          subtitleStyle={['fs-3 fw-bolder', 'fs-2 fw-normal', 'fs-4 fw-bold', 'fs-6 fw-bold']}

        />
        {/* <div className='row'  ref={myRef}>
          <div className="col">
            <h2>{runCounter[0]}</h2>
          </div>
          <div className="col">
            <h2>{runCounter[1]}</h2>
          </div>
          <div className="col">

          </div>
          <div className="col">

          </div>
        </div> */}
      </SectionDefault>
      <h1><Counter4 start={0} end={12000} duration={2}/></h1>
      {/* Test page
      // <h1><AnimatedCounter start={0} end={200} duration={1}/></h1>
      <h2><AnimatedCounter start={200} end={100} duration={2}/></h2>
      <div style={{margin: '800px 0'}}></div>
      <div>
        <h2 ref={myRef2}>hihi {runCounter[0]}</h2>
        <h2 ref={myRef2}>hihi {runCounter[1]}</h2>
        <h2 ref={myRef2}>hihi {runCounter}</h2>

      </div> */}
      <div ref={myRef}></div>
    </div>

  );
}

export default Test;
