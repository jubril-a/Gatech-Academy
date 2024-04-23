import './Contact.scss'

export function Contact() {
    return (
        <section className="contact constraint">
            <div className='center-content'>
                <h2>Drop us a <span className="text-primary">Message</span></h2>
            </div>
            <div className='form center-content'>
                <form action="https://formspree.io/f/mnqeljry"
                    method="POST">
                    <label htmlFor="name">Name
                        <input id="name" type="text" /> 
                    </label>
                    <label htmlFor="email">Email
                        <input id="email" type="email" />
                    </label>
                    <textarea name="message" id="message" placeholder='Your Message'></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
        </section>
    )
}