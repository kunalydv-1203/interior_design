import '../css/footer.css'
import { useNavigate } from 'react-router-dom'

const  Footer = () => {
    const navigate = useNavigate();
    return(
        <>
            <footer>
                <div className="footer_section">
                    <p className="fhead">
                    Quick Links
                    </p>

                    <p className="flinks" onClick={() => { navigate('/')}}>Home</p>
                    <p className="flinks" onClick={() => { navigate('/aboutus')}}>About Us</p>
                    <p className="flinks" onClick={() => { navigate('/services')}}> Services </p>
                    <p className="flinks" onClick={() => { navigate('/contact')}}>Contact Us</p>             
                </div>

                <div className="footer_section">
                    <p className="fhead">
                    Social Media Links
                    </p>
                    <p className="flinks">Instagram</p>
                    <p className="flinks">Facebook</p>
                    <p className="flinks"> Pinterest </p>
                    <p className="flinks">LinkedIn</p> 
                    
                </div>

                <div className="footer_section">
                    <p className="fhead">
                    Contact Information
                    </p>

                    <p>ICrave Creations</p>
                    <p>21B, Sukhdev Vihar, Masihgarh,<br /> Okhla, New Delhi, Delhi 110025</p>
                    <p>011 3566 9540</p>
                    <p>icrave@gmail.com</p>

                </div>

              
            </footer>
        
           
        </>
    )
}

export default  Footer