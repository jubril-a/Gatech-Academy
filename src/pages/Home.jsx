import PageTemplate from "./PageTemplate";
import {
    HeroBackground,
    HeroContent,
    IconContainer
  } from '../components/Hero'
import Slider from "../components/Slider";
import Factor from '../components/Factor'
import { Contact } from '../components/Contact'
import { CTA } from '../components/CTA'
import '../assets/styles/Home.scss'

const courses = [
    {
      id: "Frontend",
      title: "Frontend Development",
      image_url: "/courses/frontend.jpg",
      destination_url: "/courses/frontend/#top",
    },
    {
      id: "Data",
      title: "Data Analysis",
      image_url: "/courses/data.jpg",
      destination_url: "/courses/data analysis/#top",
    },
    {
      id: "Graphic",
      title: "Graphic Design",
      image_url: "/courses/graphics.jpg",
      destination_url: "/courses/graphics/#top",
    },
    {
      id: "Fullstack",
      title: "Fullstack Development",
      image_url: "/courses/fullstack.jpg",
      destination_url: "/courses/fullstack/#top",
    },
    {
      id: "Backend",
      title: "Backend Development",
      image_url: "/courses/backend.jpg",
      destination_url: "/courses/backend/#top",
    },
    {
      id: "ITAdmin",
      title: "IT Admin",
      image_url: "/courses/it-admin.jpg",
      destination_url: "/courses/it admin/#top",
    },
    {
        id: "AdvancedGD",
        title: "Advanced Graphic Design",
        image_url: "/courses/a-graphics.jpg",
        destination_url: "/courses/advanced graphics/#top",
      },
]

const features = [
    {
        id: "hybrid",
        title: "Hybrid Training Approach",
        description: "Our hybrid training offers flexibility for busy schedules.",
        image_url: "",
    },
    {
        id: "development",
        title: "Skilled Development",
        description: "Our programs are designed to develop the skills that employers are seeking.",
        image_url: "",
    },
    
    {
        id: "curriculum",
        title: "Industry Relevant Curriculum",
        description: "Our curriculum is carefully crafted to align with industry trends and demands.",
        image_url: "",
    },
    {
        id: "support",
        title: "Personalized Support",
        description: "You'll get full support during and after training, with ongoing access to our tutors.",
        image_url: "",
    },
    {
        id: "projects",
        title: "Hands-on Real-World Projects",
        description: "Our students work on real world projects which hones their technical skills and also cultivates problem-solving abilities.",
        image_url: "",
    },
    {
        id: "instructors",
        title: "Skilled Instructors",
        description: "Each instructor is handpicked for their extensive expertise and dedication to education.",
        image_url: "",
    },
    {
        id: "comfort",
        title: "Comfort",
        description: "The classes offer a comfortable setting with a 56-inch plasma TV for clear visual presentations.",
        image_url: "",
    },
]

export default function Home() {
    return (
        <PageTemplate currentPage="Home">
            <section id="top" className="hero overlay-content">
                <HeroBackground />
                <HeroContent />
                <IconContainer />
            </section>
            <div id="courses" className="courses-wrapper">
                <Slider data={courses} eClass="courses" heading="Available Training Programs"/>
            </div>
            <div className="factor-wrapper">
                <Factor />
            </div>
            <div className="features-wrapper">
                <Slider data={features} eClass="features" heading="Perks of our training"/> 
            </div>
            <div className="contact-wrapper">
                <Contact />
            </div>
            <div className="cta-wrapper">
                <CTA />
            </div>
        </PageTemplate>
    )
}