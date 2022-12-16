import React from 'react';
import { Link } from 'react-router-dom';

import SectionHeader from '../components/section-header';
import SectionDefault from '../components/section-default';
import Divider from '../components/divider';
import AnimatedCounterWidget from '../widgets/animated-counters-widget'


import '../custom-theme.scss'

function About() {
  const cCustom = {
    position:'relative',
    backgroundImage: "url('http://tuitionpanda.com/wp-content/uploads/2021/08/firmbee-com-gcsNOsPEXfs-unsplash.jpg')",
    backgroundAttachment:'fixed',
    backgroundSize: 'cover'
  }
  return (
    <div className='section-wrap'>

      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
        <div>
          <h6>A Few Words</h6>
          <h1 className='h1-de'>About</h1>
        </div>
      </SectionDefault>

      <SectionDefault>
        <div className='row'>
          <div className='col-md-4 text-md-start'>
            <h6>#1 Private Tuition Agency</h6>
            <h2>A Few Words About Us</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
              cDividerMargin={'py-4'}
              cDividerWidth={'wp-60'}
              cDividerHeight={'hp-3'}/>

          </div>
          <div className='col-md-8 text-md-start'>
            <p>
              TuitionPanda is a <strong>Malaysia-leading private tuition agency</strong> that delivers an unparalleled level of tutor finding experience to parents and students. With the industry's most comprehensive tutor pool, <strong>we help parents and students find their desired tutor easily</strong>.
            </p>
            <p>
              At TuitionPanda, we believe in the power of a good education can make a difference and ensure students are well-equipped with the help they need. Your kids' success is our success.
            </p>
            <p>
              Our tutor-finding services are <strong>100% FREE</strong> and we pride ourselves on successfully matching our clients with the most suitable and qualified tutors. All you have to do is pay for your lessons.
            </p>
          </div>

        </div>
      </SectionDefault>

      <SectionDefault cCustom={'section-custom-about'}>
        <div className='bg-overlay-dark'></div>
        <div className='text-md-start text-white' style={{paddingTop: "300px", position:'relative', }}>
          <h2 style={{fontSize: 'calc(1.5rem + 1.5vw)' }} >5+ Years of Excellence</h2>
          <h6>Leading Home Tuition, Online Tuition Agency In Malaysia And Singapore</h6>
        </div>
      </SectionDefault>

      <SectionDefault>
        <div className='row'>
          <div className='col-md-12 text-md-start'>
            <h2>Our Mission</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
              cDividerMargin={'py-4'}
              cDividerWidth={'wp-60'}
              cDividerHeight={'hp-3'}/>
            <p>
              Our mission is to transform the private tuition industry and become your <strong>#1 trusted private tuition agency</strong> in Malaysia and Singapore. We are  <u>streamlining our tutor-pairing</u>, providing an unparalleled level of customer service, responsible  <u>Personal Coordinators</u>, and  <u>ethical & transparent business practices</u> towards parents, students, and tutors.
            </p>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-linear-160-green-black'}>
        <AnimatedCounterWidget
          col={4}
          start={[0,0,0,0]}
          end={[300,12000,25,4]}
          duration={[2, 2,2,2]}
          prefix={['','','RM','']}
          suffix={['+','+','','']}
          subtitle={['Subjects', 'Happy Parents', 'Tuition Fee*', 'Countries']}
          topStyle={'text-primary-light'}
          titleStyle={['text-white', 'text-white', 'text-white', 'text-white']}
          counterStyle={['fs-14 fw-bold', 'fs-14 fw-bold', 'fs-14 fw-bold', 'fs-14 fw-bold']}
          prefixStyle={['fs-11 fw-bold', 'fs-11 fw-bold', 'fs-11 fw-bold', 'fs-11 fw-bold']}
          suffixStyle={['fs-11 fw-bold', 'fs-11 fw-bold', 'fs-11 fw-bold', 'fs-11 fw-bold']}
          subtitleStyle={['fs-5 fw-normal', 'fs-5 fw-normal', 'fs-5 fw-normal', 'fs-5 fw-normal']}
        />

        <Link className="btn btn-primary text-white" to={"/"}>Get A Tutor Now For FREE!</Link>

      </SectionDefault>

    </div>

  );
}

export default About;
