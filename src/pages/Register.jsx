import { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import '../assets/styles/registerPage.scss';

export default function Register() {
  const stepOne = useRef();
  const stepTwo = useRef();
  const stepThree = useRef();

  const first_name = useRef();
  const last_name = useRef();
  const date_of_birth = useRef();
  const dob = useRef();
  const mob = useRef();
  const yob = useRef();

  const phone = useRef();
  const email = useRef();
  const address = useRef();

  const course = useRef();
  const level = useRef();
  const tech_phase = useRef();
  const preference = useRef();
  const payment_plan = useRef();
  const accept_terms = useRef();

  const studentInfo = useRef({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    course: '',
    qualification: '',
    techPhase: '',
    preference: '',
    paymentPlan: '',
    acceptTerm: null,
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formBox = useRef()

  function recordInput(updates) {
    for (let update of updates) {
      let key = update.current.name;
      let value = update.current.value;
      studentInfo.current[key] = value;
    }
  }

  function submitForm() {
    setLoading(true);
    axios
      .post(
        'https://gatechbackend.onrender.com/api/v1/register',
        studentInfo.current
      )
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setError(true)
      });
  }

  return (
    <div id="top" className='overlay-content'>
      <div className='container'>
        <div className='image-side'></div>
        <div ref={formBox} className='form-box overlay-content'>
          <div>
            <HashLink
              to='/'
              className='text-primary'
            >
              Back to Home
            </HashLink>
            <form
              className='step-container active-step'
              ref={stepOne}
              onSubmit={(e) => {
                e.preventDefault();
                date_of_birth.current.value = `${dob.current.value}/${mob.current.value}/${yob.current.value}`;
                recordInput([first_name, last_name, date_of_birth]);
                stepOne.current.classList.remove('active-step');
                stepTwo.current.classList.add('active-step');
              }}
            >
              <h2>Personal Info</h2>
              <p className='description'>
                Enter your Personal Information Correctly
              </p>
              <div>
                <label htmlFor='fname'>First Name</label>
                <input
                  ref={first_name}
                  name='firstName'
                  id='fname'
                  type='text'
                  placeholder='e.g Uthman'
                  required
                />
              </div>
              <div>
                <label htmlFor='lname'>Last Name</label>
                <input
                  ref={last_name}
                  name='lastName'
                  id='lname'
                  type='text'
                  placeholder='e.g Giwa'
                  required
                />
              </div>
              <div className='date'>
                <label htmlFor=''>Date of Birth</label>
                <div>
                  <input
                    ref={dob}
                    type='text'
                    placeholder='DD'
                    required
                  />
                  <input
                    ref={mob}
                    type='text'
                    placeholder='MM'
                    required
                  />
                  <input
                    ref={yob}
                    type='text'
                    placeholder='YYYY'
                    required
                  />
                  <input
                    ref={date_of_birth}
                    id='dob'
                    name='dob'
                    type='text'
                    hidden
                  />
                </div>
              </div>
              <input
                className='register'
                type='submit'
                value='Next Step'
              />
            </form>
            <form
              className='step-container'
              ref={stepTwo}
              onSubmit={(e) => {
                e.preventDefault();
                recordInput([phone, email, address]);
                stepTwo.current.classList.remove('active-step');
                stepThree.current.classList.add('active-step');
              }}
            >
              <h2>Contact Info</h2>
              <p className='description'>
                Enter your Contact Information Correctly
              </p>
              <div>
                <label htmlFor='phone'>Phone</label>
                <input
                  ref={phone}
                  name='phone'
                  id='phone'
                  type='tel'
                  placeholder='e.g 0705 954 2345'
                  required
                />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  ref={email}
                  name='email'
                  id='email'
                  type='email'
                  placeholder='e.g hello@world.com'
                  required
                />
              </div>
              <div className='address'>
                <label htmlFor='address'>Address</label>
                <textarea
                  ref={address}
                  name='address'
                  id='address'
                  required
                ></textarea>
              </div>
              <input
                className='register'
                type='submit'
                value='Next Step'
              />
            </form>
            <form
              className='step-container'
              ref={stepThree}
              onSubmit={(e) => {
                e.preventDefault();
                formBox.current.scrollTop = 0;
                tech_phase.current.value = stepThree.current.techJourney.value;
                preference.current.value = stepThree.current.prefer.value;
                payment_plan.current.value = stepThree.current.plan.value;
                recordInput([
                  course,
                  level,
                  tech_phase,
                  preference,
                  payment_plan,
                  accept_terms,
                ]);
                submitForm();
              }}
            >
              <h2>Admission</h2>
              <p className='description'>
                Enter your Contact Information Correctly
              </p>
              <div>
                <label htmlFor='courses'>Select a Course</label>
                <select
                  ref={course}
                  name='course'
                  id='courses'
                >
                  <option value='Full Stack Development'>
                    Full Stack Web Development
                  </option>
                  <option value='Front-end Development'>
                    Front-end Web Development
                  </option>
                  <option value='Back-end Development'>
                    Back-end Web Development
                  </option>
                  <option value='Graphics Design'> Graphics Design</option>
                  <option value='Advanced Graphics Design'>
                    {' '}
                    Advanced Graphics Design
                  </option>
                  <option value='Data Analysis'> Data Analysis</option>
                  <option value='IT Admin'> IT Admin</option>
                </select>
              </div>
              <div>
                <label htmlFor='qualification'>
                  Highest Level of Education
                </label>
                <select
                  ref={level}
                  name='qualification'
                  id='qualification'
                >
                  <option value="O' Level">O' Level</option>
                  <option value='ND/OND'>ND/OND</option>
                  <option value='HND'>HND</option>
                  <option value='BSc'>BSc</option>
                  <option value='Masters'>Masters</option>
                </select>
              </div>
              <div className='radios'>
                <p className='sublabel'>Tech Journey</p>
                <div>
                  <input
                    type='radio'
                    name='techJourney'
                    id='beginner'
                    value='Beginner'
                  />
                  <label
                    htmlFor='beginner'
                    labels='radio'
                  >
                    Beginner
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='techJourney'
                    id='amateur'
                    value='Amateur'
                  />
                  <label
                    htmlFor='amateur'
                    labels='radio'
                  >
                    Amateur
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='techJourney'
                    id='expert'
                    value='Expert'
                  />
                  <label
                    htmlFor='expert'
                    labels='radio'
                  >
                    Expert
                  </label>
                </div>
                <input
                  ref={tech_phase}
                  name='techPhase'
                  type='text'
                  hidden
                />
              </div>
              <div className='radios'>
                <p className='sublabel'>How do you prefer to learn</p>
                <div>
                  <input
                    type='radio'
                    name='prefer'
                    id='hands-on'
                    value='Hands-on Projects'
                  />
                  <label
                    htmlFor='hands-on'
                    labels='radio'
                  >
                    Hands-on Projects
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='prefer'
                    id='theoretical'
                    value='Theoretical Concepts'
                  />
                  <label
                    htmlFor='theoretical'
                    labels='radio'
                  >
                    Theoretical Concepts
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='prefer'
                    id='discussions'
                    value='Group Discussions'
                  />
                  <label
                    htmlFor='discussions'
                    labels='radio'
                  >
                    Group Discussions
                  </label>
                </div>
                <input
                  ref={preference}
                  name='preference'
                  type='text'
                  hidden
                />
              </div>
              <div className='radios'>
                <p className='sublabel'>Payment Plan</p>
                <div>
                  <input
                    type='radio'
                    name='plan'
                    id='full'
                    value='Full Payment'
                  />
                  <label
                    htmlFor='full'
                    labels='radio'
                  >
                    Full Payment
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='plan'
                    id='half'
                    value='Half Payment'
                  />
                  <label
                    htmlFor='half'
                    labels='radio'
                  >
                    Half Payment
                  </label>
                </div>
                <input
                  ref={payment_plan}
                  name='paymentPlan'
                  type='text'
                  hidden
                />
              </div>
              <div className='flex'>
                <input
                  ref={accept_terms}
                  name='acceptTerm'
                  id='accept-terms'
                  type='checkbox'
                  required
                />
                <label htmlFor='accept-terms'>
                  By checking this box, you have read and agreed with Gatech
                  Academy's
                  <a
                    href='https://docs.google.com/document/d/e/2PACX-1vQWb6r_cxzKnb3Nq9rYHYshDYa2XQ-frnIfatlA4AO1EcDMADmlfb6Mw1_0_DKn0g/pub'
                    className='text-primary'
                  >
                    {' '}
                    student policy.
                  </a>
                </label>
              </div>
              <p>
                Got Questions?{' '}
                <a
                  href=''
                  className='text-primary'
                >
                  Chat with Us
                </a>
              </p>
              <input
                className='register'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
          {loading ? (
            <div className='loading center-content'>
              <span class='loader'></span>
            </div>
          ) : null}
          {success ? (
            <div className='msg'>
              <HashLink
                to='/'
                className='text-primary'
              >
                Back to Home
              </HashLink>
              <div>
                <h1>
                  <span className='text-primary'>Welcome</span> to Gatech
                  Academy
                </h1>
                <p>Your Tech Journey Begins Now</p>
              </div>
              <div className='next-steps'>
                <p className='bold'>Hi 👋 {first_name.current.value},</p>
                <p>
                  You're just a few steps away from unlocking endless
                  opportunities at our Tech Academy! Our representative will be
                  reaching out to you shortly at {phone.current.value} to guide
                  you through the final process and answer any questions you may
                  have.
                </p>
                <p className='bold'>
                  Please ensure your phone is readily available. Adios!
                </p>
              </div>
            </div>
          ) : null}
          {error ? (
            <div className='msg'>
              <HashLink
                to='/'
                className='text-primary'
              >
                Back to Home
              </HashLink>
              <div>
                <p className='error'>
                  Sorry, something went wrong.
                  <HashLink
                    to='/register#top'
                    className='error-link ml-1'
                  >
                    Try Filling the form Again.
                  </HashLink>
                  Make sure you're entering your info correctly
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
