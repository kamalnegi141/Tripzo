import React, { Component } from 'react';
import jaipur from '../images/Jaipur/Jaipuroverview.jpg';
import '../css/TourDetail.css';
import '../css/TourServices.css';
import DetailedPlace from './DetailedPlace';
import place1 from '../images/Jaipur/amberfort.jpg';
import place2 from '../images/Jaipur/city palace.jpg';
import place3 from '../images/Jaipur/hawamahal.jpg';
import place4 from '../images/Jaipur/jal mahal1.jpg';
import place5 from '../images/Jaipur/nahargharfort.jpg';
import place6 from '../images/Jaipur/mehrangarhfort.jpg';
import place7 from '../images/Jaipur/balsamandlake.jpg';
import place8 from '../images/Jaipur/jaisalmerdesert.jpg';
import place9 from '../images/Jaipur/mountabu.jpg';
import place10 from '../images/Jaipur/motimagri.jpg';
import place11 from '../images/Jaipur/lokkalamandal.jpg';
import PackageTop from './PackageTop.js';
import { Link } from 'react-router-dom';
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
        placename: 'Amber Fort',
        address: 'Delhi Road, Amber City, Jaipur, Rajasthan 302001, India'
    },
    destination2: {
        src: place2,
        placename: 'City Palace',
        address: 'Kanwar Nagar, Pink City, Jaipur, Rajasthan 302002, India'
    },
    destination3: {
        src: place3,
        placename: 'Hawa Mahal',
        address: 'Hawa Mahal Road, Badi Choupad, Pink City, Jaipur, Rajasthan 302002, India'
    },
    destination4: {
        src: place4,
        placename: 'Jal Mahal',
        address: 'Amer Rd, Jal Mahal, Amer, Jaipur, Rajasthan 302002, India'
    },
    destination5: {
        src: place5,
        placename: 'Naharghar Fort',
        address: 'Aravali Hills, Amer Road, Jaipur, Rajasthan 302002, India'
    },
    destination6: {
        src: place6,
        placename: 'Mehrangarh Fort',
        address: 'Sodagaran Mohalla, Jodhpur, Rajasthan, 342006, India'
    },
    destination7: {
        src: place7,
        placename: 'Balsamand Lake',
        address: 'Mandore Road, Jodhpur, Rajasthan 342007, India'
    },
    destination8: {
        src: place8,
        placename: 'Jaisalmer Desert Safari',
        address: 'Jaisalmer Desert Safari Camps , Kanoi, Jaisalmer, Rajasthan 342007, India'
    },
    destination9: {
        src: place9,
        placename: 'Mount Abu Sunset Point',
        address: 'Anadara Road, Mount Abu, Rajasthan 307501, India'
    },
    destination10: {
        src: place10,
        placename: 'Moti Magri',
        address: 'Moti Magri, Udaipur, Rajasthan'
    },
    destination11: {
        src: place11,
        placename: 'Bhartiya Lok Kala Mandal',
        address: 'Near Chetak Cir, Udaipur, Rajasthan 313001, India'
    }
}
export default class Rajasthan extends Component {
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
        if (this.props.location.pathname === '/rajasthan') {
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
            <section className='jaipur' style={{ backgroundColor: '#eee', overflow: 'hidden' }}>
                <div className='page-top'>
                    <PackageTop src={jaipur} place='Rajasthan' pricerange='Rs.17,999 - Rs. 26,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/rajasthan'>Rajasthan Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>Rajasthan Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>Rajasthan is a state in northern India. The state covers an area of 342,239 square kilometres or 10.4 percent of the total geographical area of India. It is the largest Indian state by area and the seventh largest by population.</p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach Jaipur</h3>
                                    <p><span>Air : </span>The Jaipur International Airport is about 10 kilometre from the Jaipur city centre. The airport is well-connected by flights to major metros of the country.</p>
                                    <p><span>Train : </span>Jaipur Junction is connected by trains to Mumbai, Delhi, Ahmedabad, Kota, Ajmer, Kanpur, Indore, Gwalior, Agra, Alwar, Jodhpur, Chittorgarh, Udaipur, Bikaner, Barmer, Jammu, Jaisalmer, Ludhiana, Kolkata, Pathankot, Haridwar, Roorkee, Jabalpur, Bhopal.The special luxury train, Palace on Wheels connects Delhi with various destinations in Rajasthan such as Jaipur, Jodhpur, Alwar, Jhalawar, Udaipur among others.</p>
                                    <p><span>Bus : </span> Jaipur is connected to the major cities of India through a wide network of National Highways which include NH8, 11 and 12. RSRTC (Rajasthan State Road Transport Corporation) offers a fleet of Volvo AC semi-sleeper and sleeper buses between Delhi and Jaipur.</p>
                                    <h3>Best Time to visit Jaipur</h3>
                                    <p>Jaipur is a dry, semi-desert region with three dominant seasons - a dry winter, a very dry and scorching summer and a short but intense monsoon. Expectedly, the best time to visit Jaipur remains the winter months beginning November through February when the tourist footfalls are also the highest owing to the warm sunshine through the day and cold that sets in at nightfall.</p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Rajasthan Packages</h3>
                        </div>
                        <table className='package-table'>
                            <TableHeading />
                            <TableRow packagename='Colourful Rajasthan' price='26,999' stay='7 Nights/ 8 Days' />
                            <tr className='toggle'>
                                <td colSpan={this.state.colSpan}>
                                    <PackageDayDetail span='Day 1 - Pink City sightseeing' daydescription='After your arrival at the Jaipur airport/railway station, head to the hotel and check in. After freshening up, set out to sightsee Jaipur. Visit the Amber Fort, Jaigarh Fort, Nahargarh Fort, Jal Mahal and the Birla Mandir. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 2 - Jodhpur Sightseeing' daydescription='Have a delicious breakfast at the hotel and head to Jodhpur. Visit the Mehrangarh Fort, Balsamand Lake, Sachchiya Mata Temple, Umaid Bhawan Palace Museum and the local market in Jodhpur. Retire for the night at the hotel.' />
                                    <PackageDayDetail span='Day 3 - Jodhpur Sightseeing and Jaisalmer Visit' daydescription='After breakfast at the hotel, you will set out for Jodhpur sightseeing. In the evening, proceed to Jaisalmer and visit the Jaisalmer Fort and the local market. Have a comfortable overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 4 - Jaisalmer sightseeing and Desert Visit' daydescription='After breakfast at the hotel, set out for Jaisalmer sightseeing. In the early evening, proceed to the Jaisalmer desert for camel safari and a folk-dance performance. Dinner and overnight stay at the camp.' />
                                    <PackageDayDetail span='Day 5 - Mount Abu visit' daydescription='After breakfast at the camp, head to Mount Abu and once you reach, visit the Nakki Lake, Dilwara Temple, Achalgarh Fort and the Sunset Point in Mount Abu. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 6 - Mount Abu sightseeing and Udaipur visit' daydescription='After a scrumptious breakfast at the hotel, set for sightseeing Mount Abu. Then you will depart from Mount Abu to Udaipur. Visit the City Palace, Pichola Lake and the local market in Udaipur. Have a pleasant overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 7 - Udaipur sightseeing.' daydescription='After breakfast at the hotel, set out for a full day sightseeing of Udaipur. You will visit the Moti Magri, Bhartiya Lok Kala Mandal, Fateh Sagar Lake and the Jagdish Temple. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 8 - Departure' daydescription='After breakfast at the hotel, proceed to the Udaipur airport/railway station or head to Jaipur and transfer to the Jaipur airport/railway station for your departure.' />
                                </td>
                                <td>
                                    <button className='book-btn'>Book Now</button>
                                </td>
                            </tr>
                            <TableRow packagename="India's Best Seller Golden Triangle 2021-2022" price='18,999' stay='4 Nights/ 5 Days' />
                            <tr className='toggle'>
                                <td colSpan={this.state.colSpan}>
                                    <PackageDayDetail span='Day 1 - Delhi - Arrival/Sightseeing' daydescription='Arrive at Delhi Airport and then take transfers to the pre-booked hotel.Check-in at the hotel and then visit Jama Masjid, Chandni Chowk, Fatehpuri Masjid and try a rickshaw ride till the Red Fort. Rajghat would be our next stop where Mahatma Gandhi was cremated, pay your homage here.Also, see the Humayun Tomb and drive past Rashtrapati Bhawan -the residence of the President of India and then see the India Gate. Qutub Minar is next on the list Return to the hotel for the night.' />
                                    <PackageDayDetail span='Day 2 - Delhi - Agra' daydescription='Relish a hearty breakfast and then later drive to Agra.On arrival, get assistance to transfer to the hotel for check-in. Freshen up and then start for Agra Fort. Later, see the Itmad ud Daula. In the evening, enjoy a tonga ride &amp; visit the Taj Mahal at sunset. Overnight in the hotel.' />
                                    <PackageDayDetail span='Day 3 - Agra - Jaipur' daydescription='Early morning, post breakfast, head towards Jaipur. En-route, visit the 16 century AD city Fatehpur Sikri. Also, see the Panch Mahal, Buland Darwaza and Dargah of Sheikh Salim Chisti. Continue to journey to Jaipur. Upon arrival, check-in to the hotel. Overnight stay in Jaipur.' />
                                    <PackageDayDetail span='Day 4 - Jaipur Sightseeing' daydescription="In the morning, eat a delightful breakfast and then visit the Amer Fort by riding on an Elephant's back. In the afternoon, you will go on a sightseeing tour. See the City Palace and museum along with an expert guide. The sightseeing tour will also cover Hawa Mahal and Jantar Mantar. Also, check out the Jag Mandir, Sheesh Mahal (Hall of Mirrors) the Hall of Victory, Jal Mahal and the Kali Temple. Enjoy a comfortable overnight stay in Jaipur." />
                                    <PackageDayDetail span='Day 5 - Depart to New Delhi' daydescription='On the last day of the trip, proceed to Delhi for your onward journey back home.' />
                                </td>
                                <td>
                                    <button className='book-btn'>Book Now</button>
                                </td>
                            </tr>
                            <TableRow packagename='Royalty In Rajasthan' price='19,250' stay='6 Nights/ 7 Days' />
                            <tr className='toggle'>
                                <td colSpan={this.state.colSpan}>
                                    <PackageDayDetail span='Day 1 - Arrival in Jaipur' daydescription='On arrival in Jaipur, transfer to the hotel. Check-in to the hotel and freshen up. Later, set out for touring the city. You will begin with a visit to the City Palace, followed by Chandra Mahal and Shri Govind Deo Temple. Make sure you visit the museum while in the City Palace. You can also visit the Jantar Mantar observatory. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 2 - Jaipur Sightseeing' daydescription='After breakfast, leave for a sightseeing tour around Jaipur. The first attraction on your itinerary is the Amber Fort which is located around 14 kilometers away from Jaipur. On your way, you will visit the Hawa Mahal and then go shopping in the colorful markets of Jaipur. In the evening, you can go for a drive through the city and visit the famous Laxmi Narayan Mandir. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 3 - Jaipur - Bikaner (335 km / 5 hours 15 minutes)' daydescription='Savor a filling breakfast and drive to Bikaner. Arrive and check in at the hotel. Later, visit the Junagarh Fort, a camel breeding farm and the famous Karni Mata Temple at Deshnoke. Have a comfortable night stay at the hotel.' />
                                    <PackageDayDetail span='Day 4 - Bikaner - Jaisalmer (330 km/ 5 hours 30 minutes)' daydescription='After a delicious breakfast, drive to Jaisalmer. Arrive and check in at the hotel. Later, visit the Gadisagar Lake and Bada Bagh. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 5 - Jaisalmer Camp Stay' daydescription="After breakfast, visit the Jaisalmer Fort and marvel at its 'Surya Gate'. Proceed to visit the Khaba Fort, which has a spooky and fascinating story associated with it. In the evening, visit the sand dunes of Jaisalmer. Check in at the desert camp. Enjoy camp activities like camel safari, Rajasthani cultural programs and the famous Kalbelia dance. Spend a pleasant night at the camp." />
                                    <PackageDayDetail span='Day 6 - Jaisalmer - Jodhpur (290 km/ 5 hours)' daydescription='After breakfast, drive to Jodhpur. Arrive and check in at the hotel. In the afternoon visit the Mehrangarh Fort and Jaswant Thada. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 7 - Jodhpur - Jaipur (338 km/ 5 hours 45 minutes)' daydescription='After a scrumptious breakfast in the morning, check out from the hotel and drive to Jaipur for your journey back to your hometown.' />
                                </td>
                                <td>
                                    <button className='book-btn'>Book Now</button>
                                </td>
                            </tr>
                            <TableRow packagename='Lovely Rajasthan' price='17,999' stay='5 Nights/ 6 Days' />
                            <tr className='toggle'>
                                <td colSpan={this.state.colSpan}>
                                    <PackageDayDetail span='Day 1 - Pink City Visit' daydescription='After your arrival at the Jaipur airport/railway station, proceed to and check in at the hotel. Freshen up and then proceed for a full day Jaipur sightseeing which includes places like the Jal Mahal, Birla Mandir, Amber Fort, Jaigarh Fort and the Nahargarh Fort. Have a comfortable overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 2 - Jodhpur Visit' daydescription='Have a scrumptious breakfast at the Jaipur hotel and then proceed to Jodhpur. On arrival in Jodhpur, visit the Mehrangarh Fort, Balsamand Lake, Sachchiya Mata Temple and the local market. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 3 - Jodhpur Sightseeing and Mount Abu visit' daydescription='After breakfast at the hotel, set out for sightseeing Jodhpur. In the evening, depart from Jodhpur to Mount Abu. Visit the Nakki Lake, Dilwara Temples, Achalgarh Fort and the Sunset Point in Mount Abu. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 4 - Mount Abu sightseeing and Udaipur visit' daydescription='Have breakfast at the hotel and proceed for Mount Abu sightseeing. In the evening, you will leave for Udaipur. Once in Udaipur, you will visit the City Palace, Lake Pichola and the Jagdish Temple. Have a pleasant overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 5 - Udaipur sightseeing.' daydescription='After a delicious breakfast at the hotel, proceed for a full day sightseeing of Udaipur. You will be visiting the Bhartiya Lok Kala Mandal, Moti Magri and the Fateh Sagar Lake. Overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 6 - Departure' daydescription='After breakfast at the hotel, head to the airport for your flight or proceed from Udaipur to the airport/railway station in Jaipur for departure.' />
                                </td>
                                <td>
                                    <button className='book-btn'>Book Now</button>
                                </td>
                            </tr>
                            <TableRow packagename='Beautiful Rajasthan' price='20,999' stay='6 Nights/ 7     Days' />
                            <tr className='toggle'>
                                <td colSpan={this.state.colSpan}>
                                    <PackageDayDetail span='Day 1 - Jaipur Sightseeing.' daydescription='Arrive at the airport/railway station in Jaipur and proceed to check into your hotel. Freshen up and proceed for Jaipur sightseeing. Visit the Amber Fort, Jaigarh Fort, Nahargarh Fort and Chokhi Dhani.' />
                                    <PackageDayDetail span='Day 2 - Jodhpur Sightseeing' daydescription='After a delicious breakfast at the hotel, depart from Jaipur to Jodhpur and check into the hotel. After freshening up, head out for Jodhpur sightseeing by visiting Jaswant Thada, Kaylana Lake, Mehrangarh Fort, Balsamand Lake and the Sachchiya Mata Temple. If all the points are not covered on this day, the remaining ones will be covered the next day.' />
                                    <PackageDayDetail span='Day 3 - Jaisalmer Sightseeing' daydescription='After breakfast at the hotel, head for Jodhpur sightseeing and in the evening, depart from Jodhpur to Jaisalmer. Check into the hotel and freshen up. Then head out for and visit the Gadisar Lake, First Fort Gate, Jain temples, Salim Singh ki Haveli, Nathmal ki Haveli, Jaisalmer Folklore Museum and the Jaisalmer Fort. If all the points are not covered on this day, the remaining ones will be covered the next day.' />
                                    <PackageDayDetail span='Day 4 - Jaisalmer Desert Visit' daydescription='Have a wholesome breakfast at the hotel and head out for Jaisalmer sightseeing. In the evening, proceed to the Jaisalmer desert for a camel safari and a folk dance performance. Dinner and overnight stay at the camp.' />
                                    <PackageDayDetail span='Day 5 - Bikaner Visit' daydescription='After a scrumptious breakfast at the Desert Camp, depart from Jaisalmer to Bikaner and check into the hotel. After freshening up, visit the market, Lalgarh Palace and Museum, Gajner Lake, Ganga Singh Museum, th National Research Centre on Camel, Bhandasar Jain Temple and the Junagarh Fort. Have a pleasant overnight stay at the hotel.' />
                                    <PackageDayDetail span='Day 6 - Bikaner sightseeing and departure to Jaipur' daydescription='Relish a wholesome breakfast at the hotel and set out for Bikaner sightseeing. In the evening, proceed from Bikaner to Jaipur and check into the hotel. Visit the Jal Mahal and the Birla Mandir. Retire for the night at the hotel.' />
                                    <PackageDayDetail span='Day 7 - Departure' daydescription='After breakfast at the hotel, head to the airport/railway station for departure.' />
                                </td>
                                <td>
                                    <button className='book-btn'>Book Now</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In Rajasthan</h2>
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
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination7} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination8} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination9} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination10} />
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.destination11} />
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
