import { useRef } from 'react'
import axios from 'axios'
import './Contact.scss'

export function Contact() {
    const contactForm = useRef()

    function submitForm(e) {
        e.preventDefault()
        let data = {
            fullName: contactForm.current.fullName.value,
            email: contactForm.current.email.value,
            message: contactForm.current.message.value,
        }

        axios.post("https://gatechbackend.onrender.com/api/v1/sendmessage", data)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    return (
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
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </section>
    )
}