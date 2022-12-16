import React from 'react'
import { Formiz, FormizStep, useForm, useField } from '@formiz/core'
import { isEmail } from '@formiz/validations' // Import some validations


// 1. Create a reusable field
const MyField = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props)
  const { label, type, required } = props
  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted)

  return (
    <div className={`form-group ${showError ? 'is-error' : ''} mb-3 text-start`}>
      <label
        className="label"
        htmlFor={id}
      >
        { label }
        {required && ' *'}
      </label>
      <input
        key={resetKey}
        id={id}
        type={type || 'text'}
        value={value || ''}
        className="form-control"
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-invalid={!isValid}
        aria-describedby={!isValid ? `${id}-error` : null}
      />
      {showError && (
        <div id={`${id}-error`} className="form-feedback muted text-danger">
          { errorMessage }
        </div>
      )}
    </div>
  )
}


// 2. Create a form with multi steps & fields
export const MyForm = () => {
  const myForm = useForm()
  const [isLoading, setIsLoading] = React.useState(false)
  const submitForm = (values) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      alert(JSON.stringify(values))
      myForm.invalidateFields({
        email: 'You can display an error after an API call',
      })
      const step = myForm.getFieldStepName('email')
      myForm.goToStep(step)
    }, 1000)
  }
  return (
    <Formiz onValidSubmit={submitForm} connect={myForm} style={{ boxShadow: '5px 10px #888888', borderRadius: '10px'}}>
      <form
        noValidate
        onSubmit={myForm.submitStep}
        className="form-req"
        style={{ minHeight: '16rem' }}
      >


        <div className="form-req-content">
          <FormizStep name="step1">

            <div className="mb-4">
              <h5>Introduction</h5>
            </div>


            <div className="row">
              <div className="col-md-6">
                <div className="mb-3 form-group text-start">
                  <div>
                    <label className="form-check-label">
                      You are a
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioPerson" id="flexRadioDefault1" checked/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Parent
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioPerson" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      Student
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3 form-group text-start">
                  <div>
                    <label className="form-check-label">
                      Tutee's Gender
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioGender" id="flexRadioDefault1" checked/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioGender" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
              </div>

            </div>


            {/* <MyField
              name="name"
              label="Name"
              required="Name is required"

            /> */}
            <div className="mb-3 text-start">
              <label for="exampleFormControlInput1" className="form-label">Tuition Place / Address<strong className='text-danger'>*</strong></label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>

              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="mb-3 text-start">
              <label for="exampleFormControlTextarea1" className="form-label">Subject(s)<strong className='text-danger'>*</strong> </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>



          </FormizStep>
          <FormizStep name="step2">

            <div className="mb-4">Tuition Details</div>

            <MyField
              name="email"
              label="Email"
              type="email"
              required="Email is required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email',
                }
              ]}

            />

          </FormizStep>
          <FormizStep name="step3">
            <div className="mb-4">Tutor Details</div>

            <MyField
              name="password"
              label="Password"
              type="password"
            />
            <MyField
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              validations={[
                {
                  rule: (value) => myForm.values.password === value,
                  deps: [myForm.values.password],
                  message: 'Passwords do not match',
                }
              ]}
            />

          </FormizStep>

          <FormizStep name="step4">
            <div className="mb-4">Confirmation</div>

            <MyField
              name="password"
              label="Password"
              type="password"
            />
            <MyField
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              validations={[
                {
                  rule: (value) => myForm.values.password === value,
                  deps: [myForm.values.password],
                  message: 'Passwords do not match',
                }
              ]}
            />

          </FormizStep>
        </div>

        <div className="form-req-footer bd-highlight">
          <div className="me-auto new-order-1 bd-highlight" style={{ minWidth: '6rem' }}>
            {!myForm.isFirstStep && (
              <button
                className="btn btn-default"
                type="button"
                onClick={myForm.prevStep}
              >
                Previous
              </button>
            )}
          </div>
          <div className="text-sm text-muted p-2 text-center new-order-2 bd-highlight">
            Step
            {' '}
            {myForm.currentStep && myForm.currentStep.index + 1 || 0}
            {' '}
            of
            {' '}
            {myForm.steps.length}
          </div>
          <div
            className="ms-auto new-order-3 bd-highlight"
            style={{ minWidth: '6rem' }}
          >
            {myForm.isLastStep ? (
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isLoading || (!myForm.isValid && myForm.isStepSubmitted)}
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            ) : (
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!myForm.isStepValid && myForm.isStepSubmitted}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </Formiz>
  )
}

// render(
//   <MyForm />
// )

export default MyForm