import { useRef } from 'react'
import './alert.scss'
import cancelIcon from '/icons/cancel.svg'

export default function Alert({heading, info, type, state}) {
    // type can be informational, success, error, tip, .... 
    const alertBox = useRef()

    function closeHandler() {
        alertBox.current.style.display = "none"         
    }

    return (
        <div ref={alertBox} className={`alert ${type}`}>
            <div className="head">
                <span className="alert__heading">{heading}</span>
                <img src={cancelIcon} alt="" onClick={closeHandler} />
            </div>
            
            <span className="alert__info">{info}</span>
        </div>
    )
}