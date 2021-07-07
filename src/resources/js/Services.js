/**
 * @author Firstname Lastname <firstname.lastname@example.com>
 * @file Description
 * @desc Created on 2021-06-14 8:24:00 pm
 * @copyright APPI SASU
 */
import React, { Component } from 'react'
import '../css/Services.css';
import service1 from '../images/home/train.svg';
import service2 from '../images/home/hotel.svg';
import service3 from '../images/home/travelguide.svg';

export default class Services extends Component {
    render() {
        return (
            <section className='services'>
                <div className='service-details'>
                    <div className='service-name '>
                        <img src={service1} alt='train'></img>
                        <h2>Comfortable Journey</h2>
                        <p>Life is a journey that have a lot different paths, but any path you choose use it as your destiny.</p>
                    </div>
                    <div className='service-name '>
                        <img src={service2} alt='hotel'></img>
                        <h2>Luxuries Hotel</h2>
                        <p>The great advantage of a hotel is that it is a refuge from home life.</p>
                    </div>
                    <div className='service-name '>
                        <img src={service3} alt='travel guide'></img>
                        <h2>Travel Guide</h2>
                        <p>Even a poor travel guide is entitled to some happiness.</p>
                    </div>
                </div>

            </section>
        )
    }
}
