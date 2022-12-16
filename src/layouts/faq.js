import React from 'react';
import SectionDefault from '../components/section-default';
import Accordion from '../widgets/accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FAQ() {
  return (
    <div className="section-wrap">
      <SectionDefault cPadding={'section-header-p'} >
        <div className="row">
          <div className='col-md-7  align-self-center '>
            <h6>Got Questions?</h6>
            <h1 className='h1-de'>Frequently Asked Questions</h1>

            <a className='mt-5' href='#parents' style={{textDecoration: 'none', display: 'block',}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              <span className='ps-2'>Requesting A Tutor</span>
            </a>
            <a href='#rates' style={{textDecoration: 'none', display: 'block'}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              <span className='ps-2'>Tuition Rates</span>
            </a>
            <a href='#lessons' style={{textDecoration: 'none', display: 'block'}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              <span className='ps-2'>Lessons</span>
            </a>
            <a href='#general' style={{textDecoration: 'none', display: 'block'}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              <span className='ps-2'>General</span>
            </a>
            <a href='#tutor' style={{textDecoration: 'none', display: 'block'}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              <span className='ps-2'>Tutor</span>
            </a>
          </div>
          <div className="col-md-5 align-self-center p-5">
            <img src="https://tuitionpanda.com/wp-content/uploads/2021/08/19333428.jpg"
              width="100%" height="auto" alt=""/>
          </div>
        </div>
      </SectionDefault>

      <SectionDefault cPadding='py-3'>
        <div className='text-md-start py-2' id='parents'>
          <h2>Requesting A Tutor</h2>
        </div>

        <Accordion>
          <Accordion.Item collapsed={false}>
            <Accordion.Header>
              How Do I Request For A Tutor?
            </Accordion.Header>
            <Accordion.Body>
              There are 3 ways for you to request a tutor with us and it takes less than <u>2 minutes</u> to do so. The avenues as listed below: <br/><br/>
              1. <strong className='text-primary'>Submit a request</strong> to us using Smart Request Form.<br/>
              2. <strong className='text-primary'>Drop us your contact number</strong> so we can contact you back.<br/>
              3. If you have more criteria that do not fit in methods above, <strong className='text-primary'>send us a quick email</strong>.<br/><br/>
              After that, you can sit back and relax while we source for the perfect tutor for you.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Header>
              What Are The Types Of Tutors Available?
            </Accordion.Header>

            <Accordion.Body>
              In Tuition Panda, we have 3 main groups tutors:<br/><br/>
              - <strong className='text-primary'>Part-Time Tutors</strong> - refers to private tutors who doing it part-time. Most of the
              tutors here are still schooling: A-level graduates, Diploma students/graduates, or Undergraduates. To a lesser extent, there
              are also University graduates and working professionals offering tuition part-time and they fall under this category. Part-time
              tutors are the <u>affordable option</u> for home tuition in Malaysia.<br/><br/>

              - <strong className='text-primary'>Full-Time Tutors</strong> - refers to full-time private tutors who teach as a profession.
              Full-time tutors may/may not be university graduates but often have <u>significantly more teaching experiences</u> than part-time
              tutors as they tutor lots of students 1-to-1 as well as take up jobs in tuition centres teaching groups of students in classes.
              The actual qualifications and experience of a full-time tutor can vastly differ between individuals, hence so does the tuition
              rate they command.<br/><br/>

              - <strong className='text-primary'>School Teachers</strong> - refers to ex/current school teachers either from MOE or from
              private and international schools. Tutors under this category tend to be the <u>most experienced and qualified</u> in private tutoring
              and thus command the highest tuition rates. Be prepared to pay a premium in order to engage these teachers successfully.<br/><br/>
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              How Are The Tutors Assigned To Me?
            </Accordion.Header>

            <Accordion.Body>
              After making a request via 3 methods listed in previously, Tuition Panda will assign a <u>Personal Coordinator</u> to you and
              will determine the <strong className='text-primary'>best available tutor based on your stated preferences</strong> and will
              send you recommendations via WhatsApp (preferred), Telegram or Email.<br/><br/>

              You can then ask any questions, request to speak with the tutor via conference call, ask for a an hour paid trial class,
              ask for another recommendation or simply confirm the tutor. If you are uncomfortable with any details regarding the newly
              assigned tutor, you can always request for a different tutor. <u>Your Personal Coordinator will ensure that both parties agree on
              the lesson details and pricing</u> before confirming the lessons.<br/><br/>

              Once you have confirmed a suitable tutor, we'll send you the lesson details via a confirmation email and you can start
              preparing for your first lesson!
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Can I Request For A Specific Tutor?
            </Accordion.Header>

            <Accordion.Body>
              <strong className='text-primary'>Sure</strong>, if you have any tutors in mind, let us know the information of the tutor you are looking
              for. As <u>we have the most extensive tutor base in Malaysia & Singapore</u>, we may be able to find the tutor you are looking for.<br/><br/>

              Alternatively, you may leave everything to us. Your personal coordinator will love to advice you on the availabilities
              of the requested tutor and recommend any similar tutors that may be available if needed.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Can I Trust The Tutors Provided By TuitionPanda?
            </Accordion.Header>

            <Accordion.Body>
              <strong className='text-primary'>We treats the credibility of our tutor profiles very seriously</strong>. All suspicious tutor applications
              or profiles with missing information are immediately investigated and blacklisted. For tutees who wish to personally verify their
              tutor's qualifications and identity, you may request that the tutor bring their relevant certificates on the 1st lesson.
              (We do not to send online documents to protect the privacy of our tutor). For current school teachers, it is our SOP to remind tutors
              to bring teacher's pass on their first lesson as a form of verification to give tutee a peace of mind.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </SectionDefault>

      <SectionDefault cPadding='py-3'>
        <div className='text-md-start py-2' id='rates'>
          <h2>Tuition Rates</h2>
        </div>

        <Accordion>
          <Accordion.Item collapsed={false}>
            <Accordion.Header>
              How Parents Are Charged?
            </Accordion.Header>
            <Accordion.Body>
              Each tutor has their own rates depending on their <u>qualifications, experience, and many other factors</u> such
              as student's level, location, timing etc.<br/><br/>

              However, when arranging the tuition for you, we will ensure that the rates are <strong className='text-primary'>fair and within market rates</strong>.
              If you requested multiple subjects, we can help you to negotiate for best prices.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Header>
              Do I Have To Pay Any Service Fees?
            </Accordion.Header>

            <Accordion.Body>
              Our services are <strong className='text-primary'>Completely FREE</strong> for parents and students. You are only required
              to <u>pay only for lessons conducted</u>.
              Behind the scene, a portion of the total lesson fees usually in the first four weeks of lessons will
              be deducted directly from the tutor's fees as the agency commission. You do not pay anything extra.<br/><br/>

              If you requested  additional trial classes for you to evaluate a tutor, you are required to  <strong className='text-primary'>pay the
              tuition fees to Tuition Panda before the trial class</strong>. Once the trial class is completed, we will
              transfer the tuition fees to the tutor
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              How Do I Pay For Lessons?
            </Accordion.Header>

            <Accordion.Body>
              You <strong className='text-primary'>pay the tuition fees to your tutor directly</strong> every month in any method preferred by both parties.<br/><br/>

              Do take note that our services are <u>completely free</u> for you  and we are here to help you with the tuition
              fees payment process. You are aware that <u>paying your tuition fees on time</u> is important to your tutor so
              they can continuously provide the best education. There are no additional / hidden fees you need to pay
              to Tuition Panda.<br/><br/>

              <i>Example: Madam Jane hires a tutor Sally  for $50/lesson, 1 hour per lesson at 1 lesson per week. After
              attending two lessons, Madam Jane transfers $200 to tutor Sally, assuming there are four weeks in that month.
              The arrangement made between Madam Jane and tutor Sally is to pay every 2nd week of a month via bank transfer.</i>
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Is Advance Payment Needed?
            </Accordion.Header>

            <Accordion.Body>
              You <strong className='text-primary'>do not</strong> have to make advance payments of any kind. All payments are made only after the requisite
              lessons have been conducted.<br/><br/>

              Only if you are requesting additional trial classes before confirming to continue with a tutor, <u>we will collect the trial
              class tuition fee in advance</u>, where we will transfer back to the tutor after the trial class is completed.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Are There Any Binding Contracts?
            </Accordion.Header>

            <Accordion.Body>
              There are <strong className='text-primary'>no contracts and obligations</strong> until you agree to engage our tutors. When any assignment is confirmed, there are guidelines
              to follow to ensure that both the student and tutor can have a smooth and rewarding experience.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </SectionDefault>

      <SectionDefault cPadding='py-3'>
        <div className='text-md-start py-2' id='lessons'>
          <h2>Lessons</h2>
        </div>

        <Accordion>
          <Accordion.Item collapsed={false}>
            <Accordion.Header>
              Where Are Lessons Conducted?
            </Accordion.Header>
            <Accordion.Body>
              <strong className='text-primary'><u>Home Tuition</u></strong><br/>

              The lessons will be <u>conducted at a pre-determined location according to your preference</u> (usually at your home).
              If it is not convenient to have tuition conducted at your home, you may request for the tuition to be conducted somewhere
              else, such as the tutor's home, or at a convenient public location such as libraries, cafeterias, hostels, etc.
              The location of the tuition lessons should be determined before the confirmation of lessons, the same as the tuition rate.
              Any change in address after lessons have started is subject to both parties' approval.<br/><br/>

              <strong className='text-primary'><u>Online Tuition</u></strong><br/>

              Online lessons will be conducted on <u>Google Meet, Zoom, Microsoft Team, WebEx, or other video conference platforms</u> that are suitable for both parties.
              Do take note that learning material will be in softcopy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Header>
              Can I Postpone Lessons Dates & Timings?
            </Accordion.Header>

            <Accordion.Body>
              Yes, of course. However, all postponements of lessons must be made <strong className='text-primary'>at least 24 hours in advance</strong> of lessons,
              except for special cases (such as medical emergencies).<br/><br/>

              Please note that failure to make a postponement at least 24 hours in advance may incur compensation to the tutor for loss
              (e.g time slot already blocked for the lesson, wasted trips). Generally, the compensation amount is 50% of the 1-lesson fee.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Can I Terminate Lessons If The Tutor Is Not Suitable?
            </Accordion.Header>

            <Accordion.Body>
              If you already confirmed to continue with a tutor, you may terminate the tuition <strong className='text-primary'>after the first four lessons / first month</strong>
              and must pay for all lessons conducted.<br/><br/>

              If you haven't confirm, you may terminate or switch tutor at your own will.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Will Tutors Postpone Lessons?
            </Accordion.Header>

            <Accordion.Body>
              We does not encourage tutors to make frequent postponements to the lessons. However, we do encourage you
              to <u>offer some degree of flexibility</u> as tutors are also human and may fall sick or have sudden emergencies from time to time.<br/><br/>

              If the tutor we assigned to you happen to make postponements more frequently than you prefer, you may wish
              to communicate with them and remind them to stick to the usual lesson schedule. Sometimes, a simple effort to
              communicate between both parties can go a long way in avoiding any disruption in lessons or last-minute discrepancies.<br/><br/>

              If you face further difficulties with your tutor in this area, please feedback to us immediately and
              we will arrange a new tutor for you.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Are There Any Binding Contracts?
            </Accordion.Header>

            <Accordion.Body>
              For termination of lessons, tutors are expected to <strong className='text-primary'>commit for at least the 4-weeks of tuition</strong>.
              If the tutor backs out of an assignment without a valid reason (e.g. illness) before completing
              at least 4-weeks of tuition, he/she will not be entitled to receive any tuition fees. i.e.
              You will only be required to pay 50% of the tuition fees (plus any applicable taxes) directly to the agency.<br/><br/>

              Unfortunately, we are unable to force tutors to commit for more than 4-weeks. However, we do encourage
              responsible behaviour and let our tutors know that they should do their best to commit at least until
              the end of year exams. Most of our tutors follow through.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              Can I Add Subjects Or Students With Tutor From TuitionPanda?
            </Accordion.Header>

            <Accordion.Body>
              <strong className='text-primary'>Yes</strong>, you can do so as you wish. TuitionPanda is not responsible for any engagements made outside of the
              agency's knowledge. Hence, tutors and tutees are expected to inform their Personal Coordinator of any added
              lessons or changes to the lessons schedule/subjects/tutees.<br/><br/>

              We encourage you to <strong className='text-primary'>make your request through the agency</strong> in order to stay protected and keep the tutor accountable to the agency.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </SectionDefault>

      <SectionDefault cPadding='py-3'>
        <div className='text-md-start py-2' id='general'>
          <h2>General</h2>
        </div>

        <Accordion>
          <Accordion.Item collapsed={false}>
            <Accordion.Header>
              How Do I Feedback To TuitionPanda Regarding The Tutor Or My Experience?
            </Accordion.Header>
            <Accordion.Body>
              You may email us at <a href='mailto:support@tuitionpanda.com'>support@tuitionpanda.com</a> for any feedback or questions
              that are not answered under this FAQ.<br/><br/>

              We appreciate your help in providing us accurate feedback so we can serve your and others better.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </SectionDefault>

      <SectionDefault cPadding='pt-3 pb-5'>
        <div className='text-md-start py-2' id='tutor'>
          <h2>Tutor FAQ</h2>
          <p>A Tutor? Check out the FAQ below:</p>
        </div>

        <Accordion>
          <Accordion.Item collapsed={false}>
            <Accordion.Header>
              What Is The Qualifications To Be A Tutor?
            </Accordion.Header>
            <Accordion.Body>
              To become a tutor, you need to possess <strong className='text-primary'>at least a higher education certificate and above</strong> qualifications. Bonus if you have other academic certifications.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Header>
              How Much Do I Earn?
            </Accordion.Header>

            <Accordion.Body>
              Our commission is calculated at <u>50% on the first payment cycle</u>. You will receive full payment starting the second month and above<br/><br/>

              <u>Example</u><br/>
              A mom in Subang Jaya is looking for a home tutor for her son currently in Year 5.<br/><br/>

              Rate: <strong className='text-primary'>RM50/hour</strong><br/><br/>

              Frequency: <strong className='text-primary'>1 lesson  X  2 hours per week</strong><br/><br/>

              Monthly Tuition Fee (4 weeks): 1 lesson * 2 hours * RM50/hr * 4 weeks = <strong className='text-primary'>RM400.00</strong><br/><br/>

              You receive:<br/>
              Month 1: <strong className='text-primary'>RM200</strong> (RM 200 / 50% of first-month fee is deposited as commission)<br/>
              Month 2: <strong className='text-primary'>RM400</strong><br/>
              Month 3 and above: <strong className='text-primary'>RM400</strong>
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              What If The Student Terminates The Lessons Before The End Of First Month?
            </Accordion.Header>

            <Accordion.Body>
              If this happens, <strong className='text-primary'>an equivalent percentage of your commission will be refunded</strong> based on the number of completed lessons.<br/><br/>

              <u>Example</u><br/>

              Based on the previous example, expected 4 lessons, but the student stops after 2 lessons.
              We will refund <u>2 / 4 * RM200 = RM100</u> back to you in 48 hours. <strong className='text-primary'>You need to inform us</strong>.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item>

            <Accordion.Header>
              I Did Not Receive Any After Applying The Job Through WhatsApp / Telegram
            </Accordion.Header>

            <Accordion.Body>
              We only contact shortlisted tutors.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </SectionDefault>

    </div>
  );
}

export default FAQ;
