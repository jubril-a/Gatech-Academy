import { HashLink } from 'react-router-hash-link'
import facebook from '/icons/facebook.svg'
import linkedin from '/icons/linkedin.svg'
import instagram from '/icons/instagram.svg'
import whatsapp from '/icons/whatsapp.svg'
import './Footer.scss'

export default function Footer() {
    return (
        <footer>
            <p>2024 &copy; Gatech. All rights reserved</p>
                <nav>
                    <li><HashLink to="/contact">Contact</HashLink></li>
                    <li><HashLink to="/contact">FAQ</HashLink></li>
                    <li><HashLink to="/register#top">Registration</HashLink></li>
                    <li><HashLink smooth to="/#courses">Courses</HashLink></li>
                </nav>
                <ul className="socials">
                    <li><a href="https://web.facebook.com/GatechIntegratedServices/?_rdc=1&_rdr" target="_blank"><img src={facebook} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/company/gatech-integrated/" target="_blank"><img src={linkedin} alt="" /></a></li>
                    <li><a href="https://www.instagram.com/gatechacademy/" target="_blank"><img src={instagram} alt="" /></a></li>
                    <li><a href="https://wa.me/2348184906041" target="_blank"><img src={whatsapp} alt="" /></a></li>
                </ul>
        </footer>
    )
}