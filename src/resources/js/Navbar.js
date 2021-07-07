/**
 * @author Kamal Negi <kamalnegi141@gmail.com>
 * @file Description
 * @desc Created on 2021-06-11 9:27:15 pm
 * @copyright APPI SASU
 */
import React, { Component } from 'react';
import { FaWpexplorer, FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    componentDidMount() {
        var menubar = document.getElementById("menu-bar");
        var navlinks = document.getElementById("navlinks");
        var closebtn = document.getElementById("close-btn");


        menubar.addEventListener("click", () => {
            navlinks.style.animation = 'navanim 0.5s ease-in-out';
            navlinks.style.left = '0';
            menubar.style.display = 'none';
            closebtn.style.display = 'flex';
        })
        closebtn.addEventListener("click", () => {
            navlinks.style.animation = 'navamin-reverse 0.5s ease-in-out';
            navlinks.style.left = '-100%';
            closebtn.style.display = 'none';
            menubar.style.display = 'flex';
        })
        document.body.onscroll = () => {
            var nav = document.getElementById('navbar');
            var top = document.documentElement.scrollTop;
            if (top > 300) {
                nav.style.animation='fixednav 0.5s ease-in-out';
                nav.classList.add('scrolled');
            }
            else {
                nav.classList.remove('scrolled');
                nav.style.animation='none';
            }
        }

    }
    render() {
        return (
            <nav className='navbar' id='navbar'>
                <div className='menu-bar' id='menu-bar'>
                    <FaBars />
                </div>
                <div className='close-btn' id='close-btn'>
                    <FaTimes />
                </div>
                <div className='nav-logo'>
                    <span><FaWpexplorer /></span>
                    <h2>Tripzo</h2>
                </div>

                <ul className='nav-links' id='navlinks'>
                    <li>
                        <Link to='/' className='active' id='home-link' >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/destination' id='destination-link'>
                            Destinations
                        </Link>
                    </li>
                    <li>
                        <Link to='/ourservices' id='service-link'>
                            Our Services
                        </Link>
                    </li>
                    <li><Link to='/contact' id='contact-link'>
                        Contact Us
                    </Link></li>
                </ul>
            </nav>
        )
    }
}
