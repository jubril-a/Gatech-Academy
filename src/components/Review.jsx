import { ActionButton } from './Button'
import arrowHead from '/icons/arrowhead.svg'
import { useRef } from 'react'
import './Review.scss'
import { useState } from 'react'

const reviews = [
    [
        "Gatech Academy changed my life. Before enrolling, I felt stuck in my career, but their Data Analysis course gave me the skills and confidence to pursue my passion. The instructors weren't just teachers; they were mentors who believed in me every step of the way. Thanks to Gatech, I'm now thriving in a career I love!",
        "Sulaimon Agbaje",
        "Data Analysis"
    ],
    [
        "I've never felt more confident in my skills than after completing Gatech Academy's Full-Stack Development course. The hands-on projects pushed me out of my comfort zone and prepared me for the challenges of the real world. Gatech didn't just teach me how to code; they taught me how to think like a developer. I can't thank them enough",
        "Dolapo Adelu",
        "Full-Stack Development"
    ],
    [
        "Gatech Academy's Graphic Design course was a game-changer for me. As someone with a passion for design but no formal training, I was blown away by the support and encouragement I received from the instructors. They saw potential in me that I didn't even know existed. Thanks to Gatech, I'm now pursuing my dream career in graphics design.",
        "Adenike Adebayo",
        "Graphic Design"
    ],
    [
        "I was still determining what path to take after secondary school, but Gatech helped me discover my passion for graphic design through their student advisor program. The hands-on projects and real-world applications taught me more than I ever thought possible. I am currently in university and earning as a freelance Graphic designer.",
        "Funke Adegbemi",
        "Graphic Design"
    ],
    [
        "Gatech Academy isn't just a school; it's a family. The instructors and staff genuinely care about your success, and they'll do everything in their power to help you achieve your goals. Thanks to Gatech, I've not only gained valuable skills but also lifelong friends and mentors. I couldn't have asked for a better experience.",
        "Ayomide Timileyin",
        "IT Fundamentals"
    ],
    [
        "After years in a different field, I decided to make a career change and landed on front-end web development. Gatech's Frontend Development course was my ticket to this new path. The instructors were patient and knowledgeable, guiding me through the fundamentals of HTML, CSS, and JavaScript. The hands-on projects allowed me to apply my newfound skills immediately. Now, thanks to Gatech, I'm well on my way to a rewarding career in web development.",
        "Ikemefuna Emmanuel",
        "Front-end Development"
    ]
]

function Card({review}) {
    return (
        <div className="review__card">
            <div>
                <p className='review'>"{review[0]}"</p>
            </div>
            <div>
                <p className='reviewer'>{review[1]}</p>
                <span className='reviewer-course'>{review[2]}</span>
            </div>
        </div>
    )
}

export default function Review() {
    const feedbacks = useRef()
    const [pos, setPos] = useState(0)

    function scrollForward() {
        let reviewWidth = feedbacks.current.offsetWidth
        let currentPos = feedbacks.current.scrollLeft
        let position = currentPos + reviewWidth
        feedbacks.current.scrollTo({left: position, behavior: 'smooth'})
    }

    function scrollBackward() {
        let reviewWidth = feedbacks.current.offsetWidth
        let currentPos = feedbacks.current.scrollLeft
        let position = currentPos - reviewWidth
        feedbacks.current.scrollTo({left: position, behavior: 'smooth'})
    }

    return (
        <div className="constraint">
            <div className="slider-nav">
                <h2>Hear What Our Alumni Have to Say</h2>
                <div className="nav">
                    <ActionButton eClass="flip" func="scroll backward" icon={arrowHead} clickHandler={scrollBackward} />
                    <ActionButton func="scroll forward" icon={arrowHead} clickHandler={scrollForward} />
                </div>
            </div>
            <section ref={feedbacks} className="review-section">
                {reviews.map(item => (
                    <Card review={item} key={item[1]} />
                ))}
            </section>
        </div>
    )
}