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
          <h6>Get the best offer from us</h6>
          <h1 className='h1-de'>Tuition Rate</h1>
        </div>
      </SectionDefault>


    </div>
  );
}

export default Services;