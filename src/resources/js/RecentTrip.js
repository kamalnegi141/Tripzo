import React, { Component } from 'react'
import TripCard from './TripCard';
import '../css/RecentTrip.css';
import trip1 from '../images/home/shimla1.jpg';
import trip2 from '../images/home/haridwar.jpg';
import trip3 from '../images/home/rishikesh.jpg';

export default class RecentTrip extends Component {
    render() {
        return (
            <section className='recent-trip'>
                <div className='page-title'>
                    <h1>Recent Trip</h1>
                    <p>Journeys Are Best Measured In New Friends</p>
                </div>
                <div className='single-destinations'>
                    <div className='row'>
                        <TripCard src={trip1} alt='Shimla' date='March 8' location='Shimla : The Queen Of Hills'/>
                    </div>
                    <div className='row'>
                        <TripCard src={trip2} alt='Haridwar' date='April 9' location='Haridwar : The City Of Love &amp; Nature'/>
                    </div>
                    <div className='row'>
                        <TripCard src={trip3} alt='Rishikesh' date='April 16' location='Rishikesh : Yoga Capital Of World'/>
                    </div>
                </div>
            </section>
        )
    }
}
