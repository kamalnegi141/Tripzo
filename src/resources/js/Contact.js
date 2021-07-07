import React, { Component } from 'react';
import contacthome from '../images/Contact/contact.png';
import contactimage from '../images/Contact/contacthome.jpg';
import icon1 from '../images/Contact/icon1.png';
import icon2 from '../images/Contact/whatsapp.svg';
import icon3 from '../images/Contact/icon2.png';
import '../css/Contact.css';

export default class Contact extends Component {
    componentDidMount(){
        if(this.props.location.pathname==='/contact'){
            var contactlink = document.getElementById("contact-link");
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace('active', '');
            contactlink.className += 'active';
        }
    }j
    render() {
        return (
            <section className='contact'>
                <div className='our-service-top' style={{ backgroundImage: `url(${contactimage})` }}>
                    <div className='our-service-intro'>
                        <h1>Contact Us</h1>
                        <p>Tripzo is the authorized seller of Tours &amp; Travel Packages, offering great deals and discounts.</p>
                    </div>
                    <div className='our-service-image'>
                        <img src={contacthome} alt='service'></img>
                    </div>
                </div>
                <div className='contact-bottom'>
                    <div className='contact-container'>
                        <div className='details-container'>
                            <div className='contact-details'>
                                <h1>Get in Touch</h1>
                                <hr />
                                <p>Please fill the form on your right and get in touch with our expert support and team will answer your questions.</p>
                                <div className='details'>
                                    <img src={icon1} alt='contact-icons'></img>
                                    <p>252-E, 1st Floor, Sant Nagar, East of Kailash, New Delhi, Delhi, India 110065</p>
                                </div>
                                <div className='details'>
                                    <img src={icon2} alt='contact-icons'></img>
                                    <div className='icon'>
                                        <span>Whatsapp Us:</span>
                                        <p>+91 1234567890</p>
                                    </div>
                                </div>
                                <div className='details'>
                                    <img src={icon3} alt='contact-icons'></img>
                                    <div className='icon'>
                                        <span>E-mail Us:</span>
                                        <p>info@tripzo.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='details-container'>
                            <div className='form-container'>
                                <form className='contact-form'>
                                    <h2>Drop us a line</h2>
                                    <input type='text' placeholder='Name'></input>
                                    <input type='email' placeholder='E-mail'></input>
                                    <input type='number' placeholder='Contact/Whatsapp Number'></input>
                                    <textarea cols='10' rows='5' placeholder='Message'></textarea>
                                    <button className='message'>Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
