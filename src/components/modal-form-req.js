import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactBootstrapMultistepForm from '../widgets/form-wizard-request'

// Request Form Modal
function ModalRequestForm(props) {
  // Modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (

    <Modal dialogClassName='' size="xl" show={props.modalReqShow} onHide={props.handleModalReqClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>
          Choose Your Favourite Tutor
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body  className='bg-transparent'>
        <div className='bg-transparent' style={{position:'absolute', right:'1rem', cursor:'pointer'}} onClick={props.handleModalReqClose}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </div>
        {/* <div className="row text-center pt-3">
          <h2> Choose Your Favourite Tutor</h2>
        </div> */}
        <div className="row p-lg-4 p-md-2">
          <ReactBootstrapMultistepForm>
          </ReactBootstrapMultistepForm>
        </div>
      </Modal.Body>

      {/* <Modal.Footer>
        <button className='btn btn-secondary' onClick={props.handleModalReqClose}>
          Close
        </button>
        <button className='btn btn-primary text-white' onClick={props.handleModalReqClose}>
          Save Changes
        </button>
      </Modal.Footer> */}
    </Modal>


  );
}

export default ModalRequestForm;
