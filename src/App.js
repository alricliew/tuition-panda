import React from 'react';
import './App.css';
import db from "./js/firebase"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './bootstrap/dist/js/bootstrap.min.js'
import "../node_modules/bootstrap/dist/js/bootstrap"
import './custom-theme.scss'


import Header from './components/header';
import Header2 from './components/header2';

import Footer from './components/footer';
import Home  from './layouts/home';
import About  from './layouts/about';
import Faq  from './layouts/faq';
import Contact from './layouts/contact';
import Services from './layouts/services';
import Pricing from './layouts/pricing';
import Tutor  from './layouts/tutor';
import API from './layouts/api';
import Items from './layouts/items';
import ItemDetail from './layouts/item-detail';
import Test from './layouts/test';
import TestDb from './layouts/test-db';
import ThankYou01 from './layouts/thank-you-01';
import Page404 from './layouts/404';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { far, faPeople } from '@fortawesome/free-regular-svg-icons'
import { fab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab, faPhoneAlt, faEnvelope, faTwitter, faFacebook,)



// Ref: https://youtu.be/mrHNSanmqQ4
function App() {


  return (

    <Router>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path='*' element={<Header/>}/>
          <Route path='/about' element={<Header2/>}/>
        </Routes>

        <div className='content'>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/tutor' element={<Tutor/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/pricing' element={<Pricing/>}/>


            <Route path='/api-page' element={<API/>}/>
            {/* Test page for Multiple Items */}
            {/* https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/ProductDetail.js:26-110 */}
            <Route path='/items' element={<Items/>}/>
            <Route path='/items/:productId' element={<ItemDetail/>}/>

            <Route path='/test' element={<Test/>}/>
            <Route path='/test-db' element={<TestDb/>}/>

            {/* Thank You pages */}
            <Route path='/thank-you-01' element={<ThankYou01/>}/>

            {/* 404 */}
            <Route path='*' element={<Page404/>}  />
          </Routes >
        </div>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
