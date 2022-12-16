import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { facebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (

    <div className='bg-primary-darker'>
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
        <div className="col-md-3">
          <a href="/" className="d-flex justify-content-center mb-3">
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/08/log-long-inverted-min-1024x167.png" width="200" height="30" alt=""/>
          </a>
          <div style={{ marginTop: "20px"}}></div>
          <h6 className='text-white'>Leading Home Tuition, Online Tuition Agency in Malaysia and Singapore</h6>
          <div style={{ marginTop: "20px"}}></div>

          <h5 className='text-white'>Follow us</h5>
          <ul class="nav justify-content-center">
            <li class="ms-3"><a class="nav-link-footer" href="/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
            <li class="ms-3"><a class="nav-link-footer" href="/"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
          </ul>
        </div>


        <div className="col-md-3">
          <h5 className='text-white'>Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to={"/"} className="nav-link p-0 nav-link-footer">Get A Tutor</Link></li>
            <li className="nav-item mb-2"><Link to={"/services"} className="nav-link p-0 nav-link-footer">Our Services</Link></li>
            {/* <li className="nav-item mb-2"><Link to={"/pricing"} className="nav-link p-0 nav-link-footer">Tuition Rate</Link></li> */}
            <li className="nav-item mb-2"><Link to={"/faq"} className="nav-link p-0 nav-link-footer">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to={"/tutor"} className="nav-link p-0 nav-link-footer">Tutor</Link></li>
            <li className="nav-item mb-2"><Link to={"/about"} className="nav-link p-0 nav-link-footer">About</Link></li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5 className='text-white'>Need Support ?</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="mailto:support@tuitionpanda.com" className="nav-link p-0 nav-link-footer">
                <FontAwesomeIcon icon="fa-solid fa-envelope" /> support@tuitionpanda.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/contact"} className="nav-link p-0 nav-link-footer">
                <FontAwesomeIcon icon="fa-solid fa-phone" /> Contact Us
              </Link>
            </li>

          </ul>
          <div style={{ marginTop: "20px"}}></div>
          <h5 className='text-white'>Operating Hour</h5>
          <p className="text-white">Monday to Saturday, 9am - 8pm (excluding Public Holiday)</p>

        </div>

        <div className="col mb-3">
          <h5 className='text-white'>About Us</h5>
          <p className="text-white">TuitionPanda is the leading private tuition agency for parents and students looking for home tutors or online tutors. Our tutor finding service is 100% FREE.</p>
        </div>
      </footer>
    </div>
    </div>


  );
}

export default Footer;
