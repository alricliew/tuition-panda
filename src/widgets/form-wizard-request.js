import React, { Component, useEffect, useRef, useState, useCallback  } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { db } from "../js/firebase"
import { collection, doc, getDocs, setDoc  } from 'firebase/firestore/lite';
import * as myConst from "../js/const";
import * as common from "../js/common";


class IntroPage1 extends Component{


  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    // const { step, person, stuGender, place, subject, firstName, lastName, email, address, city, state, zip } = this.state;

    e.preventDefault();

    console.log(this.props.inputValues)

    // if (this.props.inputValues.place === '' || this.props.inputValues.subject === ''){

    //   alert('hihi')

    // }
    // else {

    //   this.props.nextStep();
    // }

    const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }

    // setValidated(true);
    console.log(e.currentTarget)

  };

  // [validated, setValidated] = useState(false);

  handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form)
    console.log(form.checkValidity())

    alert()
    if (form.checkValidity() === false) {
      // event.preventDefault();
      // event.stopPropagation();
    }

    // setValidated(true);
  };

  render() {
    return( <Container>
              <Form className='text-start' noValidate onSubmit={this.handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">You are a</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Parent"
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                        checked='true'
                      />
                      <Form.Check
                        inline
                        label="Student"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">Tutee's Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        id={`inline-radio-1`}
                        checked='true'
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        id={`inline-radio-2`}
                      />
                    </div>
                  </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label className="label">Address / Tuition Place <strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                  type="text"
                  placeholder='i.e appartment, street, city, ...'
                  defaultValue=""
                  name="place"
                  required
                  error = 'false'
                  onChange={this.props.handleChange}
                  />
                  <Form.Text muted>
                    Enter "Online" for online tuition only.
                  </Form.Text>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Subject(s) To Be Tutored *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='i.e Year 8 English, Form 4 SPM Biology, Standard 6 Bahasa Melayu, ...'

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Form.Group>
                <Button variant="primary" type="submit">Next</Button>
              </Form>
            </Container>
    );
  }
}

class UserDetails1 extends Component{

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    return( <Container>
              <Form className='text-start'>
                <Row>
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">First Name</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={this.props.inputValues.firstName}
                    name="firstName"
                    required
                    onChange={this.props.handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formLastName">
                    <Form.Label className="label">Last Name</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={this.props.inputValues.lastName}
                    name="lastName"
                    required
                    onChange={this.props.handleChange}
                    />
                  </Form.Group>
                </Row>

                <Form.Group controlId="formEmail">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control
                  type="email"
                  defaultValue={this.props.inputValues.email}
                  name="email"
                  required
                  onChange={this.props.handleChange}
                  />
                </Form.Group>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
              </Form>
            </Container>
    );
  }
}



class AddressDetails extends Component{

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

  saveAndContinue = (e) => {
      e.preventDefault();
      this.props.nextStep();
  };


