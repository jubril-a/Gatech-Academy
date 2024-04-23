import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PageTemplate({children, currentPage}) {
    return (
        <>
            <Navbar page={currentPage}/>
            {children}
            <div className="footer-wrapper">
                <Footer />
            </div>
        </>    
    )
}