import { HashLink as Link } from 'react-router-hash-link'
import './Button.scss'

export function Button({clickHandler, eClass, href, icon, name}) {
    return (
        <Link smooth to={href} onClick={clickHandler} className={"button " + eClass}>{icon ? <img className="icon" src={icon} />: null}{name}</Link>
    )
}

export function ActionButton({clickHandler, eClass, func, icon}) {
    return (
        <button className={`action-button ${eClass}`} onClick={clickHandler}><img className="icon" src={icon} alt={func}/></button>
    )
}