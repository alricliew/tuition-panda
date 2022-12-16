import React from 'react';
import Counter from '../widgets/counter'
import SectionDefault from '../components/section-default';
import Divider from '../components/divider';
import IconList from '../widgets/icon-list-widget';


function Services() {
  return (
    <div className='section-wrap'>

      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
        <div>
          <h6>What We Offer</h6>
          <h1 className='h1-de'>Our Services</h1>
        </div>
      </SectionDefault>

      <SectionDefault >
        <div className='row'>
          <div className='col-md-4 text-md-start'>
            <h6 className='fs-3 text-primary'>01.</h6>
            <h2 className='fs-1 text-primary-dark'>Home Tuition, <br/>1-to-1 Tuition</h2>

          </div>
          <div className='col-md-4 text-md-start'>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-4'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <p>
             Get matched with a experienced home tutor at from the comfort of your home in 24 hours. Tuition Panda guarantees
             parents are satisfied with our home tuition services and kids get their home tutoring immediately.
            </p>
          </div>
          <div className='col-md-4 p-4'>
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/08/homeschool-asian-little-young-girl-student-learning-sitting-table-working-with-his-mother-home-1-1.jpg"
            width="100%" height="auto" alt=""/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-md-start'>
            <h6 className='fs-3 text-primary'>02.</h6>
            <h2 className='fs-1 text-primary-dark'>Online Tuition</h2>

          </div>
          <div className='col-md-4 text-md-start'>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-4'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <p>
              With the recent COVID-19 measures, all face-to-face tuition has been suspended. But now's not the time to give up on your child's learning.
              Instead, why not try out online tutoring at the safety and comfort of your home?
            </p>
          </div>
          <div className='col-md-4'>
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/08/sarah-shaffer-O3gOgPB4sRU-unsplash.jpg"
            width="100%" height="auto" alt=""/>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault cBackground={'bg-primary-lighter'}>
        <div className='py-4'>
          <h6>Find All Our Services</h6>
          <h2 className='fs-1'>Better Education For Brighter Future</h2>
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

    </div>
  );
}

export default Services;