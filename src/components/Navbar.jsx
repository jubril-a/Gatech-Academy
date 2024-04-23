import { HashLink as Link } from 'react-router-hash-link'
import { Button } from './Button'
import Hamburger from 'hamburger-react'
import gatechLogo from '/logo.png'
import registerIcon from '/icons/register2.svg'
import homeIcon from '/icons/home.svg'
import coursesIcon from '/icons/courses.svg'
import contactIcon from '/icons/contact.svg'
import faqIcon from '/icons/faq.svg'
import { useState } from 'react'
import './Navbar.scss'

export default function Navbar({page}) {
    const [isOpen, setOpen] = useState(false)

    function controlMenu() {
        console.log(isOpen)
        if (isOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <header>
            <nav data-expanded={isOpen}>
                <div className="logo">
                    <img src={gatechLogo} alt="Gatech Logo" />
                </div>
                <div className="navlinks">
                    <Button eClass={page == "Home" ? "navlink active" : "navlink"} icon={homeIcon} name="Home" href="/#top"/>
                    <div className="course-nav">
                        <Button eClass={page == "Courses" ? "navlink active course-link" : "navlink course-link"} icon={coursesIcon} name="Courses" href="/#courses"/>
                        <div className="dropdown">
                            <span></span>
                            <Link to="/courses/frontend/#top">Frontend Development</Link>
                            <Link to="/courses/data analysis/#top">Data Analysis</Link>
                            <Link to="/courses/graphics/#top">Graphic Design</Link>
                            <Link smooth to="/#courses">See all courses</Link>
                        </div> 
                    </div>
                    <Button eClass={page == "Contact" ? "navlink active" : "navlink"} icon={contactIcon} name="Contact"  href="/contact#top"/>
                    <Button eClass="navlink" icon={faqIcon} name="FAQ"  href="/contact#faq"/>
                    <Button eClass="navlink eRegister" icon={faqIcon} name="Register"  href="/register"/>
                </div>
                <div className="navButton">
                    <Button eClass="register" icon={registerIcon} name="Register"  href="/register"/>
                    <div className="burger"  onClick={controlMenu}>
                        <Hamburger />
                    </div>
                </div>
                
            </nav>
        </header>
        
    )
}