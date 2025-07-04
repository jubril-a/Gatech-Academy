import { HashLink as Link } from 'react-router-hash-link'
import { Button, NavButton } from './Button'
import Hamburger from 'hamburger-react'
import gatechLogo from '/logo.png'
import registerIcon from '/icons/register2.svg'
import faqIcon from '/icons/faq.svg'
import { useRef, useState } from 'react'
import './Navbar.scss'

export default function Navbar({page}) {
    const [isOpen, setOpen] = useState(false)
    const hamburger = useRef()
    const months = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"]
    let date = new Date()
    let month = months[date.getMonth()]


    function controlMenu() {
        console.log(isOpen)
        if (isOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    function closeNav() {
        hamburger.current.children[0].click()
    }

    return (
        <header>
            <div className="rtl">
                {<p>Exclusive Offer!!! Enjoy a 25% discount on all our courses from 1st of {month} to 30th {month}, {date.getFullYear()}</p>}
            </div>
            <nav data-expanded={isOpen} className={'sticky ' + page}>
                <div className="logo">
                    <Link to="/"><img src={gatechLogo} alt="Gatech Logo" /></Link>
                </div>
                <div className="navlinks">
                    <NavButton eClass={page == "Home" ? "navlink active" : "navlink"} name="Home" href="/" clickHandler={closeNav}/>
                    <NavButton eClass={page == "About" ? "navlink active" : "navlink"} name="About" href="/about"  clickHandler={closeNav}/>
                    <div className="course-nav">
                        <NavButton eClass={page == "Courses" ? "navlink active course-link" : "navlink course-link"} name="Courses" href="/#courses" clickHandler={closeNav}/>
                        <div className="dropdown">
                            <span></span>
                            <Link to="/courses/frontend/">Frontend Development</Link>
                            <Link to="/courses/data analysis/">Data Analysis</Link>
                            <Link to="/courses/graphics/">Graphic Design</Link>
                            <Link smooth to="/#courses">See all courses</Link>
                        </div> 
                    </div>
                    <NavButton eClass={page == "Contact" ? "navlink active" : "navlink"} name="Contact"  href="/contact" clickHandler={closeNav} />
                    <NavButton eClass="navlink" icon={faqIcon} name="FAQ"  href="/contact#faq" clickHandler={closeNav}/>
                    <Button eClass="navlink eRegister" name="Register"  href="/register" clickHandler={closeNav}/>
                </div>
                <div className="navButton">
                    <Button eClass="register" icon={registerIcon} name="Register"  href="/register"/>
                    <div ref={hamburger} className="burger"  onClick={controlMenu}>
                        <Hamburger />
                    </div>
                </div>
                
            </nav>
        </header>
        
    )
}