import PageTemplate from './PageTemplate'
import { Button } from '../components/Button'
import '../assets/styles/about.scss'

export default function About() {
    return (
        <PageTemplate currentPage="About">
            <div className="about">
                <div className="main_container">
                    <main>
                        <div className="main__content">
                            <h1><span className="text-primary">Welcome to Gatech<br /></span> where educational excellence meets real-world relevance</h1>
                            <p className="description">At Gatech, we understand that the ever-evolving tech landscape demands
                            a new kind of education—one that equips you with the knowledge and skills to thrive in a dynamic
                            world driven by technology.</p>
                        </div>
                    </main>   
                </div>
                <section className="main__description constraint x-wrapper">
                    <div className="description__text">
                        <p>Our training programs are designed with a singular focus: to empower you to excel in the tech industry. Whether you're
                        passionate about IT Administration, Full-Stack Development, or Data Analysis, Gatech offers comprehensive, hands-on training
                        that prepares you for success.</p>
                    </div>
                    <div className="description__cards  overlay-content">
                        <img src="/images/coursecards.png" alt="course cards" />
                        <div className="soft-icons bounce">
                            <img src="/icons/powerbi.png" alt="" className='right' />
                            <img src="/icons/photoshop.png" alt="" className='left' />
                        </div>
                    </div>
                </section>
                <div className="why_wrapper">
                    <section className="why-choose constraint">
                        <h2>Why Choose Gatech Training Programme</h2>
                        <div className="why-choose__child">
                            <div className="why">
                                <h3>Expert Faculty</h3>
                                <p>Our experienced faculty members are industry professionals who bring real-world insights to the classroom. They are dedicated to your growth and success.</p>
                            </div>
                            <div className="why">
                                <h3>Hands-On Learning</h3>
                                <p>We believe in learning by doing. Our programs emphasize practical, hands-on experience, allowing you to apply what you learn in real-world scenarios.</p>
                            </div>
                            <div className="why">
                                <h3>Industry-Relevant Curriculum</h3>
                                <p>The tech industry evolves rapidly. Our curriculum is continually updated to reflect the latest trends, tools, and technologies.</p>
                            </div>
                            <div className="why">
                                <h3>Career Pathways</h3>
                                <p>Gatech programs open doors to exciting career opportunities. Whether you're looking to launch a new career or advance in your current one, our training programs provide the skills employers seek.</p>
                            </div>
                            <div className="why">
                                <h3>Supportive Community</h3>
                                <p>At Gatech Academy, you're not just a student — you're part of a supportive community of tech enthusiasts, learners, and innovators. Our instructors and staff are here to support you every step of the way, from enrollment to graduation and beyond.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="statements_wrapper">
                    <section className="statements constraint">
                        <div className='bg-vision'>
                            <h3>Our <span>Vision</span></h3>
                        </div>
                        <div className='bg-green'>
                            <p>Our vision is to be a global leader in tech education, known for our commitment to excellence,
                                innovation, and student success. We aspire to empower individuals from all walks of life to unlock
                                their full potential and make a positive impact in the world through technology.</p>
                        </div>
                        <div className='last bg-mission'>
                            <h3>Our <span>Mission</span></h3>
                        </div>
                        <div className='bg-blue'>
                            <p>Our mission at Gatech Academy is to provide accessible and comprehensive tech training programs
                                that enable individuals to achieve their career goals and thrive in the digital age. We are
                                committed to fostering a supportive learning environment where students can grow, innovate,
                                and excel.</p>
                        </div>
                    </section>
                </div>
                <div className="journey_wrapper">
                    <section className="journey">
                        <div>
                            <h2>Join us on a journey of <span>growth</span> and <span>exploration</span></h2>
                            <p>The tech industry is booming, and it shows no signs of slowing down. At Gatech, we prepare you to
                                thrive in this dynamic field. Our training programs are your gateway to a tech-driven world filled
                                with endless possibilities. Your future as a tech leader starts here.</p>
                        </div>
                        <Button eClass="register" href="/register#top" name="Enroll Now" />
                    </section>
                </div> 
            </div>
        </PageTemplate>
    )
}