import React, { Component } from 'react';
import '../css/Home.css';
import SearchBar from './SearchBar.js';
import PopularDestination from './PopularDestination.js';
import SlideShow from './SlideShow.js';
import Subscribe from './Subscribe.js';
import PopularPlaces from './PopularPlaces';
import Services from './Services';
import RecentTrip from './RecentTrip';
import Discount from './Discount';

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        if(this.props.location.pathname==='/'){
            var homelink = document.getElementById("home-link");
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace('active', '');
            homelink.className += 'active';
        }
    }
    render() {
        return (
            <section className='home' id='home'>
                <div className='home-text'>
                    <SlideShow/>
                </div>
                <section className='home-comps'>
                    <SearchBar />
                    <PopularDestination/>
                    <Subscribe />
                    <PopularPlaces/>
                    <Discount/>
                    <Services/>
                    <RecentTrip/>
                </section>
            </section>
        )
    }
}