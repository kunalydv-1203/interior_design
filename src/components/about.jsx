import '../css/about.css'

import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    return(
        <>
            <div className="about_body">
                <div className="section_five">
                    <div className="txt">
                        <h1 id="head_three">Welcome to ICrave Creations</h1>
                        <p id="para_four">
                            Elevate your living spaces with our team of talented designers.We specialize in creating beautiful and functional interiors that reflect your unique style 
                        </p>
                        <button id='btn_three' onClick={() =>{navigate('/contact')}}> Get in Touch </button>
                    </div>
                </div>

                <div className="section_six">
                    <h1  id="head_two">Meet Our Talented Team</h1>
                    <p id="para_five">Our team of designers, architects, and project managers are passionate about creating exceptional spaces that exceed our client's expectatons.</p>
                    <div className="team_card">
                        <div className="profile_card">
                            <img src="http://localhost:3000/prs1.jpeg" alt="pic" />

                            <h3 className='prf_name'>Jane Doe</h3>

                            <h5 className='prf_post'>Lead Designer</h5>

                            <p id="prf_exp">Jane has over 10 years of experience in the interior design industry, specializing in creating modern and sustainable spaces.</p>
                        </div>
                        <div className="profile_card">
                        <img src="http://localhost:3000/prs2.jpeg" alt="pic" />

                        <h3 className='prf_name'>Jhon Smith</h3>


                        <h5 className='prf_post'>Senior Designer</h5>

                        <p id="prf_exp">
                        John has a keen eye for detail and a passion for creating functional and visually stunning spaces.
                        </p>
                        </div>
                        <div className="profile_card">
                        <img src="http://localhost:3000/prs3.jpeg" alt="pic" />

                        <h3 className='prf_name'>Sarah Lee</h3>


                        <h5 className='prf_post'>Project Manager</h5>

                        <p id="prf_exp">
                        Sarah ensures that every project is executed seamlessly, from initial consultation to final installation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section_seven">
                    <h1  id="head_two">What's Make's Us Better?</h1>
                    <div className="team_card">
                        <div className="skills">
                          <img src="http://localhost:3000/s1.webp" alt="pic" />
                          <h5 className='prf_post'>Home Styling</h5>
                        </div>
                        <div className="skills">
                          <img src="http://localhost:3000/s2.webp" alt="pic" />
                          <h5 className='prf_post'>Full Interior Styling </h5>
                        </div>
                        <div className="skills">
                           <img src="http://localhost:3000/s3.webp" alt="pic" />
                           <h5 className='prf_post'>Small Space Makeover</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About