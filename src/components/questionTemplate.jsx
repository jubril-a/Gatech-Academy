import { useRef } from "react";
import Caret from '/icons/caret-black.svg'


export default function QuestionTemplate({qstn, answr}) {
    const question = useRef()

    function dropAnswer({target}) {
        console.log(question)
        if (question.current.classList.contains('active-question')) {
            question.current.classList.remove('active-question')
        } else {
            question.current.classList.add('active-question')
        }
    }

    return (
        <div className="question" ref={question} onClick={dropAnswer}>
            <div className="question-head">
                <h3>{qstn}</h3>
                <img src={Caret} alt="" />
            </div>
            <div className="answer">
                <p>{answr}</p>
            </div>
        </div>
    )
}