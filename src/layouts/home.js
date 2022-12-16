import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Component
import SectionDefault from '../components/section-default';
import Divider from '../components/divider';
import ModalRequestForm from '../components/modal-form-req';

// Widget
import IconBox from '../widgets/icon-box';
import Testimonial from '../widgets/testimonial';
import ReactBootstrapMultistepForm from '../widgets/form-wizard-request'

// Other
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

import TopLeft from '../img/malay-muslim-women-in-pink-outfit.jpg'
import BottomLeft from '../img/chinese-male-standing-in-front-of-staircase.jpg'
import TopRight from '../img/indian-lecturer-teaching.jpg'
import BottomRight from '../img/asian-female-teacher-guiding-boy-learning-laptop.jpg'
import Image1 from '../img/chinese-mom-teaches-daughter-drawing.jpg'
import Image2 from '../img/dad-teaching-son-and-daughter-tablet.jpg'
import ImageTestimonial3 from '../img/3.jpg'
import ImageTestimonial5 from '../img/5.jpg'
import ImageTestimonial6 from '../img/6.jpg'
import ImageTestimonial8 from '../img/8.jpg'
import ImageTestimonial9 from '../img/9.jpg'
import ImageWA1 from '../img/whatsapp-1.png'
import ImageWA2 from '../img/whatsapp-2.png'
import ImageWA3 from '../img/whatsapp-3.png'
import ImageWA4 from '../img/whatsapp-4.png'
import ImageWA5 from '../img/whatsapp-5.png'
import ImageWA6 from '../img/whatsapp-6.png'
import ImageSample2 from '../img/2.jpg'
import ImageSample4 from '../img/4.jpg'
import ImageSample10 from '../img/10.jpg'


function launchGalary(_i, changeCurrentIndex, changeGalOpen){
  changeCurrentIndex(_i);
  changeGalOpen(true);
}

