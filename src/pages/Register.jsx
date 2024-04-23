import { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import '../assets/styles/registerPage.scss'

export default function Register() {
    const stepOne = useRef()
    const stepTwo = useRef()
    const stepThree = useRef()

    const steps = [
        [(
            <>
                <h2>Personal Info</h2> 
                <p className='description'>Enter your Personal Information Correctly</p>
                <div>
                    <label htmlFor='fname'>First Name</label>
                    <input name="First Name" id="fname" type="text" placeholder="e.g Uthman" />
                </div>
                <div>
                    <label htmlFor='lname'>Last Name</label>
                    <input name="Last Name" id="lname" type="text" placeholder="e.g Giwa" />
                </div>
                <div className="date">
                    <label htmlFor=''>Date of Birth</label>
                    <div>
                        <input name="DOB" id="dob" type="text" placeholder="DD" />
                        <input name="MOB" id="mob" type="text" placeholder="MM" />
                        <input name="YOB" id="yob" type="text" placeholder="YYYY" />
                    </div>
                </div>
                <input className="register" type="button" onClick={() => {
                    stepOne.current.classList.remove('active-step')
                    stepTwo.current.classList.add('active-step')
                    }} value="Next Step" />
            </>
        )],
        [(
            <>
                <h2>Contact Info</h2>
                <p className='description'>Enter your Contact Information Correctly</p>
                <div>
                    <label htmlFor='phone'>Phone</label>
                    <input name="Phone number" id="phone" type="tel" placeholder="e.g 0705 954 2345" />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name="Email" id="email" type="email" placeholder="e.g hello@world.com" />
                </div>
                <div className='address'>
                    <label htmlFor='address'>Address</label>
                    <textarea name="Address" id="address" cols="30" rows="10"></textarea>
                </div>
                <input className="register" type="button" onClick={() => {
                    stepTwo.current.classList.remove('active-step')
                    stepThree.current.classList.add('active-step')
                }} value="Next Step" />
            </>
        )],
        [(
            <>
                <h2>Admission</h2>
                <p className='description'>Enter your Contact Information Correctly</p>
                <div>
                    <label htmlFor='courses'>Select a Course</label>
                    <select name="Courses" id="courses">
                        <option value="Full Stack Development">Full Stack Web Development</option>
                        <option value="Front-end Development">Front-end Web Development</option>
                        <option value="Back-end Development">Back-end Web Development</option>
                        <option value="Graphics Design"> Graphics Design</option>
                        <option value="Advanced Graphics Design"> Advanced Graphics Design</option>
                        <option value="Data Analysis"> Data Analysis</option>
                        <option value="IT Admin"> IT Admin</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='qualification'>Highest Level of Education</label>
                    <select name="Qualification" id="qualification">
                        <option value="O' Level">O' Level</option>
                        <option value="ND/OND">ND/OND</option>
                        <option value="HND">HND</option>
                        <option value="BSc">BSc</option>
                        <option value="Masters">Masters</option>
                    </select>
                </div>
                <div className='radios'>
                    <p className='sublabel'>Tech Journey</p>
                    <div>
                        <input type="radio" name="Tech Phase" id="beginner" value="Beginner" />  
                        <label htmlFor="beginner" labels="radio">Beginner</label>
                    </div>
                    <div>
                        <input type="radio" name="Tech Phase" id="amateur" value="Amateur" /> 
                        <label htmlFor="amateur" labels="radio">Amateur</label>
                    </div>
                    <div>
                        <input type="radio" name="Tech Phase" id="expert" value="Expert" /> 
                        <label htmlFor="expert" labels="radio">Expert</label>
                    </div>
                </div>
                <div className='radios'>
                    <p className='sublabel'>How do you prefer to learn</p>
                    <div>
                        <input type="radio" name="Preference" id="hands-on" value="Hands-on Projects" /> 
                        <label htmlFor="hands-on" labels="radio">Hands-on Projects</label>
                    </div>
                    <div>
                        <input type="radio" name="Preference" id="theoretical" value="Theoretical Concepts" /> 
                        <label htmlFor="theoretical" labels="radio">Theoretical Concepts</label>
                    </div>
                    <div>
                        <input type="radio" name="Preference" id="discussions" value="Group Discussions" /> 
                        <label htmlFor="discussions" labels="radio">Group Discussions</label>
                    </div>
                </div>
                <div className='radios'>
                    <p className='sublabel'>Payment Plan</p>
                    <div>
                        <input type="radio" name="Payment Plan" id="full" value="Full Payment" /> 
                        <label htmlFor="full" labels="radio">Full Payment</label>
                    </div>
                    <div>
                        <input type="radio" name="Paymant Plan" id="half" value="Half Payment" /> 
                        <label htmlFor="half" labels="radio">Half Payment</label>
                    </div>
                </div>
                <div className='flex'>
                    <input name="Accept Terms" id="accept-terms" value="true" type="checkbox" required />
                    <label htmlFor="accept-terms">By checking this box, you have read and agreed with Gatech Academy's
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQWb6r_cxzKnb3Nq9rYHYshDYa2XQ-frnIfatlA4AO1EcDMADmlfb6Mw1_0_DKn0g/pub"
                        className="text-primary"> student policy.</a></label>
                </div>
                <p>Got Questions? <a href="" className="text-primary">Chat with Us</a></p>
                <input className="register" type="submit" value="Submit" />
            </>
        )]
    ] 
    
    return (
        <>
            <div className="container">
                <div className="image-side">
                </div>  
                <div className="form-box">
                    <HashLink to="/" className='text-primary'>Back to Home</HashLink>
                    <form action="https://formspree.io/f/mayrapwe" method="POST">
                        <div className="step-container active-step" ref={stepOne}>
                            {steps[0]}
                        </div>
                        <div className="step-container" ref={stepTwo}>
                            {steps[1]}
                        </div>
                        <div className="step-container" ref={stepThree}>
                            {steps[2]}
                        </div>
                    </form>
                </div> 
            </div>
        </>   
    )
}