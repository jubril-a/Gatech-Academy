import { useRef, useState } from 'react';
import axios from 'axios';
import './Contact.scss';
import Alert from './Alert';

export function Contact() {
  const contactForm = useRef();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    let data = {
      fullName: contactForm.current.fullName.value,
      email: contactForm.current.email.value,
      message: contactForm.current.message.value,
    };

    axios
      .post('https://gatechbackend.onrender.com/api/v1/sendmessage', data)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        contactForm.current.reset()
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }

  function closeMessage() {
    setError(false)
    setSuccess(false)
  }

  return (
    <>
      {success ? (
        <Alert
          heading='Message Sent'
          info='A reply will be sent to abdulsalamjubr3@gmail.com'
          type='success'
          clickHandler={closeMessage}
        />
      ) : null}
      {Error ? (
        <Alert
          heading='Try Resending'
          info="Please make sure you filled it correctly and have an internet connection."
          type='error'
          clickHandler={closeMessage}
        />
      ) : null}
      <section className='contact constraint'>
        <div className='center-content'>
          <h2>
            Drop us a <span className='text-primary'>Message</span>
          </h2>
        </div>
        <div className='form center-content'>
          <form
            ref={contactForm}
            onSubmit={submitForm}
          >
            <label htmlFor='name'>
              Full Name
              <input
                name='fullName'
                id='name'
                type='text'
                required
              />
            </label>
            <label htmlFor='email'>
              Email
              <input
                name='email'
                id='email'
                type='email'
                required
              />
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Your Message'
              required
            ></textarea>
            <div className='submit-button overlay-content'>
              <input
                type='submit'
                value='Send Message'
              />
              {loading ? (
                <div className='loading-state center-content'>
                  <span className='loader'></span>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
