import { Button } from './Button'
import registerIcon from '/icons/register2.svg'
import './Hero.scss'

export function HeroBackground() {
    return (
        <div className="background">
            <svg className='shadow top-left o-s'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500px" height="180px">
            <path fillRule="evenodd"  fill="rgb(25, 32, 38)"
            d="M-0.000,0.000 L719.000,0.000 L719.000,223.000 L-0.000,223.000 L-0.000,0.000 Z"/>
            </svg>
            <svg className='shadow bottom-right o-r'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500px" height="180px">
            <path fillRule="evenodd"  fill="rgb(25, 32, 38)"
            d="M-0.000,0.000 L719.000,0.000 L719.000,223.000 L-0.000,223.000 L-0.000,0.000 Z"/>
            </svg>
            <svg className='shadow bottom-left o-l'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500px" height="280px">
            <path fillRule="evenodd"  fill="rgb(25, 32, 38)"
            d="M-0.000,0.000 L719.000,0.000 L719.000,223.000 L-0.000,223.000 L-0.000,0.000 Z"/>
            </svg>
            <svg className='shadow top-middle o-s'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500px" height="180px">
            <path fillRule="evenodd"  fill="rgb(25, 32, 38)"
            d="M-0.000,0.000 L719.000,0.000 L719.000,223.000 L-0.000,223.000 L-0.000,0.000 Z"/>
            </svg>
            <svg className='light'
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="311px" height="311px">
                <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
                d="M155.500,-0.000 C241.380,-0.000 311.000,69.620 311.000,155.500 C311.000,241.380 241.380,311.000 155.500,311.000 C69.620,311.000 -0.000,241.380 -0.000,155.500 C-0.000,69.620 69.620,-0.000 155.500,-0.000 Z"/>
            </svg>

        </div>
    )
}

export function IconContainer() {
    return (
        <div className="center-icons">
            <div className="tech-icons bounce">
                <img className="shell" src="/icons/shell.png" alt="" />
                <img className="js" src="/icons/javascript.png" alt="" />
                <img className="react" src="/icons/react.png" alt="" />
                <img className="git" src="/icons/git.png" alt="" />
                <img className="python" src="/icons/python.png" alt="" />
                <img className="ps" src="/icons/photoshop.png" alt="" />
                <img className="node" src="/icons/node.png" alt="" />
                <img className="excel" src="/icons/excel.png" alt="" />
                <img className="html" src="/icons/html.png" alt="" />
            </div>
        </div>
    )
}

export function HeroContent() {

    return (
        <main>
            <h1>Acquire <span className='text-primary'>Job-Ready</span> Tech Skills with Our Dynamic Courses</h1>
            <p className='tagline'>Level up your skills to increase your employability in today's competitive job market</p>
            <Button eClass="register" href="/register" icon={registerIcon} name="Enroll Today" />
        </main>  
    )
}