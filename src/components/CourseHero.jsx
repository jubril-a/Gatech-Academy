import { Button } from './Button'
import registerIcon from '/icons/register2.svg'
import './CourseHero.scss'

/*
course: {
        "course_name": ["", ""],
        "description": "",
        "amount": "",
        "duration": "",
        "image_name": "",
        "image_description": "",
        "icon_urls": ["", "", "", ""],
    },
*/

const courses = {
    "fullstack": {
        "course_name": ["Full Stack", "Web Development"],
        "description": "From front-end aesthetics to back-end functionality, our comprehensive curriculum equips you with the skills to craft dynamic, interactive websites and robust applications.",
        "amount": "N300, 000",
        "duration": "6 Months",
        "image_name": "fullstack.jpg",
        "image_description": "",
        "icon_urls": ["git.png","node.png","react.png","javascript.png"],
    },
    "frontend": {
        "course_name": ["Frontend", "Web Development"],
        "description": "Dive headfirst into the captivating realm of Frontend Development. Unleash your creativity as you master the building blocks of the web – HTML, CSS, and JavaScript.",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "frontend.jpg",
        "image_description": "",
        "icon_urls": ["html.png", "javascript.png", "react.png", "git.png"],
    },
    "backend": {
        "course_name": ["Backend", "Web Development"],
        "description": "Delve into the intricacies of server-side programming as you master languages like Node.js and SQL",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "backend.jpg",
        "image_description": "",
        "icon_urls": ["node.png", "", "", ""],
    },
    "it admin": {
        "course_name": ["IT", "Admin"],
        "description": "Throughout the program, you'll gain practical skills, hands-on experience, and the confidence to tackle real-world IT challenges.",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "it-admin.jpg",
        "image_description": "",
        "icon_urls": ["", "", "shell.png", ""],
    },
    "advanced graphics": {
        "course_name": ["Advanced", "Graphic Design"],
        "description": "This program serves as your advanced toolkit, honing your creativity and equipping you with the skills to breathe life into intricate visual concepts.",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "a-graphics.jpg",
        "image_description": "",
        "icon_urls": ["", "", "", ""],
    },
    "graphics": {
        "course_name": ["Graphic", "Design"],
        "description": "From conceptualization to execution, you'll master the art of crafting stunning visuals that effectively communicate messages.",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "graphics.jpg",
        "image_description": "",
        "icon_urls": ["", "photoshop.png", "", ""],
    },
    "data analysis": {
        "course_name": ["Data", "Analysis"],
        "description": "Equip yourself with the skills needed to unravel insights from data, make data-driven decisions, and propel businesses forward.",
        "amount": "N150, 000",
        "duration": "3 Months",
        "image_name": "data.jpg",
        "image_description": "",
        "icon_urls": ["excel.png", "python.png", "powerbi.png", ""],
    },
}

export default function CourseHero({ course }) {
    let {course_name,
        description,
        amount,
        duration,
        image_name,
        image_description,
        icon_urls} = courses[course]

    return (
        <main className='course-main course-constraint'>
            <div>
                <div className="course-info">
                    <h1><span className='text-primary'>{course_name[0]} </span>{course_name[1]}</h1>
                    <p className="course-description">{description}</p>
                    <Button eClass="register" icon={registerIcon} name="Register"  href="/register#top"/>
                </div>
                <div className='e-info'>
                    <p className='border-right'>
                        <span className='text-grey'>Fee</span>
                        <span className='price'>{amount}</span>
                    </p>
                    <p className='padding-left'>
                        <span className='text-grey'>Duration</span>
                        <span className='price'>{duration}</span>
                    </p>
                </div>
            </div>
            <div className="course-image overlay-content">
                <img className="img" src={`/courses/images/${image_name}`} alt={image_description} />
                <div className="soft-icons bounce">
                    <img src={`/icons/${icon_urls[0]}`} alt="" className='top' />
                    <img src={`/icons/${icon_urls[1]}`} alt="" className='right' />
                    <img src={`/icons/${icon_urls[2]}`} alt="" className='left' />
                    <img src={`/icons/${icon_urls[3]}`} alt="" className='bottom' />
                </div>
            </div>
        </main>
    )
}