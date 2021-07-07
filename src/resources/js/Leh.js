import React, { Component } from 'react';
import DetailedPlace from './DetailedPlace';
import PackageTop from './PackageTop';
import leh from '../images/Leh/lehhome.jpg'
import { Link } from 'react-router-dom';
import cancelimg from '../images/Packages/cancel-image.jpg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import PackageDayDetail from './PackageDayDetail';
import TourServices from './TourServices';
import Policy from './Policy';
import TermsConditions from './TermsConditions';
import destination1 from '../images/Leh/shantistupa1.jpg';
import destination2 from '../images/Leh/shamvalley.jpg';
import destination3 from '../images/Leh/halloffame.jpg';
import destination4 from '../images/Leh/gurudwarapatharsahib.jpg';
import destination5 from '../images/Leh/MagneticHill.jpg';
import destination6 from '../images/Leh/nubravalley.jpg';
import destination7 from '../images/Leh/shyokriver.jpg';
import destination8 from '../images/Leh/diskitmonastery.jpg';
import destination9 from '../images/Leh/pangongtsolake1.jpg';
import destination10 from '../images/Leh/drunkwhitelotusschool.jpg';
import destination11 from '../images/Leh/spitukmonastery.jpg';


const placeDetail = {
    place1: {
        src: destination1,
        placename: 'Shanti Stupa',
        address: 'Shanti Stupa Rd, Leh, Jammu and Kashmir 194101'
    },
    place2: {
        src: destination2,
        placename: 'Sham Valley',
        address: 'Sham Valley , Ladakh, Jammu and Kashmir 194101'
    },
    place3: {
        src: destination3,
        placename: 'Hall Of Fame',
        address: 'Leh, Jammu and Kashmir 194101'
    },
    place4: {
        src: destination4,
        placename: 'Gurudwara Pathar Sahib',
        address: 'Leh-Kargil Road, Ropar, Leh, Jammu and Kashmir, 194101'
    },
    place5: {
        src: destination5,
        placename: 'Magnetic Hill',
        address: 'Leh-Kargil-Srinagar national highway, Leh, Jammu and Kashmir, 194101'
    },
    place6: {
        src: destination6,
        placename: 'Nubra Valley',
        address: 'Nubra Valley, Leh , Jammu and Kashmir, 194101'
    },
    place7: {
        src: destination7,
        placename: 'Shyok River',
        address: 'Shyok River, Nubra Valley, Leh , Jammu and Kashmir, 194101'
    },
    place8: {
        src: destination8,
        placename: 'Diskit Monastery',
        address: 'Diskit, Jammu and Kashmir 194401'
    },
    place9: {
        src: destination9,
        placename: 'Pangong Tso Lake',
        address: 'Pangong Tso, Leh, Jammu and Kashmir 194401'
    },
    place10: {
        src: destination10,
        placename: 'Drunk White lotus School',
        address: 'Shey, Ladakh, Jammu and Kashmir 194401'
    },
    place11: {
        src: destination11,
        placename: 'Spituk Monastery',
        address: '18 km from Leh, Jammu and Kashmir, 194101'
    }
}

