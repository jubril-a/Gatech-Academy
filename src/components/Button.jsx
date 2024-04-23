import { HashLink as Link } from 'react-router-hash-link'
import './Button.scss'

export function Button({eClass, href, icon, name}) {
    return (
        <Link smooth to={href} className={"button " + eClass}><img className="icon" src={icon} />{name}</Link>
    )
}

export function ActionButton({clickHandler, eClass, func, icon}) {
    return (
        <button className={`action-button ${eClass}`} onClick={clickHandler}><img className="icon" src={icon} alt={func}/></button>
    )
}