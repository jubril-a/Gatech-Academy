import './Factor.scss'

export default function Factor() {
    return (
        <section className="factor constraint">
                <div className='content'>
                    <h2>What Sets us Apart:</h2>
                    <h3><span>Soft Skills</span> Development</h3>
                    <p className='skill-description'>Through interactive workshops and practical exercises, we empower our students to communicate effectively, collaborate efficiently, and adapt swiftly, ensuring they emerge as well-rounded professionals ready to excel in any environment.</p>
                </div>
                <div>
                    <div className="img overlay-content">
                        <img src="/images/softskills.jpg" alt="" />
                        <div className="soft-icons bounce">
                            <img src="/icons/communication.png" alt="" className='left' />
                            <img src="/icons/networking.png" alt="" className='right' />
                            <img src="/icons/teamwork.png" alt="" className='bottom' />
                            <img src="/icons/timemgt.png" alt="" className='top' />
                        </div>
                    </div>   
                </div>
        </section>
    )
}