function Home() {
  let [galopen, changeGalOpen]           = useState(false);
  let [singOpen, changeSing]             = useState(false);
  let [currentIndex, changeCurrentIndex] = useState(0);
  let images = [
    {
      url: ImageWA1,
      title: ""
    },
    {
      url: ImageWA2,
      title: ""
    },
    {
      url: ImageWA3,
      title: ""
    },
    {
      url: ImageWA4,
      title: ""
    },
    {
      url: ImageWA5,
      title: ""
    },
    {
      url: ImageWA6,
      title: ""
    }
  ]

  // Modal - Sample
  const [modalSampleShow, setModalSampleShow] = useState(false);
  const handleModalSampleClose = () => setModalSampleShow(false);
  const handleModalSampleShow = () => setModalSampleShow(true);
  // // Modal - Request Form
  // const [modalReqShow, setModalReqShow] = useState(false);
  // const handleModalReqClose = () => setModalReqShow(false);
  // const handleModalReqShow = () => setModalReqShow(true);


  return (
    <div className="section-wrap">
      <SectionDefault cPadding={'py-5'} cBackground={''}>
        <div className="row">
          <div className='col-md-6 text-md-start align-self-center py-3'>
            <h6 className='text-primary-darker fw-bold' style={{letterSpacing:'2px', fontSize:'small'}}>YOUR TRUSTED PRIVATE TUITION AGENCY</h6>
            <h1 className='fs-14 text-primary' style={{fontWeight:'bold', lineHeight:'1'}}>Home Tuition, Online Tuition</h1>
            <h3 className='fs-5 mt-3'>Get The Best Education For Your Loved One.</h3>
            <div className='mt-4'>
              <a className='btn btn-primary text-white px-4' href='#form'>
                Get A Tutor Now
              </a>
            </div>
            <div className='mt-1 mb-4 text-primary-darker' style={{fontSize:'small', fontWeight:'400'}}>
              <span>Experienced Tutor </span> &#x2022;
              <span> Quality Guaranteed</span> &#x2022;
              <span> Free Service</span>
            </div>

          </div>
          <div className="col-md-3 col-6 px-2">
            {/* Top Left */}
            <div className='d-flex justify-content-end' style={{position: 'relative'}}>
              <div style={{ width:'65%', position: 'relative'}}>
                <img src={TopLeft}
                  width="100%" height="auto" alt="" style={{borderRadius: '1.2rem'}}/>

                <div className='mb-1'style={{position: 'absolute', bottom:'0', left:'0', right:'0', display:'flex', justifyContent:'center'}}>
                  <div className='px-2 py-1' style={{background:'white', borderRadius: '.5rem', fontSize:'x-small', lineHeight: '1.2'}}>
                    <p className='m-0' style={{}}><strong style={{fontSize:'small'}}>Aishah</strong> 26</p>
                    <i className='m-0' style={{fontSize:'x-small'}}>Math Tutor</i>
                  </div>
                </div>
              </div>


            </div>
            {/* Bottom Left */}
            <div className='d-flex justify-content-end' style={{marginTop: '1rem'}}>
              <div style={{ width:'75%', position: 'relative'}}>
                <img src={BottomLeft}
                  width="100%" height="auto" alt="" style={{borderRadius: '1.2rem'}}/>
                <div className='mb-1'style={{position: 'absolute', bottom:'0', left:'0', right:'0', display:'flex', justifyContent:'center'}}>
                  <div className='px-2 py-1' style={{background:'white', borderRadius: '.5rem', fontSize:'x-small', lineHeight: '1.2'}}>
                    <p className='m-0' style={{}}><strong style={{fontSize:'small'}}>Wong</strong> 45</p>
                    <i className='m-0' style={{fontSize:'x-small'}}>Physics Teacher</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 px-2">
            {/* Top Right */}
            <div className='d-flex justify-content-start' style={{marginTop: '2rem'}}>
              <div style={{ width:'90%', position: 'relative'}}>
                <img src={TopRight}
                  width="100%" height="auto" alt="" style={{borderRadius: '1.2rem'}}/>
                <div className='mb-1 me-2'style={{position: 'absolute', bottom:'0',  right:'0', display:'flex', justifyContent:'center'}}>
                    <div className='px-2 py-1' style={{background:'white', borderRadius: '.5rem', fontSize:'x-small', lineHeight: '1.2'}}>
                      <p className='m-0' style={{}}><strong style={{fontSize:'small'}}>Monica</strong> 31</p>
                      <i className='m-0' style={{fontSize:'x-small'}}>Lecturer</i>
                    </div>
                  </div>
              </div>

            </div>
            {/* Bottom Right */}
            <div className='d-flex justify-content-start' style={{marginTop: '1rem'}}  id='form'>
              <div style={{ width:'75%', position: 'relative'}}>
                <img src={BottomRight}
                  width="100%" height="auto" alt="" style={{borderRadius: '1.2rem'}}/>
               <div className='mb-1 ms-2'style={{position: 'absolute', bottom:'0', left:'0',}}>
                  <div className='px-2 py-1' style={{background:'white', borderRadius: '.5rem', fontSize:'x-small', lineHeight: '1.2'}}>
                    <p className='m-0' style={{}}><strong style={{fontSize:'small'}}>Janice</strong> 34</p>
                    <i className='m-0' style={{fontSize:'x-small'}}>ICT Trainer</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionDefault>

      <div ></div>
      <SectionDefault cPadding={'section-custom-t-100-b-100'} cBackground={'bg-custom-home-light-brown-with-img-overlay'}>
        <div className="row mb-5" style={{marginTop:'-120px'}}>

          {/* Request Form */}
          <ReactBootstrapMultistepForm>
          </ReactBootstrapMultistepForm>
        </div>
        <div className="row text-md-start ">
          <div className='col-md-7'>
            <h6 className='text-primary-dark fw-bold' style={{letterSpacing:'2px', fontSize:'small'}}>3 EASY STEPS</h6>
            <h2 className='fs-1'>Find Home Tutor, Online Tutor</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
          </div>
          <div className='col-md-5'>
          </div>
        </div>
        <div className="row text-start mt-3">
          <div className="col-md-4 mt-3">
            <h6 className='text-primary-dark fs-6'>01.</h6>
            <h3 className='text-primary-darker fw-bold fs-4'>Request</h3>
            <p className=''>Request for a suitable tutor by submitting a 1-min form.</p>
            <div className='mt-4'>
              <a className='btn-primary-transparent' href='#subject'>
                <span className='pe-1'>View Popular Subjects</span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <h6 className='text-primary-dark fs-6'>02.</h6>
            <h3 className='text-primary-darker fw-bold fs-4'>Receive</h3>
            <p className=''>Get tutor recommendations within 24 hours.</p>
            <div className='mt-4'>
              <a className='btn-primary-transparent' href='javascript:;' onClick={handleModalSampleShow}>
                View Sample
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <h6 className='text-primary-dark fs-6'>03.</h6>
            <h3 className='text-primary-darker fw-bold fs-4'>Start Lesson</h3>
            <p className=''>Choose a suitable tutor and start your first lesson!.</p>
            <div className='mt-4'>
              <a className='btn-primary-transparent' href='#form'>
                Start Now
              </a>
            </div>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault>
        <div className="row text-start ">
          <div className='col-md-6 p-5'>
            <img src={Image1}
              width="100%" height="auto" alt="" style={{borderRadius: '1.2rem'}}/>

          </div>
          <div className='col-md-6'>
            <h2 className='fs-1'>Your Children's Success Is Our Success</h2>
            <h6 className='fw-bold py-3'>Our misssion is to find you Reliable & Trustworthy Home Tutor, Online Tutor</h6>
            <p>We know the pain of contacting agency after agency and not getting any results 🙁</p>
            <p>Here, Tuition Panda teams work extremely hard to ensure that every single request for tutor is fulfilled.</p>
            <p>Our tutor-matching system is designed to connect you with the best home tutoring to suit your private home tuition needs.</p>
            <p className='text-primary-dark fw-bold py-2'>No contracts. No agent fees. Pay only for lessons conducted.</p>

            <div className='mt-4'>
              <a className='btn btn-primary text-white px-4' href='#form'>
                Get A Tutor Now
              </a>
            </div>
          </div>
        </div>

      </SectionDefault>

      <SectionDefault>
        <div className="row">
          <div className="col-12">
            <h6 className='text-primary-dark fw-bold' style={{letterSpacing:'2px', fontSize:'small'}}>This Is Why</h6>
            <h2 className='fs-1'>You Should Choose Us</h2>
            <Divider cTop={'d-flex justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
          </div>
        </div>
        <div className="row">
          <div className='col-md-4 mt-3'>

            <IconBox faIcon='fa-solid fa-people-group'
              title='18000+ Certified Tutors'
              description='Find a tutor that fits your criteria.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
          <div className='col-md-4 mt-3'>
            <IconBox faIcon='fa-solid fa-clock'
              title='Less Than 24 Hours'
              description='Get your tutor quickly after sending in your tutor request.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
          <div className='col-md-4 mt-3'>
            <IconBox faIcon='fa-solid fa-handshake-simple'
              title='95% Successful Match'
              description='We always match you every time.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
        </div>
        <div className="row">
          <div className='col-md-4 mt-3'>
            <IconBox faIcon='fa-solid fa-circle-check'
              title='Waived Agency Fees'
              description='No deposit or hidden fees. Pay only for lessons conducted.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
          <div className='col-md-4 mt-3'>
            <IconBox faIcon='fa-solid fa-dollar-sign fa-fw'
              title='Get The Best Tuition Rate'
              description='We guarantee market prices or lower. Huge surprise for 3 subjects and above.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
          <div className='col-md-4 mt-3'>
            <IconBox faIcon='fa-solid fa-user-tie'
              title='Free Personal Manager'
              description='We help you settle all the tedious work.'
              cIconColor='text-primary-dark'
              cIconBackground='bg-primary-lighter'
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-4'
              cIconPadding='p-3'
              cIconContentSpacing='pe-3 pb-3'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop=''/>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault >
        <div style={{background: `url(${Image2})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition: 'center', position:'relative'}}>
          <div className='bg-overlay-dark'>as</div>
          <div className='text-start text-white px-5 pb-5' style={{paddingTop: "300px", position:'relative', }}>
            <h2 style={{fontSize: 'calc(1.5rem + 1.5vw)' }} >5+ Years of Excellence</h2>
            <h6>Leading Home Tuition, Online Tuition Agency In Malaysia And Singapore</h6>
          </div>
        </div>

      </SectionDefault>

      {/* Testimonial */}
      <SectionDefault >
        <div className="row">
          <div className="col-md-12">
          <h6 className='text-primary-dark fw-bold' style={{letterSpacing:'2px', fontSize:'small'}}>What Some Of Our Clients Say About Us</h6>
          <h2 className='fs-1'>Testimonials From Parents</h2>

          <Testimonial>
            <div>
              <div className='testimonial-img-box'>
                <img src={ImageTestimonial3} alt=''/>
              </div>
              <div className="testimonial-body">
                <h3>Mrs Chew</h3>
                <h4>Petaling Jaya</h4>
                <p>
                I'm glad to have Cikgu Lee to teach my boy mathematics. She is patience and soft...
                My boy loves to attend her class every Saturday. I want to continue with Cikgu Lee
                next year... Recommended🙏🙏!
                </p>
              </div>
            </div>
            <div>
              <div className='testimonial-img-box'>
                <img src={ImageTestimonial9} alt=''/>
              </div>
              <div className="testimonial-body">
                <h3>Nur Farizah</h3>
                <h4>Kota Damansara</h4>
                <p>
                  Very happy to join online class here... The best tuition class💃💃... Admin is easy to deal with, very responsive. 10Q so much💃
                </p>
              </div>
            </div>
            <div>
              <div className='testimonial-img-box'>
                <img src={ImageTestimonial6} alt=''/>
              </div>
              <div className="testimonial-body">
                <h3>Adelina</h3>
                <h4>Ipoh</h4>
                <p>
                  Satisfy with teacher here. Fast and quality. Ms Cassandra is very good. My girls like her so much. She even prepare bonus to them. Very kind staff... Tqvm...
                </p>
              </div>
            </div>
            <div>
              <div className='testimonial-img-box'>
                <img src={ImageTestimonial8} alt=''/>
              </div>
              <div className="testimonial-body">
                <h3>Esah</h3>
                <h4>Mont Kiara</h4>
                <p>
                  My son's Biology improved a lot from Teacher Yuen's teaching. He is very experience and knowledgeable,...very satisfy.👍 Best tuition centre.
                  </p>
              </div>
            </div>
            <div>
              <div className='testimonial-img-box'>
                <img src={ImageTestimonial5} alt=''/>
              </div>
              <div className="testimonial-body">
                <h3>Sherly Lim</h3>
                <h4>Bukit Mertajam</h4>
                <p>
                  Best agency ever... The staff was kind and responsible. She contact me to collect feedback for my daughter class. Many subjects offered at reasonable price.
                </p>
              </div>
            </div>
          </Testimonial>
          </div>

        </div>

        <div className="row my-3">
          <div className="col-md-12">
            <h3 className='fs-5'>More Testimonials</h3>
          </div>
        </div>

        <div className="row my-3">
          {images.map((_im,idx)=>
            <div className='col-md-4 col-lg-4 mt-2'>
              <img key={_im.url} src={_im.url} alt={_im.title} onClick={e=>launchGalary(idx,changeCurrentIndex, changeGalOpen)}
                style={{width:'100%', objectFit:'cover', cursor:'pointer'}}/>
            </div>
          )}
        </div>
        <div>
          {galopen?<Lightbox startIndex={currentIndex} images={images} onClose={e=>changeGalOpen(false)}/>:null}
          {singOpen?<Lightbox image='https://tuitionpanda.com/wp-content/uploads/2021/11/Good-Tutor.png' title="Image Title" onClose={e=>changeSing(false)}/>:null}
        </div>
      </SectionDefault>

      {/* Proven Result */}
      <SectionDefault cPadding={'section-custom-t-100-b-100'} cBackground={'bg-primary-light'}>
        <div className="row">
          <div className='col-12'>
            <h2 className='fs-1'>Proven Result</h2>
          </div>
        </div>
        <div className="row">
          <div className='col-md-4 mt-2'>
            <IconBox faIcon='fa-regular fa-thumbs-up'
              title='12000+ Happy Parents'
              description='Nothing is happier that to see your kids making progress!'
              cIconColor='text-primary'
              cIconBackground=''
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-1'
              cIconPadding='p-3'
              cIconContentSpacing='pe-1 pb-0'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop='bg-white py-4 rounded-4 d'/>
          </div>
          <div className='col-md-4 mt-2'>
            <IconBox faIcon='fa-solid fa-book'
              title='320+ Subjects Offered'
              description='Find all Local and International curriculums here.'
              cIconColor='text-primary'
              cIconBackground=''
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-1'
              cIconPadding='p-3'
              cIconContentSpacing='pe-1 pb-0'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop='bg-white py-4 rounded-4'/>
          </div>
          <div className='col-md-4 mt-2'>
            <IconBox faIcon='fa-solid fa-arrow-up-right-dots'
              title='Improvement in 3 Months'
              description={`Track your children's learning progress every week.`}
              cIconColor='text-primary'
              cIconBackground=''
              cIconBorderRadius='rounded-circle'
              cIconSize='fs-1'
              cIconPadding='p-3'
              cIconContentSpacing='pe-1 pb-0'
              cTitle='fs-4'
              cDescription=''
              cTitleDescriptionSpacing='mt-1'
              cTop='bg-white py-4 rounded-4 d'/>
          </div>
        </div>

      </SectionDefault>

      <div id='subject'></div>
      <SectionDefault>
        <div className="row text-md-start ">
          <div className='col-md-12'>
            <h6 className='text-primary-dark fw-bold' style={{letterSpacing:'2px', fontSize:'small'}}>What Tuition That Other Parents Requested</h6>
            <h2 className='fs-1'>Popular Tuition Subjects</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin={'py-3'}
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
          </div>
        </div>
        <div className="row text-start">
          <div className="col-md-3 mt-3">
            <h3 className='text-primary-darker fw-bold fs-4'>Subject Levels</h3>
            <ul className="nav flex-column py-2">
              <li className="nav-item mb-2">1. Primary Tuition</li>
              <li className="nav-item mb-2">2. Secondary Tuition</li>
              <li className="nav-item mb-2">3. SPM Tuition</li>
              <li className="nav-item mb-2">4. STPM / Matriculation Tuition</li>
              <li className="nav-item mb-2">5. Cambridge, Edexcel Tuition</li>
              <li className="nav-item mb-2">6. IB Tuition</li>
              <li className="nav-item mb-2">7. AUSMAT Tuition</li>
              <li className="nav-item mb-2">8. UEC Tuition</li>
              <li className="nav-item mb-2">9. University Tuition</li>
            </ul>
          </div>
          <div className="col-md-3 mt-3">
            <h3 className='text-primary-darker fw-bold fs-4'>Language Subjects</h3>
            <ul className="nav flex-column py-2">
              <li className="nav-item mb-2">1. English Tuition</li>
              <li className="nav-item mb-2">2. Bahasa Melayu Tuition</li>
              <li className="nav-item mb-2">3. Mandarin Tuition</li>
              <li className="nav-item mb-2">4. Tamil Tuition</li>
              <li className="nav-item mb-2">5. Hindi Tuition</li>
              <li className="nav-item mb-2">6. English Speaking Tuition</li>
              <li className="nav-item mb-2">7. Literature Tuition</li>
            </ul>
          </div>
          <div className="col-md-3 mt-3">
            <h3 className='text-primary-darker fw-bold fs-4'>Science & Math Subjects</h3>
            <ul className="nav flex-column py-2">
              <li className="nav-item mb-2">1. Physics Tuition</li>
              <li className="nav-item mb-2">2. Chemistry Tuition</li>
              <li className="nav-item mb-2">3. Biology Tuition</li>
              <li className="nav-item mb-2">4. Science Tuition</li>
              <li className="nav-item mb-2">5. Mathematics Tuition</li>
              <li className="nav-item mb-2">6. Additional Mathematics Tuition</li>
              <li className="nav-item mb-2">7. Combined Science Tuition</li>

            </ul>
          </div>
          <div className="col-md-3 mt-3">
            <h3 className='text-primary-darker fw-bold fs-4'>Humanities Subjects</h3>
            <ul className="nav flex-column py-2">
              <li className="nav-item mb-2">1. History / Sejarah Tuition</li>
              <li className="nav-item mb-2">2. Geography Tuition</li>
              <li className="nav-item mb-2">3. Economics Tuition</li>
              <li className="nav-item mb-2">4. Accounting Tuition</li>
              <li className="nav-item mb-2">5. Social Studies Tuition</li>
              <li className="nav-item mb-2">6. Business Studies Tuition</li>
              <li className="nav-item mb-2">7. Kelas Mengaji</li>
            </ul>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault cPadding={'section-custom-t-100-b-100'} cBackground={'bg-custom-upper-footer-linear-110-dark-brown-green'}>
        <div className="row text-md-start ">
          <div className='col-md-7'>
            <h6 className='fw-bold text-white' style={{letterSpacing:'2px'}}>Don't Know What To Do?</h6>
            <h2 className='fs-11 text-white'>Send Us A <span className='text-primary-light'>Free Request</span><br/> Now!</h2>
            <Divider cTop={'d-flex justify-content-md-start justify-content-center'}
                cDividerMargin=''
                cDividerWidth={'wp-60'}
                cDividerHeight={'hp-3'}/>
          </div>
          <div className='col-md-5  align-self-center'>
            <p className='text-white'>
              Get a free consultation with our experienced crew.<br/>
              Find your ideal tutor today!
            </p>
            <a class="btn-primary-transparent text-primary-light" href="#form"><span class="pe-1">Start Now! We Open 24/7 </span> <span className='ps-2'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></span></a>
          </div>
        </div>

      </SectionDefault>

      {/* Sample Modal */}
      <Modal dialogClassName='' size="xl" show={modalSampleShow} onHide={handleModalSampleClose} contentClassName='bg-overlay-linear-160-green-black'>
        {/* <Modal.Header closeButton>
          <Modal.Title>
            Choose Your Favourite Tutor
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className='bg-transparent text-white' style={{position:'absolute', right:'1rem', cursor:'pointer'}} onClick={handleModalSampleClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </div>
          <div className="row text-center pt-3 text-white">
            <h2> Choose Your Favourite Tutor</h2>
          </div>
          <div className="row p-lg-4 p-md-2">
            <div className="col-md-4 mt-2">
              <div className='bg-white p-3 rounded-2 text-center'>
                <div className="" style={{height: '100px',width: '100px', display: 'inline-block', position: 'relative', overflow: 'hidden', borderRadius: '50%'}}>
                  <img className="tutor-profile-image" style={{height: '100%',width: '100%', objectFit: 'cover'}} id="imgUrl" alt=''
                  src={ImageSample4}/>
                </div>
                <h3>Amanda Lee</h3>
                <p style={{fontStyle:'italic'}}>Primary Teacher</p>
                <p className='text-start'>
                I incorporate high order thinking skills, relate the science theories to daily life for easy understanding.
                I use simple and concise notes provided, past year and exam-oriented questions provided …
                </p>
                <div>
                  <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-facebook" /></span>
                  <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-twitter" /></span>
                  <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-instagram" /></span>
                  <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span>

                </div>
                <button className='btn btn-primary text-white my-3'>Choose This Tutor</button>
              </div>

            </div>

            <div className="col-md-4 mt-2">
              <div className='bg-white p-3 rounded-2 text-center'>
                <div className="" style={{height: '100px',width: '100px', display: 'inline-block', position: 'relative', overflow: 'hidden', borderRadius: '50%'}}>
                  <img className="tutor-profile-image" style={{height: '100%',width: '100%', objectFit: 'cover'}} id="imgUrl" alt=''
                  src={ImageSample2}/>
                </div>
                <h3>Nirmal</h3>
                <p style={{fontStyle:'italic'}}>English Tutor</p>
                <p className='text-start'>
                I provide both online tutor service and home tutor service for English subjects (for kindergarten students,
                primary school students, secondary school students,MUET candidates and adults). I accept requests …
                </p>
                <div>
                <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-facebook" /></span>
                <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-instagram" /></span>

                </div>
                <button className='btn btn-primary text-white my-3'>Choose This Tutor</button>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className='bg-white p-3 rounded-2 text-center'>
                <div className="" style={{height: '100px',width: '100px', display: 'inline-block', position: 'relative', overflow: 'hidden', borderRadius: '50%'}}>
                  <img className="tutor-profile-image" style={{height: '100%',width: '100%', objectFit: 'cover'}} id="imgUrl" alt=''
                  src={ImageSample10}/>
                </div>
                <h3>Natasya</h3>
                <p style={{fontStyle:'italic'}}>Lecturer</p>
                <p className='text-start'>
                I am currently teaching IGCSE Mathematics in an international school. Besides that, I also have side tuition jobs.
                I make sure my students are ready for their exams. I will give intensive homework, assessments, …
                </p>
                <div>
                <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-instagram" /></span>
                <span className='pe-3'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span>

                </div>
                <button className='btn btn-primary text-white my-3'>Choose This Tutor</button>
              </div>
            </div>
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleModalSampleClose}>
            Close
          </button>
          <button className='btn btn-primary text-white' onClick={handleModalSampleClose}>
            Save Changes
          </button>
        </Modal.Footer> */}
      </Modal>



    </div>
  );
}

export default Home;
