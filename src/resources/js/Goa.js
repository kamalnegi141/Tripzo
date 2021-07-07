import React, { Component } from 'react'
import DetailedPlace from './DetailedPlace';
import '../css/Goa.css';
import '../css/TourDetail.css';
import '../css/TourServices.css';
import destination1 from '../images/Goa/baga beach1.jpg';
import destination2 from '../images/Goa/candolim beach.jpg';
import destination3 from '../images/Goa/mangeshi temple1.jpg';
import destination4 from '../images/Goa/st. alex church.jpg';
import destination5 from '../images/Goa/saturday night market.jpg';
import destination6 from '../images/Goa/Reis Magos Fort.jpeg'
import PackageTop from './PackageTop';
import goa from '../images/Goa/goaoverview.jpg'
import { Link } from 'react-router-dom';
import cancelimg from '../images/Packages/cancel-image.jpg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import PackageDayDetail from './PackageDayDetail';
import TourServices from './TourServices';
import Policy from './Policy';
import TermsConditions from './TermsConditions';

const placeDetail = {
    place1: {
        src: destination1,
        placename: 'Baga Beach',
        address: 'Calangute Village, North Goa, Goa 403516, India'
    },
    place2: {
        src: destination2,
        placename: 'Candolim Beach',
        address: 'Candolim, Bardez, Goa 40351, India'
    },
    place3: {
        src: destination3,
        placename: 'Mangeshi Temple',
        address: 'Dinanath Mangeshkar Rd, Mangeshi village, Mardol, Goa 403401'
    },
    place4: {
        src: destination6,
        placename: 'Reis Magos Fort',
        address: 'Verem, Bardez, Goa 403114, India'
    },
    place5: {
        src: destination4,
        placename: 'St. Alex Church',
        address: 'Curtorim, Goa 403709, India'
    },
    place6: {
        src: destination5,
        placename: 'Saturday Night Market',
        address: 'Calangute - Anjuna Road, Verla, Arpora, Goa 403518, India'
    }
}
export default class Goa extends Component {
    constructor(){
        super();
        this.state={
            colSpan:4
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        var toggleDetails = document.getElementsByClassName('toggle');
        var toggleViewBtn = document.getElementsByClassName('view-btn');
        var toggleBookBtn = document.getElementsByClassName('less-btn');

        for (let i = 0; i < toggleDetails.length; i++) {
            toggleViewBtn[i].addEventListener('click', () => {
                for (let i = 0; i < toggleViewBtn.length; i++) {
                    toggleDetails[i].style.display = 'none';
                    toggleViewBtn[i].style.display = 'block';
                    toggleBookBtn[i].style.display = 'none';
                }
                toggleDetails[i].style.display = 'table-row';
                toggleViewBtn[i].style.display = 'none';
                toggleBookBtn[i].style.display = 'block';
            })
            toggleBookBtn[i].addEventListener('click', () => {
                toggleDetails[i].style.display = 'none';
                toggleViewBtn[i].style.display = 'block';
                toggleBookBtn[i].style.display = 'none';
            })
        }
        
        const tourdetail=document.getElementById("tour-detail").clientWidth;
        if(tourdetail<=500){
            this.setState({colSpan:3})
        }
        else if(tourdetail>500){
            this.setState({colSpan:4})
        }
        if (this.props.location.pathname === '/goa') {
            var destinationlink = document.getElementById("destination-link");
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace('active', '');
            destinationlink.className += 'active';
        }
    }

    handleMoreClick() {
        let contentTotoggle = document.getElementById('hidden');
        contentTotoggle.style.display = 'block';
        document.getElementById('more-btn').style.display = 'none';
    }
    handleLessClick() {
        let contentTotoggle = document.getElementById('hidden');
        contentTotoggle.style.display = 'none';
        document.getElementById('more-btn').style.display = 'block';
    }

    render() {
        return (
            <section className='goa' style={{ backgroundColor: '#eee' ,overflow:'hidden',width:'100%'}}>
                <div className='page-top'>
                    <PackageTop src={goa} place='Goa' pricerange='Rs.7,499 - Rs. 20,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/goa'>Goa Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>Goa Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.</p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach Goa</h3>
                                    <p><span>Air : </span>Goa Airport or Dabolim International Airport is connected with the rest of the country by airlines like Air India, GoAir, IndiGo, AirAsia, SpiceJet. The airport is about 30 km from Panjim and is accessible by taxis and buses operated by Kadamba Transport Corporation with services to Calangute, Panjim and Margao.</p>
                                    <p><span>Train : </span>The main railway stations in Goa are Vasco da Gama and Madgaon. If you are travelling from Maharashtra then there are over 45 Mumbai to Goa trains that cover the route.</p>
                                    <p><span>Bus : </span>There are buses available to Goa from nearby major cities of Mumbai, Bangalore, Mangalore, and Hyderabad.</p>
                                    <h3>Best Time to visit Goa</h3>
                                    <p>The climate of Goa can be defined as tropical monsoon with an year-round pleasantness. The seasons in Goa can be categorised into: dry season and the monsoon. The southwest monsoon hits the shores of Goa in June and lasts till September. This is when it pours down the hardest with July being the wettest month. The best time to visit Goa is from October to March which is also the high season with tourists flocking to the green state thanks to breezy evenings and balmy days. The peak month of December sees a footfall of tourists leading to a steep pricing in accommodation and beach activities. The temperature in December hovers around 32 degree Celsius. The period from April to May is off season with mercury rising to 37degree Celsius resulting in a dip in hotel prices. Check out the Cheap air tickets soon to brag the flight tickets on reasonable prices.</p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Popular Goa Packages</h3>
                            <table className='package-table'>
                                <TableHeading />
                                <TableRow packagename='Castle House Calangute Hotel - Volvo Package' price='8,499' stay='3 Nights/ 4 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival at Goa Airport' daydescription='Arrive in Goa Airport and then transfer to Goa Hotel. Check into hotel day at leisure. Night in Goa.' />
                                        <PackageDayDetail span='Day 2 - Full Day Sightseeing of North Goa' daydescription='After breakfast visit to Handicraft Emporium, Saligao Church, Sinquirim beach, Aguada Fort, Vagator Beach, Anjuna Beach and Calangute Beach.Night at Hotel' />
                                        <PackageDayDetail span='Day 3 - Full Day Sightseeing of South Goa' daydescription='After breakfast visit to Old Goa Church, Mangueshi Temple, Dona Paula, Shantadurga temple, Miramar Beach, Panjim Shopping, and evening Boat Cruise in Mandovi River with DJ Music. Stay overnight at Hotel.' />
                                        <PackageDayDetail span='Day 4 - Departure' daydescription='After breakfast transfer to Goa Airport to go onward journey.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Amara Grand Baga Resort - Volvo Package' price='7,499' stay='4 Night/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Goa Airport ---- Goa Hotel' daydescription='Arrive in Goa Airport and then transfer to Goa Hotel. Check into hotel day at leisure. Night in Goa.' />
                                        <PackageDayDetail span='Day 2 - Goa - South Goa Tour' daydescription='After breakfast visit to Dolphin Spotting, Miramar Beach, Donapaula Beach. Night in Goa.' />
                                        <PackageDayDetail span='Day 3 - Goa - South Goa Tour' daydescription='After breakfast visit to Old Goa Church, Mangueshi Temple, Balaji Temple, St. Augustin Tower, Boat Cruise Point and then back to hotel. Night in Goa.' />
                                        <PackageDayDetail span='Day 4 - Goa Hotel ------ Airport' daydescription='After breakfast transfer to Goa Airport to go onward journey.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Peninsula Beach Resort- -Volvo Package' price='9,999' stay='4 Night/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival at Goa Airport' daydescription='Arrive in Goa Airport and then transfer to Goa Hotel. Check into hotel day at leisure. Night in Goa.' />
                                        <PackageDayDetail span='Day 2 - Half Day Sightseeing of North Goa' daydescription='Half day sightseeing covering - Fort Aguada, Candolim Beach, Calangute Beach, Baga Beach. Overnight stay in Hotel.' />
                                        <PackageDayDetail span='Day 3 - Half Day Sightseeing of North Goa' daydescription='Half day sightseeing covering - Handicraft Emporium, Saligao Church, Sinquirim beach,Vagator Beach. Overnight stay in Hotel.' />
                                        <PackageDayDetail span='Day 4 - South Goa Sightseeing' daydescription='After breakfast visit to Old Goa Church, Mangesh Wari Temple, Dona Paula, Miramar Beach, Panjin Shopping. , overnight at the Hotel.' />
                                        <PackageDayDetail span='Day 5 - Departure' daydescription='After breakfast transfer to Goa Airport to go onward journey.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Weekend Getaway (Ex Mumbai) - Special Package' price='20,999' stay='3 Night/ 4 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Mumbai - Goa (588 Kms / 10 Hrs)' daydescription='Upon arrival in Mumbai, you will be met and transferred to Goa. Upon Arrival in Goa and check into your pre-booked hotel. Overnight in Goa.' />
                                        <PackageDayDetail span='Day 2 - Best of South Goa' daydescription='Breakfast at Hotel. South Goa Tour Includes Shree Mangueshi Temple, Old Goa Churches, Dona Paula, Miramar Beach, Shopping at Panjim, Lunch at Spice Plantation - at extra cost, Mandovi River Cruise at extra cost. Overnight at Hotel.' />
                                        <PackageDayDetail span='Day 3 - Best of North Goa' daydescription='Breakfast at Hotel. North Goa Tour Includes Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna, Vagator Beach, Chapora Fort, Dolphin Trip - Extra Cost, Water Sports - Extra Own cost. Overnight at Hotel.' />
                                        <PackageDayDetail span='Day 4 - Bid Farewell to Goa (Goa - Mumbai)' daydescription='After breakfast, drive back to Mumbai.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Silver Sands Sunshine - Special Volvo Package' price='14,499' stay='4 Night/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrive in Goa' daydescription='Upon arrival in Goa you will be transferred to the resort. Check in and relax. This resort lives upto its name as its closer to the candolim beach just 2 minutes by walk.' />
                                        <PackageDayDetail span='Day 2 - North Goa Sightseeing' daydescription='A/C Vehicle Pick &amp; Drop From Hotel Fort Agauda Saligao Church Chaurangi Nath Temple Vagator Beach Anjuna Beach Baga Beach Snow Park in Baga.' />
                                        <PackageDayDetail span='Day 3 - South Goa Sightseeing' daydescription='A/C Vehicle Pick &amp; Drop From Hotel Meeramar Beach Dona Paula Beach Old Goa Churches Se Catedral Church Mangeshi Temple Shantadurga Temple / Tirupati Balaji Temple Dolphin Trip (Optional) River Cruise (Optional)' />
                                        <PackageDayDetail span='Day 4 - Day at Leisure' daydescription='Day at Leisure.' />
                                        <PackageDayDetail span='Day 5 - Check Out from the Resort' daydescription='Check out and you will be transferred to the airport or train station.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In Goa</h2>
                        <div className='place-to-visit'>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place1} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place2} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place3} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place4} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place5} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place6} />
                            </div>
                        </div>
                    </div>

                    <div className='tour-services'>
                        <TourServices />
                        <Policy />
                        <TermsConditions />
                    </div>
                </div>

            </section>
        )
    }
}
