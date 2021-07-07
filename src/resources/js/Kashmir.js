import React, { Component } from 'react';
import PackageTop from './PackageTop';
import kashmir from '../images/Kashmir/kashmirhome.jpg';
import cancelimg from '../images/Packages/cancel-image.jpg';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import PackageDayDetail from './PackageDayDetail';
import TourServices from './TourServices';
import Policy from './Policy';
import TermsConditions from './TermsConditions';
import destination1 from '../images/Kashmir/mugalgarden.jpg';
import destination2 from '../images/Kashmir/nishatgarden.jpg';
import destination3 from '../images/Kashmir/shalimargarden.jpg';
import destination4 from '../images/Kashmir/kanganvalley.jpg';
import destination5 from '../images/Kashmir/Thajiwasglacier.jpg';
import destination6 from '../images/Kashmir/betaabvalley.jpg';
import destination7 from '../images/Kashmir/baisaranvalley.jpg';
import destination8 from '../images/Kashmir/gulamarggondola.jpg';
import destination9 from '../images/Kashmir/naginlake.jpg';
import DetailedPlace from './DetailedPlace';

const placeDetail = {
    place1: {
        src: destination1,
        placename: 'Mugal Garden',
        address: 'Chinar chowk, Shalimar, Srinagar, Jammu and Kashmir 191121'
    },
    place2: {
        src: destination2,
        placename: 'Nishat Garden',
        address: 'Main Road Nishat,Srinagar, Jammu and Kashmir 191121'
    },
    place3: {
        src: destination3,
        placename: 'Shalimar Garden',
        address: 'Chinar chowk, Shalimar, Srinagar, Jammu and Kashmir 191121'
    },
    place4: {
        src: destination4,
        placename: 'Kangan Valley',
        address: 'Kangan, Srinagar, Jammu and Kashmir 191121'
    },
    place5: {
        src: destination5,
        placename: 'Thajiwas Glacier',
        address: 'Forest Block, Sonamarg, Jammu & Kashmir, 191203 '
    },
    place6: {
        src: destination6,
        placename: 'Betaab Valley',
        address: 'Near Pahalgam, Baramulla, Hajan, Jammu and Kashmir 192126'
    },
    place7: {
        src: destination7,
        placename: 'Baisaran Valley',
        address: 'Baisaran, Anantnag District, Jammu and Kashmir 192126'
    },
    place8: {
        src: destination8,
        placename: 'Gondola Ride',
        address: 'District Baramulla, Alambal Road, Gulmarg, Jammu and Kashmir 193403'
    },
    place9: {
        src: destination9,
        placename: 'Nigeen Lake',
        address: 'Nigeen Lake, Srinagar, Jammu and Kashmir 193403 '
    }
}

