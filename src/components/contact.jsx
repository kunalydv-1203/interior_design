import '../css/contact.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        name: '',
        mobileno: '',
        email: '',
        msg: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.mobileno || !formData.email || !formData.msg) {
            alert('Input Field can not be Empty.');
            return;
        }
       

        emailjs.send(
            'service_10cypmm', // Replace with your EmailJS service ID
            'template_vldn7j8', // Replace with your EmailJS template ID
            formData,
            '82z_jT9lyv7CYvceb' // Replace with your EmailJS user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
           
            setFormData({
                name: '',
                mobileno: '',
                email: '',
                msg: ''
            });
            alert('Your message has been sended to ICrave Creations. they will reach you as soon as possible.thanks');
            navigate('/');

        }).catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send your message. Please try again.');
        });
    };

    return (
        <>
            <div className="contact_body">
                <div className="section_four">
                    <h1 id="head_two">Get in Touch</h1>
                    <p id="para_three">
                        Our interior design team is excited to hear from you and discuss your project. Fill out the form below and we'll be in touch soon.
                    </p>
                    <form>
                        <div className="d1">
                            <div className="name">
                                <label className='lbl'>Name</label> <br />
                                <input type="text" className='inp1' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Name' required />
                            </div>
                            <div className="email">
                                <label className='lbl'>Mobile No.</label> <br />
                                <input type="number" className='inp1' name='mobileno' value={formData.mobileno} onChange={handleChange} placeholder='Enter Your Mobile No.' required />
                            </div>
                        </div>
                        <div className="d2">
                            <label className='lbl'>Email</label> <br />
                            <input type="email" className='inp2' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' required />
                        </div>
                        <div className="d2">
                            <label className='lbl'>Message</label> <br />
                            <textarea id="msg" name='msg' value={formData.msg} onChange={handleChange} placeholder='Tell us about your Project' required></textarea>
                        </div>
                        <button id='btn_two' onClick={handleSubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
