import React, { Component } from 'react';
import '../css/Destinations.css';
import PlacesCard from './PlacesCard';
import SearchBar from './SearchBar.js';
import place1 from '../images/home/goa.jpg';
import place2 from '../images/home/manali.jpg';
import place3 from '../images/home/jaipur2.jpg';
import place4 from '../images/Leh/ladak1.jpg';
import place5 from '../images/Kashmir/kashmir4.jpg';
import place6 from '../images/CharDham/kedarnath2.jpg';
import destination from '../images/Jaipur/destination.jpg';

export default class Destinations extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.location.pathname === '/destination') {
            var destinationlink = document.getElementById("destination-link");
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace('active', '');
            destinationlink.className += 'active';
        }
    }
    render() {
        return (
            <section className='destinations'>
                <div className='destination-container'>
                    <img src={destination} alt='destination-page'></img>
                    <div className='destination-text'>
                        <h1>Destinations</h1>
                        <p>Sometimes it's the journey that teaches you a lot about your destination.</p>
                    </div>
                </div>
                <section className='destination-comps'>
                    <SearchBar />
                </section>

                <div className='single-destinations'>
                    <div className='row single-place'>
                        <PlacesCard src={place1} alt='goa' title='Goa' days='5' price='5000' navigateTo='/goa' />
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place2} alt='manali' title='Manali' days='5' price='7000' navigateTo='/manali' />
                    </div>
                    <div className='row single-place'>
                        <PlacesCard src={place3} alt='Rajasthan' title='Rajasthan' days='6' price='5000' navigateTo='/rajasthan' />
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
            </section>
        )
    }
}