export default class Leh extends Component {
    constructor() {
        super();
        this.state = {
            colSpan: 4
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

        const tourdetail = document.getElementById("tour-detail").clientWidth;
        if (tourdetail <= 500) {
            this.setState({ colSpan: 3 })
        }
        else if (tourdetail > 500) {
            this.setState({ colSpan: 4 })
        }
        if (this.props.location.pathname === '/leh') {
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
            <section className='leh' style={{ backgroundColor: '#eee', overflow: 'hidden' }}>
                <div className='page-top'>
                    <PackageTop src={leh} place='Leh' pricerange='Rs.18,499 - Rs. 31,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/leh'>Leh Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>Leh Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>Leh is the joint capital and largest town of the union territory of Ladakh in India. Leh, located in the Leh district, was also the historical capital of the Himalayan Kingdom of Ladakh, the seat of which was in the Leh Palace, the former residence of the royal family of Ladakh, built in the same style and about the same time as the Potala Palace in Tibet. Leh is at an altitude of 3,524 metres (11,562 ft), and is connected via National Highway 1 to Srinagar in the southwest and to Manali in the south via the Leh-Manali Highway.</p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach Leh</h3>
                                    <p><span>Air : </span>The nearest airport is Kushok Bakula Rimpochee Airport located in Leh. This airport is just 3.8 km away from the main city.Kushok Bakula Rimpochee Airport is well connected with many international airports in India like Delhi. </p>
                                    <p><span>Train : </span>You cannot reach Ladakh directly by train as there is no train station in Ladakh. The nearest railway station is Jammu Jammu Tawi (700 km from Ladakh) which is well connected with Delhi, Kolkata and Mumbai. You can hire a cab or board a JKSRTC bus to reach Ladakh from Jammu.</p>
                                    <p><span>Bus : </span>There are two road routes to Leh Ladakh- one through Manali in Himachal Pradesh and the second one through Srinagar.Board a JKSRTC bus, both deluxe and ordinary, run from Kargil and between Leh and Srinagar on regular and frequent intervals.You can only travel to Ladakh by road between May to September as during the winter months the highways are shut due to heavy snowfalls.</p>
                                    <h3>Best Time to visit Leh</h3>
                                    <p>The best time to visit Leh Ladakh is from May end to the middle of July as the roads to Ladakh are open both from Srinagar Leh highway and Leh-Manali highway during this time. Also, there is a good amount of snow, especially on the Leh Manali highway. Another good time to visit Leh Ladakh is from the middle of September to October, when Ladakh is at its most beautiful. It is also possible to get good discounts during this time due to the lesser number of tourists..</p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Popular Leh Packages</h3>
                            <table className='package-table' >
                                <TableHeading />
                                <TableRow packagename='Simply Ladakh - Summer Special' price='25,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival in Leh' daydescription="After arrival at Leh Kushok Bakula Rinpoche Airport, head to the hotel.Rest for some time to get acclimatized with the high altitude. Later in the afternoon, visit the Shanti Stupa.The evening gives you a chance to walk around the local bazaars.Later, retreat to the hotel for dinner, then for a good night's sleep." />
                                        <PackageDayDetail span='Day 2 - Leh to Sham Valley' daydescription='Your destination for the day is the Sham Valley, which is replete with unique places. Visit the Hall of Fame dedicated to the Indian soldiers.A key attraction is the grand Spituk Monastery.Next travel to Gurdwara Pathar Sahib.Then it is time to move to the famed Magnetic Hill. It is said that it pulls vehicle upwards when left on neutral.' />
                                        <PackageDayDetail span='Day 3 - Leh to Nubra Valley' daydescription='After breakfast at the hotel commence on the road journey to Nubra Valley. Located in the extreme north of Ladakh, this desert land is distinguished for its white sands.After checking-in at the camp site, explore the sand dunes that stretch from Hunder to Diskit along the Nubra and Shyok Rivers.' />
                                        <PackageDayDetail span='Day 4 - Nubra Valley to Pangong Tso' daydescription='Enjoy breakfast under a clear sky on the river bank and then travel to Diskit Monastery.Thereafter continue travel to Pangong via Shyok village where you will see the  Pangong Tso Lake and its crystal blue water.You stay at the campsite for the night, under a star-spangled sky.' />
                                        <PackageDayDetail span='Day 5 - Pangong Tso to Leh via Chang-La' daydescription='Wake up to a mesmeric sunrise above the lake, and then head back to Leh.Along the way, pay a visit to the Druk White Lotus School, that shot to fame with the movie ‘3 Idiots’ as the site where the last scene was shot. After exploring it and meeting local students, reach Leh, where you can spend some time at leisure.Overnight stay at hotel after dinner.' />
                                        <PackageDayDetail span='Day 6 - Departure from Leh' daydescription='Post checking-out from the hotel, move to the Leh airport for your onward flight.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Amazing Ladakh - Summer Special' price='18,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival in Leh' daydescription="After arrival at Leh Kushok Bakula Rinpoche Airport, head to the hotel.Rest for some time to get acclimatized with the high altitude. Later in the afternoon, visit the Shanti Stupa.The evening gives you a chance to walk around the local bazaars.Later, retreat to the hotel for dinner, then for a good night's sleep." />
                                        <PackageDayDetail span='Day 2 - Leh to Sham Valley' daydescription='Your destination for the day is the Sham Valley, which is replete with unique places. Visit the Hall of Fame dedicated to the Indian soldiers.A key attraction is the grand Spituk Monastery.Next travel to Gurdwara Pathar Sahib.Then it is time to move to the famed Magnetic Hill. It is said that it pulls vehicle upwards when left on neutral.' />
                                        <PackageDayDetail span='Day 3 - Leh to Nubra Valley' daydescription='After breakfast at the hotel commence on the road journey to Nubra Valley. Located in the extreme north of Ladakh, this desert land is distinguished for its white sands.After checking-in at the camp site, explore the sand dunes that stretch from Hunder to Diskit along the Nubra and Shyok Rivers.' />
                                        <PackageDayDetail span='Day 4 - Nubra Valley to Pangong Tso' daydescription='Enjoy breakfast under a clear sky on the river bank and then travel to Diskit Monastery.Thereafter continue travel to Pangong via Shyok village where you will see the  Pangong Tso Lake and its crystal blue water.You stay at the campsite for the night, under a star-spangled sky.' />
                                        <PackageDayDetail span='Day 5 - Pangong Tso to Leh via Chang-La' daydescription='Wake up to a mesmeric sunrise above the lake, and then head back to Leh.Along the way, pay a visit to the Druk White Lotus School, that shot to fame with the movie ‘3 Idiots’ as the site where the last scene was shot. After exploring it and meeting local students, reach Leh, where you can spend some time at leisure.Overnight stay at hotel after dinner.' />
                                        <PackageDayDetail span='Day 6 - Departure from Leh' daydescription='Post checking-out from the hotel, move to the Leh airport for your onward flight.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Delightful Ladakh-Summer Special' price='25,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival in Leh' daydescription="After arrival at Leh Kushok Bakula Rinpoche Airport, head to the hotel.Rest for some time to get acclimatized with the high altitude. Later in the afternoon, visit the Shanti Stupa.The evening gives you a chance to walk around the local bazaars.Later, retreat to the hotel for dinner, then for a good night's sleep." />
                                        <PackageDayDetail span='Day 2 - Leh to Sham Valley' daydescription='Your destination for the day is the Sham Valley, which is replete with unique places. Visit the Hall of Fame dedicated to the Indian soldiers.A key attraction is the grand Spituk Monastery.Next travel to Gurdwara Pathar Sahib.Then it is time to move to the famed Magnetic Hill. It is said that it pulls vehicle upwards when left on neutral.' />
                                        <PackageDayDetail span='Day 3 - Leh to Nubra Valley' daydescription='After breakfast at the hotel commence on the road journey to Nubra Valley. Located in the extreme north of Ladakh, this desert land is distinguished for its white sands.After checking-in at the camp site, explore the sand dunes that stretch from Hunder to Diskit along the Nubra and Shyok Rivers.' />
                                        <PackageDayDetail span='Day 4 - Nubra Valley to Pangong Tso' daydescription='Enjoy breakfast under a clear sky on the river bank and then travel to Diskit Monastery.Thereafter continue travel to Pangong via Shyok village where you will see the  Pangong Tso Lake and its crystal blue water.You stay at the campsite for the night, under a star-spangled sky.' />
                                        <PackageDayDetail span='Day 5 - Pangong Tso to Leh via Chang-La' daydescription='Wake up to a mesmeric sunrise above the lake, and then head back to Leh.Along the way, pay a visit to the Druk White Lotus School, that shot to fame with the movie ‘3 Idiots’ as the site where the last scene was shot. After exploring it and meeting local students, reach Leh, where you can spend some time at leisure.Overnight stay at hotel after dinner.' />
                                        <PackageDayDetail span='Day 6 - Departure from Leh' daydescription='Post checking-out from the hotel, move to the Leh airport for your onward flight.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Best Of Ladakh - Standard' price='31,499' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrival in Leh ' daydescription='Arrival at Kushok Bakula airport Leh.Transfer to hotel.Half Day at rest for acclimatization. After Lunch drive to Visit Shanti Stupa &amp; Leh Palace, Later in the evening walk around local market. Overnight stay at the Hotel. ' />
                                        <PackageDayDetail span='Day 2 - Drive to Sham Valley' daydescription='Post breakfast we drive on the Srinagar highway and start our Day by visiting the hall of fame - museum constructed by the Indian army, Gurudwara Patthar Sahib nestled deep in the Himalayas.Further we experience the magnetic hill which defies the law of gravity. We stop at the confluence of the Indus and Zanskar rivers and later we drive back to the hotel in leh. Over night stay at the Hotel.' />
                                        <PackageDayDetail span='Day 3 - Leh to Nubra via Khardungla Pass' daydescription='Today at morning, drive to Nubra valley, driving over the highest motored pass in the world. Pay a visit to Deskit Monastery where you will visit 106-feet high, statue of Maitreya Buddha atop on the hill.In the evening we will drive back to the camp/hotel. Dinner and overnight in camp/hotel at Nubra. ' />
                                        <PackageDayDetail span='Day 4 - Nubra to Pangong Lake via Shayok' daydescription='After breakfast at camp/hotel we drive to next destination Pangong Lake via Shayok and onto Tang Tse and Spangmik (Pangong).It takes less than an hour to reach Shayok, and you will be delighted at the sight of the rather big village surrounded by barren mountains. Afternoon we reach at Pangong lake and enjoy your day at Pangong lake. Overnight stay in Pangong.' />
                                        <PackageDayDetail span='Day 5 - Pangong Lake to Leh' daydescription='Morning at leisure to explore the beauty of lake and later we drive back to leh. Overnight at hotel in leh.' />
                                        <PackageDayDetail span='Day 6 - Departure from Leh' daydescription='In the morning transfer to the airport to board the flight for your onward destination.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Indus Creed - Standard' price='4 Nights/ 5 Days' stay='20,999' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrive Leh' daydescription='Arrive Kushok Bakula airport Leh.Transfer to hotel.After Lunch drive to Visit Shanti Stupa & Leh Palace, Later in the evening walk around local market. Overnight stay at the Hotel.' />
                                        <PackageDayDetail span='Day 2 - Drive to Sham Valley' daydescription='Post breakfast we drive on the Srinagar highway and start our Day by visiting the hall of fame - museum constructed by the Indian army, Gurudwara Patthar Sahib nestled deep in the Himalayas.Further we experience the magnetic hill which defies the law of gravity. We stop at the confluence of the Indus and Zanskar rivers and later we drive back to the hotel in leh. Over night stay at the Hotel.' />
                                        <PackageDayDetail span='Day 3 - Leh-Khardongla Pass - Leh' daydescription='After breakfast drive to Khardongla Pass the world’s highest Motorable road and gateway to Siachen Glacier, the views from the top of the pass are amazing. Post lunch free to explore the local markets of Leh. Dinner and overnight at Hotel in Leh.' />
                                        <PackageDayDetail span='Day 4 - Leh-Pangong Lake - Leh' daydescription='After early breakfast leave for Pangong Lake (14,500ft), 4-5 hrs drive one way through Changla Pass third highest motorable road in the world.Drive back to Leh via same route. Dinner and overnight at Hotel in Leh.' />
                                        <PackageDayDetail span='Day 5 - Departure from Leh' daydescription='In the morning transfer to the airport to board the flight for your onward destination.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In Leh</h2>
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
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place7} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place8} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place9} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place10} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place11} />
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
