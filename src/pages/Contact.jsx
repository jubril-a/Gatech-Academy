import { useRef, useState } from "react";
import axios from 'axios'
import PageTemplate from "./PageTemplate";
import QuestionTemplate from "../components/questionTemplate";
import "../assets/styles/contactPage.scss"
import phoneIcon from "/icons/phone.svg"
import mailIcon from "/icons/mail.svg"
import mapIcon from "/icons/map.svg"

const questions = [
    ["What courses does Gatech Academy offer?",
    "Gatech Academy offers a range of tech training courses including Data Analytics, Frontend Development, Full-Stack Development, IT System Admin, Graphics Design, Advanced Graphics Design, Digital Marketing, and Data Analysis."],
    ["Are the instructors at Gatech Academy qualified?",
    "Yes, all instructors at Gatech Academy are industry professionals with extensive experience in their respective fields. They are committed to providing high-quality education and mentorship to our students."],
    ["Can I enroll in multiple courses simultaneously?",
    "Yes, you can enroll in multiple courses at Gatech Academy. However, we recommend considering your schedule and workload to ensure you can fully commit to each course."],
    ["Are there any prerequisites for enrolling in courses?",
    "Prerequisites vary depending on the course. Some courses may require prior knowledge or experience in specific areas, while others may be suitable for beginners. Please refer to the course descriptions for detailed information on prerequisites."],
    ["How are the courses delivered?",
    "Gatech Academy offers a variety of delivery formats including in-person classes, live online sessions, and self-paced online courses(Hybrid, Physical and Both). The delivery format may vary depending on the course and location."],
    ["Is financial aid available for courses at Gatech Academy?",
    "Gatech Academy offers various financial aid options including scholarships, grants, and payment plans. Eligibility criteria and application processes may vary, so we encourage you to reach out to our admissions team for more information."],
    ["How do I access course materials and resources?",
    "Upon enrollment, students gain access to our online learning platform where they can access course materials, resources, assignments, and communication tools. Instructors may also provide additional resources during classes."],
    ["What if I don't have a laptop?",
    "No laptop? No problem! For physical classes, Gatech Academy provides laptops in the physical classroom for students who do not have their own devices. However, it is advisable to get your own laptop before the end of the classes for your convenience."],
    ["What support services are available to students?",
    "Gatech Academy provides comprehensive student support services including academic advising, tutoring, career counseling, Personal development and technical support. Our goal is to ensure students have the resources and assistance they need to succeed."],
    ["Does Gatech Academy offer job placement assistance?",
    "Yes, Gatech Academy offers job placement assistance to help students transition into the workforce. This may include resume building workshops, interview preparation sessions, networking opportunities, and access to job postings."],
    ["How do I contact Gatech Academy for more information?",
    "For more information about courses, enrollment, financial aid, or any other inquiries, you can contact our admissions team at 08132623553 and gatechintegratedservices@gmail.com. Alternatively, you can visit our website or follow us on social media for updates and announcements."],
]

export default function Register() {
    const questionsBox = useRef()
    const contactForm = useRef()

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    function activeControl() {
        questionsBox.current.children[0].classList.add('active-question')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        let data = {
            fullName: `${contactForm.current.firstName.value} ${contactForm.current.lastName.value}`,
            email: contactForm.current.email.value,
            phone: contactForm.current.phone.value,
            message: contactForm.current.message.value,
        }

        axios.post("https://gatechbackend.onrender.com/api/v1/sendmessage", data)
            .then((response) => {
                console.log(response)
                setLoading(false)
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error.message)
                setError(true)
            })
    }

    return (
        <PageTemplate currentPage="Contact">
            <div className="contact-page">
                <main id="top" className="hero center-content">
                    <h1>Get In Touch With Us</h1>
                </main>
                <div className="main-container constraint">
                    <section className="main-contact">
                        <div className="first-child">
                            <h2>Contact Information</h2>
                            <ul className="contact-info">
                                <li className="info">
                                <img src={phoneIcon} alt="" />
                                    <div>
                                        <span>0818 490 6041</span>
                                        <span>0818 554 0793</span>
                                    </div>
                                </li>
                                <li className="info">
                                    <img src={mailIcon} alt="" />
                                        <div>
                                            <span>admissions@gatechinfo.com</span>
                                            <span>academy@gatechinfo.com</span>
                                        </div>
                                    </li>
                                <li className="info">
                                    <img src={mapIcon} alt="" />
                                    <div>
                                        <span>Suite 83, Terrace Wing, Tafawa Belewa Square, Onikan, Lagos, Nigeria.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>Send Us a <span className="text-primary">Message</span></h2>
                            <form ref={contactForm} onSubmit={handleSubmit}>
                                <div>
                                    <label>First Name</label>
                                    <input name="firstName" type="text" required />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input name="lastName" type="text" required />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input name="email" type="email" required />
                                </div>
                                <div>
                                    <label>Phone Number  </label>
                                    <input name="phone" type="tel" required />
                                </div>
                                <div className="span-2">
                                    <label>Your Message</label>
                                    <textarea name="message" id="message" required ></textarea>
                                </div>
                                <input type="submit" value="Send Message" />
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <section id="faq" className="faq-section constraint">
                <h2>Frequently Asked Questions</h2>
                <div className="questions" ref={questionsBox} onLoad={activeControl}>
                    {questions.map(question => (
                        <QuestionTemplate qstn={question[0]} answr={question[1]} key={questions.indexOf(question)}/>
                    ))}
                </div>
            </section>
            
        </PageTemplate>
    )
}