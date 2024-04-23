import { Button } from './Button'
import registerIcon from '/icons/register2.svg'
import './CTA.scss'

export function CTA() {
    return (
        <section className="cta constraint">
            <h2>Level Up Your Skills, Increase Employability, and Prepare for Your Future</h2>
            <p className='subtext'>Start your journey towards a fulfilling tech career today</p>
            <Button eClass="register cta-button" href="/register" icon={registerIcon} name="Join us Today" />
        </section>
    )
}