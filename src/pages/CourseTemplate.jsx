import { useRef } from 'react';
import { useParams } from 'react-router-dom'
import PageTemplate from "./PageTemplate";
import CourseHero from "../components/CourseHero"
import ModuleTemplate from "../components/ModuleTemplate";
import { Button } from '../components/Button'
import registerIcon from '/icons/register2.svg'
import '../assets/styles/Course.scss'

const programme = [
    {
        id: "Month ",
        title: "",
        topics: [
            "",
            "",
            "",
            "",
            "",
            ""],
    },
]

const syllabus = {
    frontend: [
        {
            id: "Month 1",
            title: "Introduction to Web Development and Frontend Basics",
            topics: [
                "Introduction to Web Development and Full Stack Architecture",
                "HTML5: Structuring Web Content",
                "CSS3: Styling and Layouts",
                "Introduction to Responsive Web Design",
                "JavaScript Fundamentals: Variables, Data Types, Control Structures",
                "Document Object Model Manipulation"],
        },
        {
            id: "Month 2",
            title: "Advanced Frontend Development",
            topics: [
                "Advanced CSS Techniques: Flexbox, Grid, CSS Preprocessors (e.g., SASS)",
                "Introduction to Version Control using Git and GitHub",
                "Dynamic Websites and Javascript code Organization",
                "Event Handling and Asynchronous Programming",
                "Introduction to Frontend Frameworks: React.js",
                "Building Interactive User Interfaces with React.js"],
        },
        {
            id: "Month 3",
            title: "Advanced Concepts and Final Projects",
            topics: [
                "Web Application Architecture Patterns: Microservices, Serverless",
                "Real-time Web Applications using WebSockets",
                "Introduction to GraphQL",
                "Advanced Frontend State Management",
                "Final Group Projects: Full Stack Web Applications",
                "Project Deployment and Showcase"],
        },
    ],
    "data analysis": [
        {
            id: "Module 1",
            title: "DATA ANALYSIS WITH EXCEL",
            topics: [
                "Excel Pro Tips for Power Users and Advanced Excel Formulas & Functions",
                "Structuring Source Data for Analysis in Excel",
                "Excel tables and Excel Formulas",
                "Data Analysis with Excel Pivot Tables",
                "Using pivot tables and pivot charts to create dashboards",
                "Pivot Charts, slicers & timelines"],
        },
        {
            id: "Module 2",
            title: "PIVOT TABLES FOR ADVANCED CALCULATIONS",
            topics: [
                "Explore the power of Pivot Table",
                "Filter pivot table data to achieve interesting subsets of the data",
                "Apply calculated fields with pivot tables, Calculate profitability and find anomalies",
                "Using formulas to aggregate data",
                "Aggregate data as an alternative to pivot tables",
                "Flexible reporting layouts and Pivot charts using more than one table"],
        },
        {
            id: "Module 3",
            title: "LAB ENVIRONMENT & INSTALLATIONS",
            topics: [
                "Set the lab environment up with Office applications",
                "Data analysis in Excel using tools: pivot tables, pivot charts and slicers",
                "Excel data models",
                "Power Pivot add-in",
                "DAX expressions for calculated columns and measures",
                "Introduction to queries"],
        },
        {
            id: "Module 4",
            title: "QUERIES",
            topics: [
                "Power Query for Excel 2010 and 2013",
                "Excel data model built from a single flat table",
                "Import multiple tables from a SQL database",
                "Create an Excel data model using imported data",
                "Create a collated result with data from text-files and data from a SQL database",
                "PUp & running with Power BI Desktop"],
        },
        {
            id: "Module 5",
            title: "DATA FILTERS & MEASURES",
            topics: [
                "Publishing to Power BI Service",
                "SQL database analysis for beginners",
                "How to establish measures to calculate each cell",
                "Filter context for calculation",
                "Enhanced queries to import data from a formatted Excel sheet",
                "Queries beyond the standard user interface"],
        },
        {
            id: "Module 6",
            title: "DATA VISUALISATIONS",
            topics: [
                "Data visualisations in Excel",
                "Cube functions for year-over-year comparisons",
                "Create timelines, hierarchies, and slicers",
                "Excel working together with Power BI",
                "Excel workbooks with Power BI service",
                "Excel on the mobile platform"],
        },
    ],
    graphics: [
        {
            id: "Month 1",
            title: "Getting Started with Adobe Photoshop",
            topics: [
                "Introduction to Adobe Photoshop",
                "Essential tools and their functions (selection tools, brush tools, etc.)",
                "Working with layers and blending modes",
                "Image Editing",
                "Cropping, resizing, and transforming images"],
        },
        {
            id: "Month 2",
            title: "Photoshop Techniques",
            topics: [
                "Typography and Text Effects",
                "Working with text layers, fonts, and styles",
                "Creating text effects like gradients, shadows, and warping",
                "Photo Retouching and Special Effects",
                "Retouching portraits (blemish removal, skin smoothing, etc.)",
                "Applying filters and special effects (e.g., HDR, tilt-shift)"],
        },
        {
            id: "Month 3",
            title: "Introduction to CorelDraw",
            topics: [
                "CorelDraw Basics",
                "Introduction to CorelDraw interface",
                "Working with shapes, lines, and text",
                "Vector Graphics and Illustrations",
                "Final Projects and Portfolio Development"],
        },
    ],
    fullstack: [
        {
            id: "Month 1",
            title: "Introduction to Web Development and Frontend Basics",
            topics: [
                "Introduction to Web Development and Full Stack Architecture",
                "HTML5: Structuring Web Content",
                "CSS3: Styling and Layouts",
                "Introduction to Responsive Web Design",
                "JavaScript Fundamentals: Variables, Data Types, Control Structures",
                "Document Object Model Manipulation"],
        },
        {
            id: "Month 2",
            title: "Advanced Frontend Development",
            topics: [
                "Advanced CSS Techniques: Flexbox, Grid, CSS Preprocessors (e.g., SASS)",
                "Introduction to Version Control using Git and GitHub",
                "Dynamic Websites and Javascript code Organization",
                "Event Handling and Asynchronous Programming",
                "Introduction to Frontend Frameworks: React.js",
                "Building Interactive User Interfaces with React.js"],
        },
        {
            id: "Month 3",
            title: "Backend Development Fundamentals",
            topics: [
                "Introduction to Backend Development and Server-side Programming",
                "Setting Up Development Environment: Node.js and Express.js",
                "Handling HTTP Requests and RESTful APIs",
                "Working with Databases: Introduction to SQL and Databases (e.g., MySQL)",
                "User Authentication and Authorization",
                "Introduction to Testing: Unit and Integration Testing"],
        },
        {
            id: "Month 4",
            title: "Advanced Backend Development",
            topics: [
                "More Advanced Express.js: Middleware, Error Handling, Routing",
                "Database Design and Advanced Queries",
                "Introduction to NoSQL Databases (e.g., MongoDB)",
                "User Authentication with JWT (JSON Web Tokens)",
                "Introduction to Caching and Performance Optimization",
                "Integrating Backend with Frontend: Consuming APIs"],
        },
        {
            id: "Month 5",
            title: "Deployment, DevOps, and Cloud Services",
            topics: [
                "Introduction to DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
                "Deployment Strategies: Heroku, AWS, or Azure",
                "Containerization and Docker",
                "Introduction to Cloud Services: AWS Lambda, S3, Firebase",
                "Monitoring and Logging: Introduction to Application Performance Management (APM)",
                "Security Best Practices: HTTPS, Data Protection, OWASP Top Ten"],
        },
        {
            id: "Month 6",
            title: "Advanced Concepts and Final Projects",
            topics: [
                "Web Application Architecture Patterns: Microservices, Serverless",
                "Real-time Web Applications using WebSockets",
                "Introduction to GraphQL",
                "Advanced Frontend State Management",
                "Final Group Projects: Full Stack Web Applications",
                "Project Deployment and Showcase"],
        },
    ],
    backend: [
        {
            id: "Month ",
            title: "",
            topics: [
                "",
                "",
                "",
                "",
                "",
                ""],
        },
    ],
    "it admin": [
        {
            id: "Month 1",
            title: "Foundations of IT Administration",
            topics: [
                "Introduction to IT Admin and Organizational Significance",
                "Computer Components and Operating Systems",
                "Software Installation and Configuration",
                "Basic Troubleshooting Skills"],
        },
        {
            id: "Month 2",
            title: "Networking and Infrastructure Management",
            topics: [
                "Networking Fundamentals and TCP/IP Protocols",
                "Router, Wi-Fi, and Network Configuration",
                "Server Platform Installation and Configuration",
                "Remote Support with TeamViewer"],
        },
        {
            id: "Month 3",
            title: "Advanced Topics and Practical Applications",
            topics: [
                "Introduction to Biometric Systems and Security",
                "Customer Service and Communication Skills",
                "Supporting Network Infrastructure and Troubleshooting",
                "Capstone Project: Design and Implement a Small Network"],
        },
    ],
    "advanced graphics": [
        {
            id: "Month 1",
            title: "Mastering Adobe Illustrator",
            topics: [
                "Advanced Illustrator Tools and Techniques",
                "Vector Illustration and Complex Artwork",
                "Advanced Illustration Techniques",
                "Icon and Logo Design"],
        },
        {
            id: "Month 2",
            title: "Advanced Layout Design with Adobe InDesign",
            topics: [
                "InDesign Essentials and Page Layout",
                "Mastering Styles, Tables, and Interactive Elements",
                "Publication Design and Typography",
                "Packaging Design and Print Preparation"],
        },
        {
            id: "Month 3",
            title: "Composition & Techniques and Portfolio Development",
            topics: [
                "Photo composition and Advanced Filters",
                "Mockups and Presentation Skills",
                "Final Projects and Portfolio Development"],
        },
    ],
}


export default function CourseTemplate() {
    const { id } = useParams()
    let course_info = syllabus[id]
    const Modules = useRef(null)

    function activeControl() {
        Modules.current.children[0].classList.add('active-modules')
    }

    return (
        <PageTemplate currentPage="Courses">
            <div id="top" className="hero-wrapper">
                <CourseHero course={id} />
            </div> 
            <section className="syllabus course-constraint">
                <h2>Take a Look at Our <span className="bold">Curriculum</span></h2>
                <div className="modules-container" ref={Modules} onLoad={activeControl}>
                    {
                        course_info.map(item => (
                            <ModuleTemplate {...item} key={item.id} />
                        ))
                    }
                </div>
                <Button eClass="register" icon={registerIcon} name="Enroll Today"  href="/register"/>
            </section>
        </PageTemplate>
    )
}