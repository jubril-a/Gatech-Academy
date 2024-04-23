import { useRef } from 'react'
import { ActionButton } from './Button'
import { Card } from './Card'
import arrowHead from '/icons/arrowhead.svg'
import './Slider.scss'

export default function Slider({data, eClass, heading}) {
    const slider_wrapper = useRef(null)

    function updatePos() {
        let wrapperWidth = slider_wrapper.current.offsetWidth
        let cardWidth = slider_wrapper.current.firstChild.clientWidth
        let increment = Math.floor(wrapperWidth / cardWidth) * cardWidth
        return increment
    }
    
    function scrollForwardFunc() {
        let currentPos = slider_wrapper.current.scrollLeft
        let position = currentPos + updatePos()
        slider_wrapper.current.scrollTo({left: position, behavior: 'smooth'})
    }
    
    function scrollBackFunc() {
        let currentPos = slider_wrapper.current.scrollLeft
        let position = currentPos - updatePos()
        slider_wrapper.current.scrollTo({left: position, behavior: 'smooth'})
    }

    return (
        <>
            <section className="constraint">
                <div className="slider-nav">
                    <h2>{heading}</h2>
                    <div className="nav">
                    <ActionButton eClass="flip" func="scroll backward" icon={arrowHead} clickHandler={scrollBackFunc}/>
                    <ActionButton func="scroll forward" icon={arrowHead} clickHandler={scrollForwardFunc} />
                    </div>
                </div>
                <div ref={slider_wrapper} className={`slider ${eClass}`}>
                {
                data.map(item => (
                    <Card {...item} key={item.title} destination="View Course" eClass={item.id}/>
                ))
                }
                </div>
            </section>
        </>
        
    )
}