import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/TourDetail.css';
import '../css/TourServices.css';
import manali from '../images/manali/manalihome.jpg';
import DetailedPlace from './DetailedPlace';
import place1 from '../images/manali/beas river.jpg';
import place2 from '../images/manali/gulaba.jpg';
import place3 from '../images/manali/jana waterfall1.jpg';
import place4 from '../images/manali/jogini waterfall1.jpg';
import place5 from '../images/manali/manikaran gurudwara1.jpg';
import place6 from '../images/manali/solang valley.jpg';
import PackageTop from './PackageTop.js';
import cancelimg from '../images/Packages/cancel-image.jpg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TableHeading from './TableHeading.js';
import TableRow from './TableRow.js';
import PackageDayDetail from './PackageDayDetail';
import TourServices from './TourServices';
import Policy from './Policy';
import TermsConditions from './TermsConditions';

const placeDetail = {
    destination1: {
        src: place1,
        placename: 'Beas River',
        address: 'Manali, Manali Tehsil,Himachal Pradesh 175131, India'
    },
    destination2: {
        src: place2,
        placename: 'Gulaba Snow Point',
        address: 'Gulaba, Manali, Himachal Pradesh 175131, India'
    },
    destination3: {
        src: place3,
        placename: 'Jana Waterfall',
        address: 'Naggar Town, Manali, Himachal Pradesh 175131, India'
    },
    destination4: {
        src: place4,
        placename: 'Jogini Waterfall',
        address: 'On water fall way V.P.O.-Vashist 5 km from, Manali, Himachal Pradesh 175103, India'
    },
    destination5: {
        src: place5,
        placename: 'Manikaran Gurudwara',
        address: 'Parvati Valley, Rivers Beas, Bhuntar, Manali, Himachal Pradesh 175131, India'
    },
    destination6: {
        src: place6,
        placename: 'Solang Valley',
        address: 'Solang village, Manali, Himachal Pradesh 175131, India'
    }
}
export default class Manali extends Component {
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
        if (this.props.location.pathname === '/manalli') {
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
            <section className='manali' style={{ backgroundColor: '#eee' ,overflow:'hidden'}}>
                <div className='page-top'>
                    <PackageTop src={manali} place='Manali' pricerange='Rs.5,499 - Rs. 9,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/manali'>Manali Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>Manali Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.</p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach Manali</h3>
                                    <p><span>Air : </span>There is no airport in Manali, but the closest airport is Bhuntar in Kullu, which is 50 km away from Manali.Air India flights operate between Kullu and Delhi, however, these are irregular and very expensive. From Chandigarh, Himalayan Bulls offer flights to Kullu airport. The company is currently running three-flights a day to Kullu from Chandigarh. From the airport, the best way to get to Manali is by a pre-paid taxi alternatively one can get a public transport from Kullu, which is very economical.</p>
                                    <p><span>Train : </span>There are a total of 10 trains that depart from Delhi and arrive at Manali. While some of them are available for daily booking, a few are only available on specific days.</p>
                                    <p><span>Bus : </span>The distance is 570km from Delhi, the capital of India, and there are buses connecting the two cities with very good frequency.The Himachal Road Transport Corporation (HRTC) buses are popular, efficient and comfortable. These deluxe Volvo bus tickets can be purchased online and the website accepts foreign credit cards.</p>
                                    <h3>Best Time to visit Manali</h3>
                                    <p>Temperatures range from 10°C to 25°C in the peak season. This is between the months of March to June. This is the best time to satiate your curiosity and engage in some sightseeing and adventure activities such as paragliding and trekking. The plethora of festivals at this time of the year also attract a number of tourists in the summer season. </p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Popular Manali Packages</h3>
                            <table className='package-table'>
                                <TableHeading />
                                <TableRow packagename='Apple Bud Hotel, Manali - Volvo Package' price='8,599' stay='4 Nights/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi - Manali Volvo (Overnight)' daydescription='Overnight Journey Delhi to Manali.' />
                                        <PackageDayDetail span='Day 2 - Manali' daydescription='Upon arrival in Manali, check-in at the hotel. Later in the afternoon, proceed on a half-day city tour and visit the Hidimba Devi Temple, Vashist Hot Water Springs, Van Vihar, Hongkong Market and the Tibetan Monastery. Explore the Shopping malls of Manali and enjoy dinner and overnight stay at the hotel.' />
                                        <PackageDayDetail span='Day 3 - Manali' daydescription='Enjoy a hearty breakfast at the hotel and later get ready for an excursion to Solang Valley which is a picturesque setting. Indulge in some adventure sports like Snow Scooter, Skiing, Parachuting, Paragliding, and Zorbing at Solong. In the evening, return to the hotel in time for dinner and overnight stay.' />
                                        <PackageDayDetail span='Day 4 - Manali' daydescription='After a hearty breakfast set out on an excursion to Kullu and Manikaran. Enjoy rafting on the Beas River and en route, visit the Kullu Market, Kullu Shawl Factory, sale outlets, Angora Farm, Vaishno Mata Temple and the Parvati river. Return to Manali to explore the town on your own. Overnight at hotel.' />
                                        <PackageDayDetail span='Day 5 - Manali - Delhi Volvo (Overnight)' daydescription='After a hearty breakfast, visit the Mall Road for purchasing gifts for family and friends. Board the overnight Volvo to reach Delhi.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Hadimba Retreat, Manali - Volvo Package' price='6,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi - Manali Volvo (Overnight)' daydescription='Overnight Journey Delhi to Manali.' />
                                        <PackageDayDetail span='Day 2 - Manali' daydescription='Upon arrival in Manali, check-in at the hotel. Later in the afternoon, proceed on a half-day city tour and visit the Hidimba Devi Temple, Vashist Hot Water Springs, Van Vihar, Hongkong Market and the Tibetan Monastery. Explore the Shopping malls of Manali and enjoy dinner and overnight stay at the hotel.' />
                                        <PackageDayDetail span='Day 3 - Manali' daydescription='Enjoy a hearty breakfast at the hotel and later get ready for an excursion to Solang Valley which is a picturesque setting. Indulge in some adventure sports like Snow Scooter, Skiing, Parachuting, Paragliding, and Zorbing at Solong. In the evening, return to the hotel in time for dinner and overnight stay.' />
                                        <PackageDayDetail span='Day 4 - Manali' daydescription='After a hearty breakfast set out on an excursion to Kullu and Manikaran. Enjoy rafting on the Beas River and en route, visit the Kullu Market, Kullu Shawl Factory, sale outlets, Angora Farm, Vaishno Mata Temple and the Parvati river. Return to Manali to explore the town on your own. Overnight at hotel.' />
                                        <PackageDayDetail span='Day 5 - Manali(Full Day Trip to Kullu (45Kms))' daydescription='Morning after breakfast you will be pickup from hotel and transfer to Manikaran. At 1737 mts., on the right bank of river Parvati is Manikaran.On this day you can also take enjoy of water rafting at Babeli Kullu.' />
                                        <PackageDayDetail span='Day 6 - Manali - Delhi Volvo (Overnight)' daydescription='After a hearty breakfast, visit the Mall Road for purchasing gifts for family and friends. Board the overnight Volvo to reach Delhi.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Apple Bud Hotel Honeymoon Special-Volvo Package' price='9,999' stay='4 Nights/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi - Manali Volvo (Overnight)' daydescription='Overnight Journey Delhi to Manali.' />
                                        <PackageDayDetail span='Day 2 - Manali' daydescription='Upon arrival in Manali, check-in at the hotel. Later in the afternoon, proceed on a half-day city tour and visit the Hidimba Devi Temple, Vashist Hot Water Springs, Van Vihar, Hongkong Market and the Tibetan Monastery. Explore the Shopping malls of Manali and enjoy dinner and overnight stay at the hotel.' />
                                        <PackageDayDetail span='Day 3 - Manali' daydescription='Enjoy a hearty breakfast at the hotel and later get ready for an excursion to Solang Valley which is a picturesque setting. Indulge in some adventure sports like Snow Scooter, Skiing, Parachuting, Paragliding, and Zorbing at Solong. In the evening, return to the hotel in time for dinner and overnight stay.' />
                                        <PackageDayDetail span='Day 4 - Manali' daydescription='After a hearty breakfast set out on an excursion to Kullu and Manikaran. Enjoy rafting on the Beas River and en route, visit the Kullu Market, Kullu Shawl Factory, sale outlets, Angora Farm, Vaishno Mata Temple and the Parvati river. Return to Manali to explore the town on your own. Overnight at hotel.' />
                                        <PackageDayDetail span='Day 5 - Manali - Delhi Volvo (Overnight)' daydescription='After a hearty breakfast, visit the Mall Road for purchasing gifts for family and friends. Board the overnight Volvo to reach Delhi.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Sweet Mist Of Manali' price='5,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi - Manali (580 Kms/11-12 hrs.)' daydescription='Travel by overnight bus from Delhi to Manali (12 - 14 Hours).' />
                                        <PackageDayDetail span='Day 2 - Arrival In Manali &amp; Local City Tour (3-4Hrs)' daydescription='Reach Manali at , Meet our representative at Manali Volvo Stand and transfer to the hotel. After fresh up, proceed to half day city tour of Manali which includes- Hadimba Devi Temple, Vashisht - Hot Sulphur Water springs, Tibetan-Monastery, Monastery Club House, Van Vihar. Dinner &amp; Overnight.' />
                                        <PackageDayDetail span='Day 3 - MANALI FULL DAY TOUR SOLANG VALLEY / ROTHANG PASS' daydescription='After breakfast proceed to Visit Solang Valley. Solang Valley is famous for its natural beauty and adventure sports.On can enjoy Paragliding, Zorbing, Snow scooter, Horse riding and rope way ride there(Cost not included).Later back to hotel. Diner and Overnight stay at hotel.Later back to hotel. Diner and Overnight stay at hotel. ' />
                                        <PackageDayDetail span='Day 4 - Manali (Full Day Trip to Kullu (45Kms) Kasol (75KM ) Manikaran (80Kms )' daydescription='Morning after breakfast you will be pickup from hotel and transfer to Manikaran. At 1737 mts., on the right bank of river Parvati is Manikaran. On the way also visit Kasol Valley Charmingly Manikaran located on open space with slopes down to a broad expanse of clear white sand at edge of the river Parvati, Vaishno Temple which is a small cave and shrine with an image of goddess Vaishno devi. On this day you can also take enjoy of water rafting at Babeli Kullu. Evening drive back to hotel. Night Stay and Dinner in hotel at Manali.' />
                                        <PackageDayDetail span='Day 5 - Day at Leisure' daydescription='Day at Leisure' />
                                        <PackageDayDetail span='Day 6 - Manali - Delhi Volvo (Overnight)' daydescription='After a hearty breakfast, visit the Mall Road for purchasing gifts for family and friends. Board the overnight Volvo to reach Delhi.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Sarthak Resort, Manali - Volvo' price='6,999' stay='4 Nights/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi - Manali Volvo (Overnight)' daydescription='Overnight Journey Delhi to Manali.' />
                                        <PackageDayDetail span='Day 2 - Manali' daydescription='Upon arrival in Manali, check-in at the hotel. Later in the afternoon, proceed on a half-day city tour and visit the Hidimba Devi Temple, Vashist Hot Water Springs, Van Vihar, Hongkong Market and the Tibetan Monastery. Explore the Shopping malls of Manali and enjoy dinner and overnight stay at the hotel.' />
                                        <PackageDayDetail span='Day 3 - Manali' daydescription='Enjoy a hearty breakfast at the hotel and later get ready for an excursion to Solang Valley which is a picturesque setting. Indulge in some adventure sports like Snow Scooter, Skiing, Parachuting, Paragliding, and Zorbing at Solong. In the evening, return to the hotel in time for dinner and overnight stay.' />
                                        <PackageDayDetail span='Day 4 - Manali' daydescription='After breakfast set out on an excursion to Kullu and Manikaran. Enjoy rafting on the Beas River and en route, visit the Kullu Market, Kullu Shawl Factory, sale outlets, Angora Farm, Vaishno Mata Temple and the Parvati river. Return to Manali to explore the town on your own. Overnight at hotel.' />
                                        <PackageDayDetail span='Day 5 - Manali - Delhi Volvo (Overnight)' daydescription='After breakfast, visit the Mall Road for purchasing gifts for family and friends. Board the overnight Volvo to reach Delhi.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In Manali</h2>
                        <div className='place-to-visit'>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination1} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination2} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination3} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination4} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination5} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination6} />
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
