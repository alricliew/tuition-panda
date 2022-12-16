import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalRequestForm from '../components/modal-form-req';


function Header() {
   // Modal - Request Form
  const [modalReqShow, setModalReqShow] = useState(false);
  const handleModalReqClose = () => setModalReqShow(false);
  const handleModalReqShow = () => setModalReqShow(true);

  return (
    <div className='container'>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <a className="navbar-brand" href="/">
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/08/log-long-200x29.png"width="200" height="30" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
              <li className="nav-item active">
                <Link className="nav-link" to={"/about"}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/services"}>Our Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/faq"}>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tutor"}>Tutor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contact</Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-primary nav-link-button" onClick={handleModalReqShow}>Get A Tutor</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <ModalRequestForm
        handleModalReqClose={handleModalReqClose}
        handleModalReqShow={handleModalReqShow}
        modalReqShow={modalReqShow}
      />
    </div>
  );
}

export default Header;
