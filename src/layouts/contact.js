import React from 'react';
import SectionDefault from '../components/section-default';
import Divider from '../components/divider';
import IconList from '../widgets/icon-list-widget';
import '../custom-theme.scss'


function Contact() {
  return (
    <div className='section-wrap'>

      <SectionDefault cPadding={'section-header-p'} cBackground={'bg-overlay-white-green'}>
        <div>
          <h6>Get In Touch With Us</h6>
          <h1 className='h1-de'>Contact Us</h1>
        </div>
      </SectionDefault>
      <SectionDefault  cPadding={'py-6'}>
        <div className='row'>
          <div className='col-md-6 text-md-start'>
            <h2 className='text-primary-dark fw-bold'>Contact Detail</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-4'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
            <p>If you would like to contact us, please send your comments and questions to:</p>
            <IconList
              cGapSpacing='py-2'
              cFontSize='fs-6'
              cFontWeight = 'fw-normal'
              cIcon={['fa-solid fa-location-dot', 'fa-solid fa-envelope']}
              cIconColor='text-primary'
              cIconFontSize=''
              cText={['Subang Hi-Tech Industrial Park, 40150 Subang Jaya, Selangor Darul Ehsan', 'support@tuitionpanda.com']}
              cTextColor='text-primary-darker'
              cTextFontSize=''
              cSpacing='ps-3'
              cLink={['', 'mailto:support@tuitionpanda.com']}>
            </IconList>
          </div>
          <div className='col-md-6 text-md-start'>
            <h2 className='text-primary-dark fw-bold'>Send Us A Message</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-4'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>

          </div>

        </div>
      </SectionDefault>
    </div>
  );
}

export default Contact;