  render() {
    return( <Container>
              <Form  className='text-start'>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                      type="text"
                      defaultValue={this.props.inputValues.address}
                      name="address"
                      required
                      onChange={this.props.handleChange}
                  />
                </Form.Group>

                <Row>
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={this.props.inputValues.city}
                    name="city"
                    required
                    onChange={this.props.handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" name="state" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={this.props.inputValues.zip}
                    name="zip"
                    required
                    onChange={this.props.handleChange}
                    />
                  </Form.Group>
                </Row>

                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
              </Form>
            </Container>
    );
  }
}

class Confirmation01 extends Component{

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render(){
      const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;

      return(
          <Container>
              <h1>Confirm your Details</h1>
              <p>Confirm if the following details are correct.</p>
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
              <p>Email: {email}</p>
              <p>Adress: {address}</p>
              <p>City: {city}</p>
              <p>State: {state}</p>
              <p>Zip: {zip}</p>
              <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
              <Button variant="primary" onClick={this.handleSubmit}>Confirm</Button>
          </Container>
      )
  }
}

// Swithc to function
function Introduction(props){


  const [validated, setValidated] = useState(false);

  // const [info, setInfo] = useState({
  //   place: props.inputValues.place,
  //   subject: props.inputValues.subject,
  // });

  // const handleChange = (event) => {
  //   setInfo({ ...info, [event.target.name]: event.target.value });

  //   console.log(info)
  // };

  const saveAndContinue = (event) => {
    // const { step, person, stuGender, place, subject, firstName, lastName, email, address, city, state, zip } = this.state;

    event.preventDefault();
    // console.log(event)
    // console.log(event.target.parentNode)
    // console.log(event.target.parentNode.checkValidity())

    let form = event.target.parentNode.parentNode;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    else {
      event.preventDefault();
      props.nextStep();
    }

    setValidated(true);

  }

  return( <Container>
            <Form className='form-req text-start' name="form-req" noValidate validated={validated}>
              <div className='form-req-header p-3 pt-4 pb-2'>
                <h4>Submit <strong className='text-warning'>FREE Request</strong> Today!</h4>
                <h5>Introduction <span className='fs-6 text-primary-dark'>(Step 1/ 4)</span></h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  <Form.Group className='col-md-6 mb-3' controlId="person">
                    <Form.Label className="label">You are a</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Parent"
                        name="person"
                        type="radio"
                        id={`parent`}
                        value='parent'
                        checked={props.inputValues.person === 'parent'}
                        onChange={props.handleCheck}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="Student"
                        name="person"
                        type="radio"
                        id={`student`}
                        value='student'
                        checked={props.inputValues.person === 'student'}
                        onChange={props.handleCheck}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className='col-md-6 mb-3' controlId="stuGender">
                    <Form.Label className="label">Tutee's Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Male"
                        name="stuGender"
                        type="radio"
                        id={`genderMale`}
                        value='genderMale'
                        checked={props.inputValues.stuGender === 'genderMale'}
                        onChange={props.handleCheck}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="stuGender"
                        type="radio"
                        id={`genderFemale`}
                        value='genderFemale'
                        checked={props.inputValues.stuGender === 'genderFemale'}
                        onChange={props.handleCheck}
                      />
                    </div>
                  </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="place">
                  <Form.Label className="label">Address / Tuition Place <strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                  type="text"
                  placeholder='i.e appartment, street, city, ...'
                  defaultValue=""
                  name="place"
                  required
                  error = 'false'
                  onChange={props.handleChange}
                  value={props.inputValues.place}
                  />
                  <Form.Text muted>
                    Enter "Online" for online tuition only.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subjecy">
                  <Form.Label>Subject(s) To Be Tutored  <strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='i.e Year 8 English, Form 4 SPM Biology, Standard 6 Bahasa Melayu, ...'
                    name="subject"
                    required
                    onChange={props.handleChange}
                    value={props.inputValues.subject}
                  />
                </Form.Group>

              </div>

              <div className='d-flex justify-content-end form-req-footer'>
                <Button variant="primary" onClick={saveAndContinue}>Next</Button>
                {/* <Button variant="primary" type='submit'>Next</Button> */}

              </div>

            </Form>
          </Container>
  );


}

function UserDetails (props){
  const [validated, setValidated] = useState(false);


  const back  = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const saveAndContinue = (e) => {


    // Make sure at least 1 is checked
    let dayOfWeekCheckBoxEle = Array.from(
      document.getElementsByName('dayOfWeek')
    );
    let dayOfWeekArr = []
    dayOfWeekCheckBoxEle.forEach((ele) => {

      if(ele.checked)
        dayOfWeekArr.push(ele.id)
    })

    let timeSlotCheckBoxEle = Array.from(
      document.getElementsByName('timeSlot')
    );

    let timeSlotArr = []
    timeSlotCheckBoxEle.forEach((ele) => {

      if(ele.checked)
        timeSlotArr.push(ele.id)
    })


    // TODO: Add checkig for each checkbox before proceed to next stage
    // console.log(dayOfWeekArr)
    // console.log(timeSlotArr)

    let form = e.target.parentNode.parentNode;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    else {
      e.preventDefault();
      props.nextStep();
    }

    setValidated(true);
  };


  return( <Container>
            <Form className='form-req text-start' name="form-req" noValidate validated={validated}>
              <div className='form-req-header p-3 pt-4 pb-2'>
                <h4>Submit <strong className='text-warning'>FREE Request</strong> Today!</h4>
                <h5>Tuition Details <span className='fs-6 text-primary-dark'>(Step 2/ 4)</span></h5>
              </div>
              <div className='form-req-content'>
                <Form.Group as={Col} controlId="budget" className='mb-3'>
                  <Form.Label className="label">Your Tuition Budget (Monthly)</Form.Label>
                  <Form.Control
                  type="text"
                  defaultValue={props.inputValues.budget}
                  name="budget"
                  onChange={props.handleChange}
                  value={props.inputValues.budget}
                  />
                </Form.Group>

                <Row>

                  <Form.Group  className='col-lg-4 col-md-6 mb-3' controlId="dayOfWeek" >
                    <Form.Label className="label">Days Of The Week <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`default-checkbox`} className="mb-3">
                      <Form.Check
                        label="Monday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkMon`}
                        defaultChecked
                        value='checkMon'
                        checked={props.inputValues.dayOfWeek.includes('checkMon') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="Tuesday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkTue`}
                        value='checkTue'
                        checked={props.inputValues.dayOfWeek.includes('checkTue') }
                        onChange={props.handleCheck}
                      />
                    <Form.Check
                        label="Wednesday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkWed`}
                        defaultChecked
                        value='checkWed'
                        checked={props.inputValues.dayOfWeek.includes('checkWed') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="Thursday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkThu`}
                        value='checkThu'
                        checked={props.inputValues.dayOfWeek.includes('checkThu') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="Friday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkFri`}
                        defaultChecked
                        value='checkFri'
                        checked={props.inputValues.dayOfWeek.includes('checkFri') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="Saturday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkSat`}
                        value='checkSat'
                        checked={props.inputValues.dayOfWeek.includes('checkSat') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="Sunday"
                        name="dayOfWeek"
                        type="checkbox"
                        id={`checkSun`}
                        defaultChecked
                        value='checkSun'
                        checked={props.inputValues.dayOfWeek.includes('checkSun') }
                        onChange={props.handleCheck}
                      />

                    </div>
                  </Form.Group>

                  <Form.Group className='col-lg-4 col-md-6 mb-3' controlId="timeSlot">
                    <Form.Label className="label">Available Timings <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`default-checkbox`} className="mb-3">
                      <Form.Check
                        label="8am - 12pm"
                        name="timeSlot"
                        type="checkbox"
                        id={`timeSlot-8am`}
                        value='timeSlot-8am'
                        checked={props.inputValues.timeSlot.includes('timeSlot-8am') }
                        onChange={props.handleCheck}
                        />
                      <Form.Check
                        label="12pm - 3pm"
                        name="timeSlot"
                        type="checkbox"
                        id={`timeSlot-12pm`}
                        value='timeSlot-12pm'
                        checked={props.inputValues.timeSlot.includes('timeSlot-12pm') }
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="3pm - 6pm"
                        name="timeSlot"
                        type="checkbox"
                        id={`timeSlot-3pm`}
                        value='timeSlot-3pm'
                        checked={props.inputValues.timeSlot.includes('timeSlot-3pm') }
                        onChange={props.handleCheck}
                        />
                      <Form.Check
                        label="6pm - 9pm"
                        name="timeSlot"
                        type="checkbox"
                        id={`timeSlot-6pm`}
                        value='timeSlot-6pm'
                        checked={props.inputValues.timeSlot.includes('timeSlot-6pm') }
                        onChange={props.handleCheck}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group  className='col-lg-4 col-md-6 mb-3' controlId="lessPerWeek">
                    <Form.Label className="label">Frequency Of Lessons <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`default-radio`} className="mb-3">
                      <Form.Check
                        label="1 Lesson/Week"
                        name="lessPerWeek"
                        type="radio"
                        id={`lessPerWeek1`}
                        value='lessPerWeek1'
                        checked={props.inputValues.lessPerWeek === 'lessPerWeek1'}
                        onChange={props.handleCheck}
                        defaultChecked
                        />
                      <Form.Check
                        label="2 Lessons/Week"
                        name="lessPerWeek"
                        type="radio"
                        id={`lessPerWeek2`}
                        value='lessPerWeek2'
                        checked={props.inputValues.lessPerWeek === 'lessPerWeek2'}
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="3 Lessons/Week"
                        name="lessPerWeek"
                        type="radio"
                        id={`lessPerWeek3`}
                        value='lessPerWeek3'
                        checked={props.inputValues.lessPerWeek === 'lessPerWeek3'}
                        onChange={props.handleCheck}
                        defaultChecked
                        />
                      <Form.Check
                        label="4 Lessons/Week"
                        name="lessPerWeek"
                        type="radio"
                        id={`lessPerWeek4`}
                        value='lessPerWeek4'
                        checked={props.inputValues.lessPerWeek === 'lessPerWeek4'}
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        label="5 Lessons/Week"
                        name="lessPerWeek"
                        type="radio"
                        id={`lessPerWeek5`}
                        value='lessPerWeek5'
                        checked={props.inputValues.lessPerWeek === 'lessPerWeek5'}
                        onChange={props.handleCheck}
                      />
                    </div>
                  </Form.Group>


                </Row>


              </div>

              <div className='d-flex justify-content-between form-req-footer'>
                <Button variant="secondary" onClick={back}>Back</Button>{' '}
                <Button variant="primary" onClick={saveAndContinue}>Next</Button>
              </div>

            </Form>
          </Container>
  );
}

function TutorDetails (props){
  const [validated, setValidated] = useState(false);

  const back  = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const saveAndContinue = (e) => {


    // Make sure at least 1 is checked
    // let dayOfWeekCheckBoxEle = Array.from(
    //   document.getElementsByName('dayOfWeek')
    // );
    // let dayOfWeekArr = []
    // dayOfWeekCheckBoxEle.forEach((ele) => {

    //   if(ele.checked)
    //     dayOfWeekArr.push(ele.id)
    // })

    // let timeSlotCheckBoxEle = Array.from(
    //   document.getElementsByName('timeSlot')
    // );

    // let timeSlotArr = []
    // timeSlotCheckBoxEle.forEach((ele) => {

    //   if(ele.checked)
    //     timeSlotArr.push(ele.id)
    // })

    // TODO: Add checkig for each checkbox before proceed to next stage
    // console.log(dayOfWeekArr)
    // console.log(timeSlotArr)

    let form = e.target.parentNode.parentNode;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    else {
      e.preventDefault();
      props.nextStep();
    }

    setValidated(true);
  };


  return( <Container>
            <Form className='form-req text-start' name="form-req" noValidate validated={validated}>
              <div className='form-req-header p-3 pt-4 pb-2'>
                <h4>Submit <strong className='text-warning'>FREE Request</strong> Today!</h4>
                <h5>Tutor Details <span className='fs-6 text-primary-dark'>(Step 3/ 4)</span></h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  <Form.Group as={Col} controlId="tutorGender">
                    <Form.Label className="label">Tutee's Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Any"
                        name="tutorGender"
                        type="radio"
                        id={`genderAny`}
                        value='genderAny'
                        checked={props.inputValues.tutorGender === 'genderAny'}
                        onChange={props.handleCheck}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="Male"
                        name="tutorGender"
                        type="radio"
                        id={`genderMale`}
                        value='genderMale'
                        checked={props.inputValues.tutorGender === 'genderMale'}
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="tutorGender"
                        type="radio"
                        id={`genderFemale`}
                        value='genderFemale'
                        checked={props.inputValues.tutorGender === 'genderFemale'}
                        onChange={props.handleCheck}
                      />
                    </div>
                  </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Description of Needs (Optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='State your expectation and requirements. I.e need focus on exam papers, require attention on writing, ...'
                    name="message"
                    onChange={props.handleChange}
                    value={props.inputValues.message}
                  />
                </Form.Group>
              </div>

              <div className='d-flex justify-content-between form-req-footer'>
                <Button variant="secondary" onClick={back}>Back</Button>{' '}
                <Button variant="primary" onClick={saveAndContinue}>Next</Button>
              </div>

            </Form>
          </Container>
  );
}

function Confirmation (props){
  const [validated, setValidated] = useState(false);

  const back  = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const saveAndContinue = (e) => {


    let form = e.target.parentNode.parentNode;


    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    else {
      e.preventDefault();
      e.target.disabled = true; // Debounce clicks
      props.handleSubmit();
    }

    setValidated(true);
  };


  return( <Container>
            <Form className='form-req text-start' name="form-req" noValidate validated={validated}>
              <div className='form-req-header p-3 pt-4 pb-2'>
                <h4>Submit <strong className='text-warning'>FREE Request</strong> Today!</h4>
                <h5>Confirmation <span className='fs-6 text-primary-dark'>(Step 4/ 4)</span></h5>
              </div>
              <div className='form-req-content'>

                <Row>

                  <Form.Group className='col-md-6 mb-3' controlId="name" >
                    <Form.Label>Name <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={props.inputValues.name}
                    name="name"
                    required
                    onChange={props.handleChange}
                    />
                  </Form.Group>


                  <Form.Group className='col-md-6 mb-3' controlId="phone">
                    <Form.Label>Phone <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={props.inputValues.phone}
                    name="phone"
                    required
                    onChange={props.handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className='col-md-6 mb-3' controlId="email">
                    <Form.Label>Email <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={props.inputValues.email}
                    name="email"
                    required
                    onChange={props.handleChange}
                    />
                  </Form.Group>


                  {/* <Form.Group as={Col} controlId="phone">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={props.inputValues.phone}
                    name="phone"
                    onChange={props.handleChange}
                    />
                  </Form.Group> */}
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="sur01">
                    <Form.Label className="label">Where Do You Find Us?</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        label="Web Search"
                        name="sur01"
                        type="radio"
                        id={`surWebSearch`}
                        value='surWebSearch'
                        checked={props.inputValues.sur01 === 'surWebSearch'}
                        onChange={props.handleCheck}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="Facebook"
                        name="sur01"
                        type="radio"
                        id={`surFb`}
                        value='surFb'
                        checked={props.inputValues.sur01 === 'surFb'}
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        inline
                        label="Instagram"
                        name="sur01"
                        type="radio"
                        id={`surInsta`}
                        value='surInsta'
                        checked={props.inputValues.sur01 === 'surInsta'}
                        onChange={props.handleCheck}
                      />
                    <Form.Check
                        inline
                        label="Twitter"
                        name="sur01"
                        type="radio"
                        id={`surTwitter`}
                        value='surTwitter'
                        checked={props.inputValues.sur01 === 'surTwitter'}
                        onChange={props.handleCheck}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="Google / Facebook Advertisement"
                        name="sur01"
                        type="radio"
                        id={`surAds`}
                        value='surAds'
                        checked={props.inputValues.sur01 === 'surAds'}
                        onChange={props.handleCheck}
                      />
                      <Form.Check
                        inline
                        label="Recommended by others"
                        name="sur01"
                        type="radio"
                        id={`surRecommended`}
                        value='surRecommended'
                        checked={props.inputValues.sur01 === 'surRecommended'}
                        onChange={props.handleCheck}
                      />

                    </div>
                  </Form.Group>

                </Row>
              </div>

              <div className='d-flex justify-content-between form-req-footer'>
                <Button variant="secondary" onClick={back}>Back</Button>{' '}
                <Button variant="primary" onClick={saveAndContinue}>Confirm</Button>

              </div>

            </Form>
          </Container>
  );
}


class MultiStepForm2 extends Component {
    state = {
        step: 1,
        // Step 1
        person: 'parent',
        stuGender: "genderMale",
        place: '',
        subject: '',
        budget: "",
        dayOfWeek: [],
        dayOfWeekCheckedCount: 0,
        lessPerWeek: "lessPerWeek1",
        timeSlot: [],
        timeSlotCheckedCount: 0,
        tutorGender: "genderAny",
        message: "",
        sur01: "",
        name: "",
        email: '',
        phone: '',
        // Other
        url: ""
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleCheck = (event) => {

      if (event.target.type === 'checkbox'){

        let checkBoxEleArr = Array.from(
          document.getElementsByName(event.target.name)
        );
        let checkedArray = []

        checkBoxEleArr.forEach(ele => {
          if (ele.checked)
            checkedArray.push(ele.getAttribute('value'))
        });

        // console.log(checkedArray)
        this.setState({[event.target.name]: checkedArray})
        this.setState({[event.target.name + 'CheckedCount']: checkedArray.length})

      }
      // Radio - Always has 1 option checked.
      else if (event.target.type === 'radio'){
        this.setState({[event.target.name]: event.target.value})
      }
      else {

      }
      // console.log(this.state)
      // this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
      this.setState({url: window.location.href})
      console.log(window.location.href)

      // console.log(this.state)
      // alert(this.state)

      // Add a new document in collection "cities"
      const docRef = doc(collection(db, myConst.REQUEST_ADMIN));
      console.log(docRef.path)

      let data = {
        [common.REQ_ADMIN_ID]: docRef.id,
        [common.REQ_ADMIN_NAME]: this.state.name,
        [common.REQ_ADMIN_PHONE]: this.state.phone,
        [common.REQ_ADMIN_EMAIL]: this.state.email,
        [common.REQ_ADMIN_PERSON]: this.state.person,
        [common.REQ_ADMIN_STU_GENDER]: this.state.stuGender,
        [common.REQ_ADMIN_SCHOOL]: "", //this.state.school,
        [common.REQ_ADMIN_SUBJECT]: this.state.subject,
        [common.REQ_ADMIN_MODE]: [], // this.state.modeList,
        [common.REQ_ADMIN_PLACE]: this.state.place,
        [common.REQ_ADMIN_BUDGET]: this.state.budget,
        [common.REQ_ADMIN_DURATION]: "", // this.state.duration,
        [common.REQ_ADMIN_LESS_PER_WEEK]: this.state.lessPerWeek,
        [common.REQ_ADMIN_DAY_OF_WEEK]: this.state.dayOfWeek,
        [common.REQ_ADMIN_TIME]: this.state.timeSlot,
        [common.REQ_ADMIN_TUTOR_GENDER]: this.state.tutorGender,
        [common.REQ_ADMIN_MESSAGE]: this.state.message,
        [common.REQ_ADMIN_SURVEY_01]: this.state.sur01,
        [common.REQ_ADMIN_URL]: window.location.href,
        [common.REQ_ADMIN_JOB_ID]: '',
        [common.REQ_ADMIN_JOB_REF_NO] : '',
        [common.REQ_ADMIN_JOB_STATUS]: '',
        [common.REQ_ADMIN_REMARK]: "",
        [common.REQ_ADMIN_ONLINE]: "",
        [common.REQ_ADMIN_CAT_ARR]: "",
        [common.REQ_ADMIN_SUB_ARR]: "",
        [common.REQ_ADMIN_AREA]: "",
        [common.REQ_ADMIN_STATE]: "",
        [common.REQ_ADMIN_REQ_STATUS]: common.REQ_ADMIN_REQ_STATUS_NEW,
        [common.REQ_ADMIN_DATE_SEND]:  new Date(),
        [common.REQ_ADMIN_DATE_READ]:  new Date(),
        [common.REQ_ADMIN_OWNER]: "NO_OWNER",
        [common.REQ_ADMIN_STATUS]: true,
      }

      console.log(data)

      const newCityRef = doc(collection(db, myConst.REQUEST_ADMIN));
      setDoc(newCityRef, data);


    }


    render(){
        const { step, person, stuGender, place, subject,
          budget, dayOfWeek, dayOfWeekCheckedCount, lessPerWeek, timeSlot, timeSlotCheckedCount,
          tutorGender, message, sur01, name, email, phone } = this.state;


        const inputValues = { person, stuGender, place, subject,
          budget, dayOfWeek, dayOfWeekCheckedCount, lessPerWeek, timeSlot, timeSlotCheckedCount,
          tutorGender, message, sur01, name, email, phone };
        switch(step) {
        case 1:
            return (
              <Introduction
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                handleCheck = {this.handleCheck}
                inputValues={inputValues}
                />
            )

            // return <IntroPage
            //         nextStep={this.nextStep}
            //         handleChange = {this.handleChange}
            //         inputValues={inputValues}
            //         />
        case 2:


            return <UserDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    handleCheck = {this.handleCheck}
                    inputValues={inputValues}
                    />
        case 3:
          return <TutorDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  handleCheck = {this.handleCheck}
                  inputValues={inputValues}
                  />
            // return <AddressDetails
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange = {this.handleChange}
            //         inputValues={inputValues}
            //         />
        case 4:
            // return <Confirmation
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         inputValues={inputValues}
            //         />
          return <Confirmation
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  handleCheck = {this.handleCheck}
                  handleSubmit = {this.handleSubmit}
                  inputValues={inputValues}
                  />
        default:

        }
    }
}


export function MultiStepForm() {


  const state = {
    step: 1,
    // Step 1
    person: 'parent',
    stuGender: "genderMale",
    place: '',
    subject: '',
    budget: "",
    dayOfWeek: [],
    dayOfWeekCheckedCount: 0,
    lessPerWeek: "lessPerWeek1",
    timeSlot: [],
    timeSlotCheckedCount: 0,
    tutorGender: "genderAny",
    message: "",
    sur01: "",
    name: "",
    email: '',
    phone: '',
    // Other
    url: ""
}

  const [initVal, setInitVal] = useState(state)


  const nextStep = () => {
      // const { step } = initVal
      initVal.step = initVal.step + 1;
      setInitVal({
        ...initVal
      })
  }

  const prevStep = () => {
      // const { step } = this.state
      // setInitVal({
      //     step : initVal.step - 1
      // })
      initVal.step = initVal.step - 1;
      setInitVal({
        ...initVal
      })

  }

  const handleChange = (event) => {
    initVal[event.target.name] = event.target.value;
    setInitVal({
      ...initVal
    })

      // setInitVal({[event.target.name]: event.target.value})
  }
  const handleCheck = (event) => {

    if (event.target.type === 'checkbox'){

      let checkBoxEleArr = Array.from(
        document.getElementsByName(event.target.name)
      );
      let checkedArray = []

      checkBoxEleArr.forEach(ele => {
        if (ele.checked)
          checkedArray.push(ele.getAttribute('value'))
      });

      // console.log(checkedArray)
      initVal[event.target.name] = checkedArray;
      initVal[event.target.name + 'CheckedCount'] = checkedArray.length;

      setInitVal({
        ...initVal
      })

      // setInitVal({[event.target.name]: checkedArray})
      // setInitVal({[event.target.name + 'CheckedCount']: checkedArray.length})

    }
    // Radio - Always has 1 option checked.
    else if (event.target.type === 'radio'){
      initVal[event.target.name] = event.target.value;
      setInitVal({
        ...initVal
      })

      // setInitVal({[event.target.name]: event.target.value})
    }
    else {

    }
    // console.log(this.state)
    // this.setState({[event.target.name]: event.target.value})
  }

  const handleSubmit = async function (event) {
    // setInitVal({url: window.location.href})
    // console.log(window.location.href)
    initVal.url = window.location.href;
    setInitVal({
      ...initVal
    })


    // Add a new document in collection "cities"
    const docRef = doc(collection(db, myConst.REQUEST_ADMIN));
    console.log(docRef.path)
    let data = {
      [common.REQ_ADMIN_ID]: docRef.id,
      [common.REQ_ADMIN_NAME]: initVal.name,
      [common.REQ_ADMIN_PHONE]: initVal.phone,
      [common.REQ_ADMIN_EMAIL]: initVal.email,
      [common.REQ_ADMIN_PERSON]: initVal.person,
      [common.REQ_ADMIN_STU_GENDER]: initVal.stuGender,
      [common.REQ_ADMIN_SCHOOL]: "", //initVal.school,
      [common.REQ_ADMIN_SUBJECT]: initVal.subject,
      [common.REQ_ADMIN_MODE]: [], // initVal.modeList,
      [common.REQ_ADMIN_PLACE]: initVal.place,
      [common.REQ_ADMIN_BUDGET]: initVal.budget,
      [common.REQ_ADMIN_DURATION]: "", // initVal.duration,
      [common.REQ_ADMIN_LESS_PER_WEEK]: initVal.lessPerWeek,
      [common.REQ_ADMIN_DAY_OF_WEEK]: initVal.dayOfWeek,
      [common.REQ_ADMIN_TIME]: initVal.timeSlot,
      [common.REQ_ADMIN_TUTOR_GENDER]: initVal.tutorGender,
      [common.REQ_ADMIN_MESSAGE]: initVal.message,
      [common.REQ_ADMIN_SURVEY_01]: initVal.sur01,
      [common.REQ_ADMIN_URL]: window.location.href,
      [common.REQ_ADMIN_JOB_ID]: '',
      [common.REQ_ADMIN_JOB_REF_NO] : '',
      [common.REQ_ADMIN_JOB_STATUS]: '',
      [common.REQ_ADMIN_REMARK]: "",
      [common.REQ_ADMIN_ONLINE]: "",
      [common.REQ_ADMIN_CAT_ARR]: "",
      [common.REQ_ADMIN_SUB_ARR]: "",
      [common.REQ_ADMIN_AREA]: "",
      [common.REQ_ADMIN_STATE]: "",
      [common.REQ_ADMIN_REQ_STATUS]: common.REQ_ADMIN_REQ_STATUS_NEW,
      [common.REQ_ADMIN_DATE_SEND]:  new Date(),
      [common.REQ_ADMIN_DATE_READ]:  new Date(),
      [common.REQ_ADMIN_OWNER]: "NO_OWNER",
      [common.REQ_ADMIN_STATUS]: true,
    }

    console.log(data)

    try {

      await setDoc(docRef, data);

      // alert()

      navigateToThankYou01()

    }

    catch (e) {
      console.log(e.message)
    }

  }

  // Redirects
  const navigate = useNavigate();

  const navigateToThankYou01 = () => {
    navigate('/thank-you-01');
  };

    const { step, person, stuGender, place, subject,
      budget, dayOfWeek, dayOfWeekCheckedCount, lessPerWeek, timeSlot, timeSlotCheckedCount,
      tutorGender, message, sur01, name, email, phone } = initVal ;


    const inputValues = { person, stuGender, place, subject,
      budget, dayOfWeek, dayOfWeekCheckedCount, lessPerWeek, timeSlot, timeSlotCheckedCount,
      tutorGender, message, sur01, name, email, phone };

    switch(step) {
    case 1:
        return (
          <Introduction
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange = {handleChange}
            handleCheck = {handleCheck}
            inputValues={inputValues}
            />
        )
    case 2:
        return <UserDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange = {handleChange}
                handleCheck = {handleCheck}
                inputValues={inputValues}
                />
    case 3:
      return <TutorDetails
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange = {handleChange}
              handleCheck = {handleCheck}
              inputValues={inputValues}
              />
    case 4:
      return <Confirmation
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange = {handleChange}
              handleCheck = {handleCheck}
              handleSubmit = {handleSubmit}
              inputValues={inputValues}
              />
    default:
    }
}


export default MultiStepForm;