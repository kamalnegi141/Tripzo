import React, { Component } from 'react';
import DestinationsCard from './DestinationsCard';
import '../css/PopularDestination.css';
import card1 from '../images/Jaipur/jaipur1.jpg';
import card2 from '../images/manali/manali.jpg';
import card3 from '../images/Goa/goa1.jpg';
import card4 from '../images/CharDham/kedarnath1.jpg';
import card5 from '../images/Kashmir/kashmir.jpg';
import card6 from '../images/Leh/ladak2.jpg';

export default class PopularDestination extends Component {
    render() {
        return (
            <section className='popular-destinations'>
                <div className='page-title'>
                    <h1>Popular Destination</h1>
                    <p>I can't change the direction of the wind, but I can adjust my sails to always reach my destination.</p>
                </div>
                <div className='single-destinations '>
                    <div className='row'>
                        <DestinationsCard src={card1} alt='Rajasthan' title='Rajasthan' places='08 Places' navigateTo='/rajasthan'/>
                    </div>
                    <div className='row'>
                        <DestinationsCard src={card2} alt='Manali' title='Manali' places='06 Places' navigateTo='/manali'/>
                    </div>
                    <div className='row'>
                        <DestinationsCard src={card3} alt='Goa' title='Goa' places='06 Places' navigateTo='/goa'/>
                    </div>
                    <div className='row'>
                        <DestinationsCard src={card4} alt='CharDham' title='CharDham' places='14 Places' navigateTo='/chardham'/>
                    </div>
                    <div className='row'>
                        <DestinationsCard src={card5} alt='Kashmir' title='Kashmir' places='09 Places' navigateTo='/kashmir'/>
                    </div>
                    <div className='row'>
                        <DestinationsCard src={card6} alt='Leh' title='Leh' places='08 Places' navigateTo='/leh'/>
                    </div>
                </div>
            </section>
        )
    }
}
