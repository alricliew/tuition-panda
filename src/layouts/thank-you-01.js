import React from 'react';
import SectionDefault from '../components/section-default';



function Services() {
  return (
    <div className='section-wrap'>

      <SectionDefault cPadding={'section-custom-t-100-b-100'} cBackground={'bg-custom-home-light-brown-with-img-overlay'}>

        <div className='row bg-white rounded' style={{paddingTop: '5rem', paddingBottom: '5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 30%), 0 4px 6px -2px rgb(0 0 0 / 25%);'}}>
          <div className="col-md-12">
            <h1 className='text-primary mb-5'> Thank You! 👨‍🏫👩‍🏫</h1>
            <h4> We've received your request. Our crew will get in touch with you very soon! </h4>

          </div>
        </div>
      </SectionDefault>


    </div>
  );
}

export default Services;