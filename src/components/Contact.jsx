import { useRef, useState } from 'react'
import axios from 'axios'
import './Contact.scss'
import Alert from './Alert'

export function Contact() {
    const contactForm = useRef()

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function submitForm(e) {
        e.preventDefault()
        setLoading(true)
        let data = {
            fullName: contactForm.current.fullName.value,
            email: contactForm.current.email.value,
            message: contactForm.current.message.value,
        }

        axios.post("https://gatechbackend.onrender.com/api/v1/sendmessage", data)
            .then((response) => {
                console.log(response)
                setLoading(false);
                setSuccess(true);
            })
            .catch((error) => {
                console.log(error.message)
                setLoading(false);
                setError(true)
            })
    }

    return (
        <>
            {success ? 
                <Alert heading="Message Sent" info="A response will be sent to abdulsalamjubr3@gmail.com" type="success" />
            : null}
            {error ? 
                <Alert heading="Try Resending" info="Something went wrong, Make sure you filled the form correctly" type="error" />
            : null}
            <section className="contact constraint">
                <div className='center-content'>
                    <h2>Drop us a <span className="text-primary">Message</span></h2>
                </div>
                <div className='form center-content'>
                    <form ref={contactForm} onSubmit={submitForm}>
                        <label htmlFor="name">Full Name
                            <input name="fullName" id="name" type="text" required /> 
                        </label>
                        <label htmlFor="email">Email
                            <input name="email" id="email" type="email" required />
                        </label>
                        <textarea name="message" id="message" placeholder='Your Message' required ></textarea>
                        <div className="submit-button overlay-content">
                            <input type="submit" value="Send Message"/>
                            {loading ? 
                             <div className="loading-state center-content"><span className="loader"></span></div>
                            : null}
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}