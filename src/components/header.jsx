import '../css/header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    
    const navigate = useNavigate();
    return(
        <>
        <nav>
            <div className="logo">
                <img src="http://localhost:3000/logo2.jpeg" alt="logo" />
               <div id="logo_name">ICrave Creations</div>
            </div>

            <div className="options">
                <ul>
                    <li onClick={() => { navigate('/')}}>HOME</li>
                    <li onClick={() => { navigate('/aboutus')}}>ABOUT US</li>
                    <li onClick={() => { navigate('/services')}}>SERVICES</li>
                    <li onClick={() => { navigate('/contact')}}>CONTACT US</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header