import React, { Component } from 'react';
import '../css/PopularPlaces.css';
import PlacesCard from './PlacesCard';
import place1 from '../images/home/goa.jpg';
import place2 from '../images/home/manali.jpg';
import place3 from '../images/home/jaipur2.jpg';
import { Link } from 'react-router-dom';
import place4 from '../images/Leh/ladak1.jpg';
import place5 from '../images/Kashmir/kashmir4.jpg';
import place6 from '../images/CharDham/kedarnath3.jpg';

export default class PopularPlaces extends Component {
    render() {
        return (
            <section className='popular-places'>
                <div className='page-title'>
                    <h1>Popular Places</h1>
                    <p>The most important places on a map are the places we haven't been yet.</p>
                </div>
                <div className='single-destinations'>
                    <div className='row single-place'>
                        <PlacesCard src={place1} alt='goa' title='Goa' days='5' price='5000' navigateTo='/goa' />
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place2} alt='manali' title='Manali' days='5' price='7000' navigateTo='/manali'/>
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place3} alt='Rajasthan' title='Rajasthan' days='6' price='5000' navigateTo='/rajasthan'/>
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place4} alt='Leh' title='Leh' days='6' price='5000' navigateTo='/leh'/>
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place5} alt='Kashmir' title='Kashmir' days='6' price='5000' navigateTo='/kashmir'/>
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place6} alt='CharDham' title='CharDham' days='6' price='5000' navigateTo='/chardham'/>
                    </div>
                </div>
                <Link to='/destination'>
                    <button className='more-btn' id='more-btn'>More Places</button>
                </Link>
            </section>
        )
    }
}
