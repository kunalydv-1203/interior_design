import '../css/home.css'
import { useNavigate } from 'react-router-dom'


const Home = () =>{
    const navigate = useNavigate();
    return(
        <>
           <div className="home_body">

                <div className="section_one">
                    <img src="http://localhost:3000/s2.webp" alt="pic" />

                    <div className="card">

                        <div className="card_text">
                            <h1 id="head_one">
                                DESIGNING SPACES YOU <br /> LOVE 
                            </h1>

                            <p id="para_one">
                                Bring Your Vision to Life
                            </p>

                            <button id='btn_one' onClick={() => { navigate('/aboutus')}}>Learn More</button>
                        </div>

                    </div>

                </div>

                <div className="section_two">

                    <h1 className="heading">
                        OUR  FAVOURITE  PROJECTS
                    </h1>

                    <div className="fav_project">

                        <div className="fab_design">
                           <img src="http://localhost:3000/1.jpg" alt="pic" />
                           
                           <h3 className="prj_heading">
                            Open Concept Workspaces
                           </h3>

                            <p className='prj_para'>
                            This stunning property features an open concept design that allowed us to incorporate many unique details. The surrounding cityscape inspired our color palette, while the furniture placement and decor reflect the modern architecture. If you love this look, we can create a custom design just for you. Contact us today to learn more.
                            </p>
                        </div>
                        
                        <div className="fab_design">
                           <img src="http://localhost:3000/6.jpg" alt="pic" />

                           <h3 className="prj_heading">
                            Modern Office Spaces
                           </h3>

                           <p  className='prj_para'>
                           At this upscale modern space, we created a soft, romantic environment where all guests feel warm and invited. The wonderful mix of lines and curves is now layered into this space's architecture and furnishings. The result is a place of balance and beauty, in harmony with its surroundings. If you love this look, get in touch with us to start designing your dream space today.
                           </p>
                        </div>

                        <div className="fab_design">
                           <img src="http://localhost:3000/9.jpg" alt="pic" />

                           <h3 className="prj_heading">
                          Elegant Living Rooms
                           </h3>

                           <p  className='prj_para'>
                           We dressed up this space with a sleek, sophisticated decor that is ready to impress. The owners of this space sought to retain the architecture but soften its formality. Stylish furnishings and the innovative use of form and color meet the challenge. If you want us to create a space like this for you, contact us today.
                           </p>
                        </div>

                    </div>

                </div>

                <div className="section_three">
                    <h1 className="heading">
                        ICrave Creations : The Essentials
                    </h1>

                    <p id="para_two">
                                Our Commitment to You
                            </p>


                    <p className='esn_para'>
                    Bring your vision to life with ICrave Creations Interior Design. Since 2000, our professional, creative team has been designing the spaces that are most important to you. From our initial consultation to the final finishing touches, we'll provide expert guidance every step of the way. No matter the size of the project, our goal is always the same: to make your personal style shine. We provide new inspiration and ideas, while incorporating elements of your liking into every concept we present. Schedule a consultation with us today and experience the ABC Interior Design difference.</p>
                </div>

           </div>
        </>
    )
}

export default Home