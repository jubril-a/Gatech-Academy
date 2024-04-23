import { useRef } from 'react'
import './ModuleTemplate.scss'
import Caret from '/icons/caret.svg'

export default function ModuleTemplate({id, title, topics}) {

    function dropControl() {
        if (activeModules.current.classList.contains('active-modules')) {
            activeModules.current.classList.remove('active-modules')
        } else {
            activeModules.current.classList.add('active-modules')
        }
    }

    const activeModules = useRef(null)
   
    return (
        <div className="modules" ref={activeModules} onClick={dropControl}>
            <div className='module__head'>
                <div>
                    <span>{id}</span>
                    <h3>{title}</h3>
                </div>
                <div>
                    <img src={Caret} alt="" />
                </div>
            </div>
            <ul className='module__content'>
                {
                    topics.map(topic => (
                        <li>{topic}</li>
                    ))
                }
            </ul>
        </div>
    )
}