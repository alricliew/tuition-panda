import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import SectionDefault from '../components/section-default';
import Divider from '../components/divider';
import IconList from '../widgets/icon-list-widget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageTutor1 from '../img/tutor-sample-1.png'
import ImageTutor2 from '../img/tutor-sample-2.png'

function Tutor() {
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="section-wrap">
      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
        <div>
          <h6>Get Unlimited Tutoring Jobs</h6>
          <h1 className='h1-de'>Tutor</h1>
        </div>
      </SectionDefault>
      <SectionDefault>
        <div className='row'>
          <div className="col-md-12">
            <h2 className='text-primary-darker fw-bold'>Join As Panda Tutor &<br/> Get Unlimited Home Tutoring Jobs</h2>
            <p>We are <strong>fast-growing home tuition agencies</strong> in the Malaysia and Singapore.
              We offer <strong>1 to 1 home tutoring services</strong> to our parents at <strong>guaranteed tuition rate</strong>. Join us today!
            </p>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault cPadding={'py-4'}>
        <div className='row'>
          <div className='col-md-4 text-md-start align-self-center'>
            <h6 className='text-primary-dark fs-2'>01.</h6>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <h2 className='text-primary-dark fw-bold fs-1'>How To Join?</h2>

            <p className='fw-bold my-0'>Requirements:</p>
            <p>
              1. Malaysian (except for foreign language tutor)<br/>
              2. At least 6 months tutoring experience<br/>
              3. Able to travel to student's house.
            </p>

          </div>
          <div className='col-md-4 text-md-start  align-self-center'>
            <p className='fw-bold my-0'>All we need:</p>

            <IconList
              cGapSpacing='py-1'
              cFontSize='fs-6'
              cFontWeight = 'fw-normal'
              cIcon={['fa-solid fa-circle', 'fa-solid fa-circle', 'fa-solid fa-circle', 'fa-solid fa-circle', 'fa-solid fa-circle']}
              cIconColor='text-primary'
              cIconFontSize=''
              cText={['Full Name', 'Contact Number', 'Teaching Location', 'Subjects that you can teach*', 'Years of Teaching Experience']}
              cTextColor='text-primary-darker'
              cTextFontSize=''
              cSpacing='ps-2'
              cLink={['', '', '', '', '']}>
            </IconList>
            <p className='fst-italic fw-light'>* If we have a parent who is looking for particular subjects, we would prioritize you first.</p>
            <a className='btn btn-primary text-white' href="#form">Join Us Now!</a>
          </div>
          <div className="col-md-4 align-self-center">
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/09/E-Learning.jpg"
              width="100%" height="auto" alt=""/>
          </div>
        </div>
      </SectionDefault>
      <SectionDefault cPadding={'py-4'}>
        <div className='row'>
          <div className="col-md-12">
            <h6 className='text-primary-dark fs-2 text-md-start'>02.</h6>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <h2 className='text-primary-dark fw-bold fs-1 text-md-start'>How To Get A Job?</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3 mt-3 text-md-start'>
            <h5 className='fw-bold my-0' style={{color: '#FF6B16', letterSpacing: '2px'}}>STEP 1</h5>
            <p>
              Let us know that you wish to take a tutoring job by <strong className='text-primary-dark'>sending us the job code</strong>.
            </p>
            <h6 className='fw-bold text-primary' style={{letterSpacing: '1px'}}>Person: Tutor & Us</h6>

          </div>
          <div className='col-md-3 mt-3 text-md-start'>
            <h5 className='fw-bold my-0' style={{color: '#FF6B16', letterSpacing: '2px'}}>STEP 2</h5>
            <p>
              We will collect a <strong className='text-primary-dark'>30 - 50% first-month fee as commission</strong>. No worry, we will refund you if the job failed eventually.
            </p>
            <h6 className='fw-bold text-primary' style={{letterSpacing: '1px'}}>Person: Tutor & Us</h6>

          </div>
          <div className='col-md-3 mt-3 text-md-start'>
            <h5 className='fw-bold my-0' style={{color: '#FF6B16', letterSpacing: '2px'}}>
              STEP 3
            </h5>
            <p className='my-0'>
              <span className='text-white px-3 py-1 rounded-pill fw-bold' style={{background: 'red', fontSize:'x-small'}}>IMPORTANT!</span>
            </p>
            <p>
              <strong className='text-primary-dark'>Write a good description of yourself</strong>. Attach a nice photo, resume,
              certificates, or any relevant documents if needed.
            </p>
            <h6 className='fw-bold text-primary' style={{letterSpacing: '1px'}}>Person: Tutor & Parents</h6>
            <div className='mt-1'>
              <a className='btn btn-primary text-white' href='javascript:;' onClick={handleShow}>
                View Sample
              </a>
            </div>
          </div>
          <div className='col-md-3 mt-3 text-md-start'>
            <h5 className='fw-bold my-0' style={{color: '#FF6B16', letterSpacing: '2px'}}>STEP 4</h5>
            <p>
            If a job failed**, you need to notify us so we can perform a <strong className='text-primary-dark'>full commission refund</strong> back to you.
            </p>
            <h6 className='fw-bold text-primary' style={{letterSpacing: '1px'}}>Person: Tutor & Us</h6>
            <p className='fst-italic fw-light'>** Independent verification will be carried out to understand the cause of job failure.</p>

          </div>

        </div>
      </SectionDefault>

      <SectionDefault cPadding={'py-4'}>
        <div className='row'>
          <div className="col-md-12 text-md-start">
            <h6 className='text-primary-dark fs-2 text-md-start'>03.</h6>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <h2 className='text-primary-dark fw-bold fs-1 text-md-start'>Potential Earning</h2>
            <p><strong className='text-primary-dark'>RM500-2000</strong> Part-time or <strong className='text-primary-dark'>RM2000-5000</strong> as a full-time tutor. </p>
            <p>
              A part-time tutor means you have a full-time job or are still in studies, and you are conducting a class on your own time.
              A full-time tutor means you decided to go full-time to be a home or online tutor.
            </p>
            <h5 className='fw-bold my-0' style={{color: '#FF6B16', letterSpacing: '2px'}}>Example</h5>
            <p>
              A parent is looking for Form 1 English Home Tutor in Klang Vallley. The tuition rate is RM50/hour, 2 hours per lesson per week.
              Assuming there are 4 weeks in a month.
            </p>
            <p className='fw-bold text-primary fs-6'>Your Earning = RM50/Hour  <FontAwesomeIcon icon="fa-solid fa-xmark" />  2 Hours/Week
            <FontAwesomeIcon icon="fa-solid fa-xmark" />  4 Weeks = RM400 / Month </p>
          </div>
        </div>


      </SectionDefault>

      <SectionDefault cBackground={'bg-primary-lighter'}>
        <div className='py-4'>
          <h6>Let Us Know If You Are Good At Other Services</h6>
          <h2 className='fs-1'>All Services That We Provide</h2>
        </div>
        <div className='row'>
          <div className="col">
            <IconList
              cGapSpacing='py-2'
              cFontSize='fs-4'
              cFontWeight = 'fw-bold'
              cIcon={['fa-solid fa-circle-check', 'fa-solid fa-circle-check', 'fa-solid fa-circle-check']}
              cIconColor='text-primary'
              cIconFontSize=''
              cText={['Face-to-face tutoring', 'Exam Preparation', 'Subjects Enhancement Class']}
              cTextColor='text-primary-darker'
              cTextFontSize=''
              cSpacing='ps-3'
              cLink={['','','']}>
            </IconList>
          </div>
          <div className="col">
            <IconList
              cGapSpacing='py-2'
              cFontSize='fs-4'
              cFontWeight = 'fw-bold'
              cIcon={['fa-solid fa-circle-check', 'fa-solid fa-circle-check', 'fa-solid fa-circle-check']}
              cIconColor='text-primary'
              cIconFontSize=''
              cText={['Homework Guidance', 'Revision', 'Mock Exam']}
              cTextColor='text-primary-darker'
              cTextFontSize=''
              cSpacing='ps-3'
              cLink={['','','']}>
            </IconList>
          </div>
          <div className="col">
            <IconList
              col={4}
              cGapSpacing='py-2'
              cFontSize='fs-4'
              cFontWeight = 'fw-bold'
              cIcon={['fa-solid fa-circle-check', 'fa-solid fa-circle-check', 'fa-solid fa-circle-check']}
              cIconColor='text-primary'
              cIconFontSize=''
              cText={['Pre-school Phonic and Math', 'Homeschooling', 'Daycare + Nightcare']}
              cTextColor='text-primary-darker'
              cTextFontSize=''
              cSpacing='ps-3'
              cLink={['','','']}>
            </IconList>
          </div>
        </div>
      </SectionDefault>

      <div id='form'></div>

      {/* Sample Modal */}
      <Modal size='lg' show={show} onHide={handleClose} contentClassName='bg-overlay-linear-160-green-black'>

        <Modal.Body>
          <div className='bg-transparent text-white' style={{position:'absolute', right:'1rem', cursor:'pointer'}} onClick={handleClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </div>
          <div className="row text-center pt-3 text-white">
            <h2>Self-Introduction Sample</h2>
          </div>
          <div className="row p-lg-4 p-md-2">
            <div className="col-md-6 mt-2">
              <div className='bg-white p-2 rounded-2 text-center'>
                <div className="" style={{height: 'auto',width: '100%', display: 'inline-block', position: 'relative', overflow: 'hidden'}}>
                  <img className="tutor-profile-image" style={{height: '100%',width: '100%', objectFit: 'cover'}} id="imgUrl" alt=''
                  src={ImageTutor1}/>
                </div>
              </div>

            </div>

            <div className="col-md-6 mt-2">
              <div className='bg-white p-3 rounded-2 text-center'>
                <div className="" style={{height: 'auto',width: '100%', display: 'inline-block', position: 'relative', overflow: 'hidden'}}>
                  <img className="tutor-profile-image" style={{height: '100%',width: '100%', objectFit: 'cover'}} id="imgUrl" alt=''
                  src={ImageTutor2}/>
                </div>
              </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Tutor;