export default class Kashmir extends Component {
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
        if (this.props.location.pathname === '/kashmir') {
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
            <section className='kashmir' style={{ backgroundColor: '#eee', overflow: 'hidden' }}>
                <div className='page-top'>
                    <PackageTop src={kashmir} place='Kashmir' pricerange='Rs.14,499 - Rs. 20,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/kashmir'>Kashmir Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>Kashmir Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>Kashmir is a state which is equally rich in cultural and natural wonders along with the myriad of history and political past that this state is home to. This state provides unique experiences to its tourists in the form of spicy native food along with a variety of teas, long walks or a jagged trekking experience on the many mountains in the region, marvelling at the cozy houseboats on the lakes of Srinagar and visiting the many pilgrimage sites, temples and religious and spiritual centres that are present throughout the state. If you love collecting souvenirs from the places you visit, then you can pick up the beautiful Pashmina silks, carpets and other textiles handcrafted by the native craftsmen in Kashmir. </p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach Kashmir</h3>
                                    <p><span>Air : </span>The Srinagar airport is an international airport, but it mainly serves domestic flights from a number of cities such as Delhi, Chandigarh, Amritsar, Bangalore, Mumbai etc.</p>
                                    <p><span>Train : </span>Travelling to Kashmir by train means you have to take a train to Jammu Tawi Railway Station in Jammu which is the only railway station in Kashmir. Although Srinagar too has a railway station at Nowgam which is around 10kms away from the city.</p>
                                    <p><span>Bus : </span>Kashmir is connected to other cities and states by a network of state and private buses. From cities like Chandigarh and Delhi, there are bus services that take you to Srinagar. Srinagar is connected to Jammu via the National Highway 1-A. State road transport corporation buses from various states have private deluxe buses which travel to Kashmir. </p>
                                    <h3>Best Time to visit Kashmir</h3>
                                    <p>The best time to visit Kashmir is March through October. If you want to enjoy Kashmir when the flowers are in full bloom and the alpine meadows at their greenest, this is the best period. Having said that, it can get a bit crowded during these months, considering it is the peak tourist season. Kashmir experiences four major seasons and the months of March to October cover spring, summer, and autumn.</p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Popular Kashmir Packages</h3>
                            <table className='package-table'>
                                <TableHeading />
                                <TableRow packagename='Experience Kashmir - A Family Getaway' price='14,499' stay='4 Nights/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Welcome to Srinagar' daydescription='Arrive in Srinagar, Kashmir and discover the immediate beauty and romance of the small towns along hillside. Go on a beautiful tour around the city and visit the mesmerizing historic gardens of the Mughals. After the sightseeing tour, you will return to the hotel, enjoy a delicious dinner and retreat for the night.' />
                                        <PackageDayDetail span='Day 2 - Gulmarg Transfer - Breathtaking Meadows (55 kms: 1.5 hours)' daydescription="After enjoying a delightful breakfast at the hotel, proceed towards Gulmarg for a day tour. Enjoy the scenic drive passing through beautiful towns and villages of Kunzar, Magam and Tangmarg. Take leisurely walks on the lush green meadows in Gulmarg (Meadow of Flowers) that mesmerizes you with breathtaking vistas of snow-capped mountains.Finally, get a good night's rest back in Srinagar as you return in evening." />
                                        <PackageDayDetail span='Day 3 - Pahalgam transfer -"Valley of Shepherds" (140 kms, 4 hrs)' daydescription='On this day, travel from Gulmarg to Pahalgam to discover its unparalleled beauty. Enjoy a splendid drive along beautiful gushing streams and views of quaint villages on the slopes of enchanting mountains.In the noon, embark on an excursion to the Betaab Valley, Chandanwadi and Aru Valley or to Baisaran (known as Mini Switzerland), on a direct payment basis. Then rest the night away in Pahalgam.' />
                                        <PackageDayDetail span='Day 4 - Houseboat Stay , Shikara ride on Dal Lake/Nageen Lake' daydescription='Wake up to a pleasant morning in Pahlagam and spend some leisurely time. In the noon, get transferred to a houseboat in Srinagar. Check-in at the houseboat on the serene Dal Lake/Nageen lake that takes you to a whole new world of bliss and serenity. Enjoy a wonderful Shikara boat ride on the scenic Dal Lake/Nageen Lake.End the day with a pleasant sleep back in the houseboat.' />
                                        <PackageDayDetail span='Day 5 - Departure' daydescription="After a typical breakfast, you will ll be taken by private car to Srinagar's airport, ready to return home." />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Glimpse Of Srinagar' price='12,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrive in Srinagar' daydescription='Arrive at Srinagar Airport and transfer to the hotel. The popular sightseeing destinations include Shalimar Bagh, Tulip Garden, Chashme Shahi, Nishat Bagh and Pari Mahal. Enjoy a tasty dinner and a pleasant overnight stay at the hotel, in Srinagar.' />
                                        <PackageDayDetail span='Day 2 - Srinagar to Sonamarg (80 Km / 1 hour)' daydescription='Enjoy a filling breakfast and embark on a trip to Sonamarg. Opt for a pony ride to the glaciers. In the evening, return to the hotel and relax. Facilities for dinner and overnight stay will be arranged at the hotel.' />
                                        <PackageDayDetail span='Day 3 - Srinagar to Pahalgam (90 Km / 2 hours)' daydescription='After a hearty breakfast, head to Pahalgam.En route, visit the fields of Pampore and Awantipora Ruins. Arrive at Pahalgam and enjoy the beauty of Lidder Stream. Overnight stay will be at a hotel, in Pahalgam.' />
                                        <PackageDayDetail span='Day 4 - Pahalgam to Gulmarg (135 Km / 2. 5 hours)' daydescription='Enjoy a tasty breakfast and head to Gulmarg. It has one of the best ski slopes in the world and the highest golf course. If the weather conditions are good, you can enjoy the view of Nanga Parbat. Transfer to a Cable Car (Gondola) for mountain ride to Khilanmarg. Enjoy the night stay in Gulmarg.' />
                                        <PackageDayDetail span='Day 5 - Gulmarg to Srinagar (50 Km / 45 mins)' daydescription='After an early breakfast, transfer from Gulmarg to Srinagar. Visit the famous Mughal Gardens and Shankaracharya Temple. Facilities for dinner and overnight stay will be arranged at the hotel or deluxe houseboat.' />
                                        <PackageDayDetail span='Day 6 - Departure from Srinagar' daydescription='Enjoy a yummy breakfast and transfer to Srinagar Airport. Proceed for your onward journey.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Glorious Kashmir' price='13,499' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Arrive in Srinagar ' daydescription='Arrive at Srinagar Airport and head to the hotel. Take a sightseeing tour to the Mughal Garden that includes a visit to Shalimar Bagh, Nishat Bagh, Tulip Gardens, Botanical Gardens, Chashme Shahi and Pari Mahal. Dinner and overnight stay would be arranged at the hotel, in Srinagar.' />
                                        <PackageDayDetail span='Day 2 - Srinagar Sonamarg (79.6 km / 1. 5 hours)' daydescription='Relish a lip-smacking breakfast and embark on a full-day excursion to Sonamarg, popular for trout and mahseer fishing in summers. You may opt for a pony ride to one of the glaciers (on your own payment). Return to the hotel in Srinagar late in the evening and enjoy a delectable dinner along with a comfortable overnight stay.' />
                                        <PackageDayDetail span='Day 3 - Srinagar to Gulmarg (56.9 km / 1. 5 hours)' daydescription='In the morning, post breakfast, leave for Gulmarg, known for the best ski slopes in the world and highest golf course with 18 holes. If weather permits, take a view of Nanga Parbat, and enjoy a cable car ride (Gondola - the 8-minute Ropeway) up to Khilanmarg. Return to the hotel in Srinagar late in the evening. Dinner and overnight stay will be at the hotel, in Srinagar.' />
                                        <PackageDayDetail span='Day 4 - Srinagar to Pahalgam (86.9 km / 2. 5 hours)' daydescription='In the morning, leave for Pahalgam. En route, visit the Awantipora ruins. Check in at the hotel and after some rest, take a stroll to Baisaran. Visit Chandanwadi (at your own cost), the Snow Point (14 Km) at your own cost or enjoy a pony ride at your own cost. A hearty dinner and a pleasant overnight stay will be arranged at the hotel, in Pahalgam.' />
                                        <PackageDayDetail span='Day 5 - Pahalgam to Srinagar - Shikara Ride (88.9 km / 1 hour 55 min)' daydescription='After a sumptuous breakfast, return to Srinagar. In the evening, visit the remaining important places in Srinagar and enjoy a Shikara Ride, on Dal Lake. An appetizing dinner and a pleasant overnight stay will be at the Deluxe Houseboat.' />
                                        <PackageDayDetail span='Day 6 - Departure' daydescription='After a tummy-filling breakfast, visit remaining places in Srinagar and head to Srinagar Airport to board your onward flight.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Enchanting Kashmir Honeymoon Tour' price='20,999' stay='5 Nights/ 6 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Welcome to Srinagar - City Tour' daydescription='On arrival at Srinagar Airport, your representative will meet you and transfer you to a luxurious hotel near Srinagar city centre. Freshen up at the hotel and embark upon a wonderful city tour. Visit the historical Mughal Gardens built by the famous Mughal Emperor Jahangir - the Shalimar Garden, Nishat Garden and the Chashme Shahi Garden. Then, return to the hotel for an overnight stay.' />
                                        <PackageDayDetail span='Day 2 - Srinagar - Sonmarg (80 km, 3 hrs)' daydescription='Escape into the sublime beauty of Sonmarg on this day.On arriving in Sonmarg by noon, enjoy a sightseeing tour to the stunning Thajiwas Glacier or to other sightseeing points (on direct payment basis).Explore the breathtaking valleys and behold the beautiful Sindh River along with views of snow-clad mountains. Return to Srinagar in the evening and stay overnight.' />
                                        <PackageDayDetail span='Day 3 - Srinagar - Pahalgam (90 km, 3 hrs)' daydescription='On this day, travel from Srinagar to Pahalgam to discover its unparalleled beauty. Explore the countryside in Pahalgam and take a stroll through the calm forests, along the Lidder River. In the noon, embark on an excursion to the Betaab Valley, Chandanwadi and Aru Valley or to Baisaran (known as Mini Switzerland), on a direct payment basis. Then rest the night away in Pahalgam.' />
                                        <PackageDayDetail span='Day 4 - Pahalgam - Gulmarg (140 km, 4 hrs)' daydescription="After enjoying a delightful breakfast at the hotel, proceed towards Gulmarg for a two-day tour.Take leisurely walks on the lush green meadows in Gulmarg (Meadow of Flowers).Do not miss exciting activities like a pony ride along the scenic meadows or the Gondola ride (world's highest ropeway) to Khilanmarg and Apharwat at your own cost.Finally, get a good night's rest back in Gulmarg." />
                                        <PackageDayDetail span='Day 5 - Houseboat Stay - Shikara ride on Dal Lake/Nageen Lake' daydescription='Wake up to a pleasant morning in Gulmarg and spend some leisurely time. In the noon, get transferred to a houseboat in Srinagar. Check-in at the houseboat on the serene Dal Lake/Nageen.Enjoy a wonderful Shikara boat ride on the scenic Dal Lake/Nageen Lake.End the day with a pleasant sleep back in the houseboat.' />
                                        <PackageDayDetail span='Day 6 - Departure' daydescription="After a typical breakfast, you will ll be taken by private car to Srinagar's airport, ready to return home. " />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In Kashmir</h2>
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
