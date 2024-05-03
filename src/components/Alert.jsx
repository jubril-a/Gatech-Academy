import './alert.scss'
import cancelIcon from '/icons/cancel.svg'

export default function Alert({heading, info, type, clickHandler}) {
    // type can be informational, success, error, tip, .... 

    return (
        <div className={`alert ${type}`}>
            <div className="head">
                <span className="alert__heading">{heading}</span>
                <img src={cancelIcon} alt="" onClick={clickHandler} />
            </div>
            
            <span className="alert__info">{info}</span>
        </div>   
    )
}