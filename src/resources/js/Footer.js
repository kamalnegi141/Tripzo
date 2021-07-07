import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import { FaWpexplorer, FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className="footer-top">
                    <div className='footer-details'>
                        <div className='company-info'>
                            <div className='nav-logo' style={{ margin: '0' }}>
                                <span><FaWpexplorer /></span>
                                <h2>Tripzo</h2>
                            </div >
                            <p>The Mall, Mall Rd, near Muncipal Library, Nainital, Uttarakhand 263002</p>
                            <p className='contact-details'>+91 1234567890</p>
                            <p className='contact-details'>contact@gmail.com</p>
                            <div className='social-links'>
                                <a href='https://www.facebook.com/kamal.negi.5492216'>
                                    <span><FaFacebookF /></span>
                                </a>
                                <a href='https://www.linkedin.com/in/kamal-negi-939b7a1b9/'>
                                    <span><FaLinkedinIn /></span>
                                </a>
                                <a href='https://www.instagram.com/kamalnegi8979/'>
                                    <span><FaInstagram /></span>
                                </a>
                                <a href='mailto:kamalnegi141@gmail.com'>
                                    <span><FaEnvelope /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-details'>
                        <div className='shorthand-link'>
                            <div className='footer-title'>
                                <h1>Company</h1>
                            </div>
                            <ul className='footer-links'>
                                <Link to='/destinations'>
                                    <li>Destinations</li>
                                </Link>
                                <Link to='/ourservices'>
                                    <li>Services</li>
                                </Link>
                                <Link to='/contact'>
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-details'>
                        <div className='all-destinations'>
                            <div className='footer-title'>
                                <h1>Popular Destination</h1>
                            </div>
                            <ul className='footer-links ' style={{columnCount:'2'}}>
                                <Link to='/rajasthan'>
                                    <li> Rajasthan</li>
                                </Link>
                                <Link to='/manali'>
                                    <li>Manali</li>
                                </Link>
                                <Link to='/goa'>
                                    <li>Goa</li>
                                </Link>
                                <Link to='/kashmir' >
                                    <li >Kashmir</li>
                                </Link>
                                <Link to='/leh'>
                                    <li>Leh</li>
                                </Link>
                                <Link to='/chardham'>
                                    <li>CharDham</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>Copyright <span>&copy;</span> 2021 All rights reserved by Tripzo</p>
                </div>
            </footer >
        )
    }
}
