import React, { Component } from 'react';
import cancelimg from '../images/Packages/cancel-image.jpg';
import { Link } from 'react-router-dom';
import PackageTop from './PackageTop';
import chardham from '../images/CharDham/chardhamhome.jpg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import PackageDayDetail from './PackageDayDetail';
import DetailedPlace from './DetailedPlace';
import destination1 from '../images/CharDham/haridwar.jpg';
import destination2 from '../images/CharDham/mansadevi.jpg';
import destination3 from '../images/CharDham/yamunotritemple.jpg';
import destination4 from '../images/CharDham/kashivishwanath.jpeg';
import destination5 from '../images/CharDham/harsilvalley.jpg';
import destination6 from '../images/CharDham/bhagirathiriver.jpg';
import destination7 from '../images/CharDham/kedarnath3.jpg';
import destination8 from '../images/CharDham/Gaurikund.jpg';
import destination9 from '../images/CharDham/choptavalley.jpg';
import destination10 from '../images/CharDham/sonprayag.jpeg';
import destination11 from '../images/CharDham/Bheem-Pul.jpg';
import destination12 from '../images/CharDham/badrinath.jpg';
import destination13 from '../images/CharDham/laxmanjhula.jpg';
import destination14 from '../images/CharDham/ramjhula.jpg';
import TourServices from './TourServices';
import Policy from './Policy';
import TermsConditions from './TermsConditions';

const placeDetail={
    place1:{
        src:destination1,
        placename:'Har Ki Pauri',
        address:'Harkipodi, Near Krishna Dham, Kharkhari, Haridwar, Uttarakhand 249401'
    },
    place2:{
        src:destination2,
        placename:'Mansa Devi',
        address:'Haridwar, Uttarakhand 249403'
    },
    place3:{
        src:destination3,
        placename:'Yamunotri Temple',
        address:'Yamnotri Range, Uttarakhand 249141'
    },
    place4:{
        src:destination4,
        placename:'Kashi Vishwanath',
        address:'Uttarkashi, Uttarakhand 249193'
    },
    place5:{
        src:destination5,
        placename:'Harsil Valley',
        address:'Harsil, Uttarakhand 249135'
    },
    place6:{
        src:destination6,
        placename:'Bhagirathi River',
        address:'Uttarkashi, Uttarakhand 249193'
    },
    place7:{
        src:destination7,
        placename:'Kedarnath Dham',
        address:'Kedarnath, Uttarakhand 246445'
    },
    place8:{
        src:destination8,
        placename:'Gaurikund',
        address:'Gaurikund, Uttarakhand 246471'
    },
    place9:{
        src:destination9,
        placename:'Chopta Valley',
        address:'Chopta, Uttarakhand 246495'
    },
    place10:{
        src:destination10,
        placename:'Sonprayag',
        address:'Sonprayag, Uttarakhand 246471'
    },
    place11:{
        src:destination11,
        placename:'Bheem-Pul',
        address:'Bheem Pul, Mana Village, Badrinath, Uttarakhand 246422'
    },
    place12:{
        src:destination12,
        placename:'Badrinath Dham',
        address:'Badri to Mata Murti road, Badrinath, Uttarakhand 246422'
    },
    place13:{
        src:destination13,
        placename:'Laxman Jhula',
        address:'Laxman Jhula, Rishikesh, Uttarakhand 249302'
    },
    place14:{
        src:destination14,
        placename:'Ram Jhula',
        address:'Ram Jhula, Swarg Ashram, Rishikesh, Uttarakhand 249304'
    }
}

export default class CharDham extends Component {
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
        if (this.props.location.pathname === '/chardham') {
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
            <section className='chardham' style={{ backgroundColor: '#eee', overflow: 'hidden' }}>
                <div className='page-top'>
                    <PackageTop src={chardham} place='CharDham' pricerange='Rs.15,499 - Rs. 1,69,999' />
                </div>
                <div className='page-bottom'>
                    <ul className='navigation-link'>
                        <li><Link to='/' className='home-link'>Home</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/destination'>Tour Packages</Link></li>
                        <li><span>&#10095;</span></li>
                        <li><Link to='/chardham'>CharDham Packages</Link></li>
                    </ul>
                    <div className='service-image'>
                        <img src={cancelimg} alt='cancelbooking'></img>
                    </div>
                    <div className='tour-detail' id='tour-detail'>
                        <div className='tour-location'>
                            <h3>CharDham Tour Packages</h3>
                        </div>
                        <div className='place-details'>
                            <div className='description'>
                                <h1>Description</h1>
                                <p><span>About : </span>The Char Dham is a set of four pilgrimage sites in India. It is believed that visiting these sites helps achieve moksha. The four Dhams are, Badrinath, Dwaraka, Jagannath Puri and Rameswaram. It is believed that every Hindu should visit the Char Dhams during one's lifetime.</p>
                                <div style={{ marginTop: '15px' }}>
                                    <a className='view-hide-btn' id='more-btn' onClick={this.handleMoreClick}>More <span><FaAngleDown /></span></a>
                                </div>
                                <div id='hidden'>
                                    <h3>How to reach CharDham</h3>
                                    <p><span>Delhi to Haridwar: </span> Begin your journey from Delhi and cover the 210 kilometre in about 6 hours in either bus or car.</p>
                                    <p><span>Haridwar to Barkot:</span> Begin your journey by travelling to Barkot which is 200 kilometre away with the journey taking nearly 10 hours.</p>
                                    <p><span>Barkot to Gangotri: </span> Begin at the crack of dawn and head towards Gangotri which takes about 9 hours from Barkot, being 210 kilometre away.</p>
                                    <p><span>Gangotri to Uttarkashi: </span> Uttarkashi is about 95 kilometre away and you will cover the distance in about 4 hours.</p>
                                    <p><span>Uttarkashi to Sitapur: </span> Sitapur is about 212 kilometre away with the journey time being about 10 hours.</p>
                                    <p><span>Sitapur to Gaurikund to Kedarnath:  </span> Gaurikund which is a two-hour drive from Sitapur.After reaching Gaurikund, you shall begin your trek to Kedarnath which is about 14 kilometre away.</p>
                                    <p><span>Kedarnath to Rudraprayag: </span> Trek back the 14 kilometre distance from Kedarnath to Gaurikund. From Gaurikund, leave for Rudraprayag which is 75 kilometre away.</p>
                                    <p><span>Rudraprayag to Badrinath: </span> Badrinath is about 160 kilometre away, taking a drive time of nearly 8 hours.</p>
                                    <p><span>Badrinath to Birhi:  </span> The journey from Badrinath to Birhi takes nearly 5 hours, being about 95 kilometre away.</p>
                                    <p><span>Birhi to Rishikesh:  </span> Rishikesh is about 160 kilometre away, taking roughly 7 hours. </p>
                                    <p><span>Rishikesh to Delhi:   </span> After spending a night in Rishikesh, you can head back to Delhi by bus, or head to Haridwar and from the Haridwar Railway Station take an AC train back to Delhi.</p>
                                    <h3>Best Time to visit CharDham</h3>
                                    <p>The month of April, May and the first half of June have a pleasant climate as it marks the summers in the Char Dham. The monsoon months are not the Best Season to travel the Char Dham as June’s second half, July and August are prone to rainfall which may cause landslides very frequently in the Char Dham. You can also travel during the month of September, October and the mid of November for some Dhams, as winter begins with the onset of November in the Himalayas.</p>
                                    <div style={{ marginTop: '15px' }}>
                                        <a className='view-hide-btn' id='less-btn' onClick={this.handleLessClick}>Less <span><FaAngleUp /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='package-details' id='package-table'>
                            <h3>Popular CharDham Packages</h3>
                            <table className='package-table'>
                                <TableHeading />
                                <TableRow packagename='Chardham Tour Package from Haridwar' price='20,499' stay='9 Nights/ 10 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Haridwar to Barkot (210kms/7-8hr)' daydescription='Pickup from Haridwar Railway Station / Dehradun Airport / Railway Station. Drive to Barkot via Mussoorie,En-route visit Kempty Fall.Later drive straight to Barkot, transfer to your Hotel. The rest of the day is free to relax.Overnight stay at Barkot.' />
                                        <PackageDayDetail span='Day 2 - Barkot to Yamunotri – Barkot {36kms drive &amp; 5 kms Trek (one side)}' daydescription='Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (6kms). Either by walk or by horse or by Doli at own cost. The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs.' />
                                        <PackageDayDetail span='Day 3 - Barkot to Uttarkashi (90kms/4hr)' daydescription='Drive to Uttarkashi. Visit Vishwanath Temple &amp; Others. Check-in Hotel. Rest day at leisure. Night Halt.' />
                                        <PackageDayDetail span='Day 4 - Uttarkashi to Gangotri to Uttarkashi (100kms/3-4 each side) ' daydescription='Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley.On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Return back to Uttarkashi. Overnight stay at Uttarkashi.' />
                                        <PackageDayDetail span='Day 5 - Uttarkashi to Guptkashi (220kms/8-9hr)' daydescription='Drive straight to Guptkashi via Moolgarh &amp; Lambgoan. En route, you can see the beautiful river Mandakini at Tilwara. On arrival Check-In at the Hotel, evening visit Ardh Narishwar Temple. Overnight stay at the Hotel.' />
                                        <PackageDayDetail span='Day 6 - Guptkashi to Kedarnath (30kms by road &amp; 19kms Trek)' daydescription='Morning after breakfast departure for Kedarnath dham. Enjoy Kedarnath Darshan &amp; back your hotel. Overnight stay at Kedarnath.You can visit Kedarnath either by treking or by Helicopter(helicopter ticket is not included in this package).By trek, in morning our driver will drop you at Sonprayag then you have to take local jeep for Gaurikund &amp; then your trek strat for Kedarnath Ji. After darshan, you follow same &amp; back to Sonpraag.' />
                                        <PackageDayDetail span='Day 7 - Kedarnath to Guptkashi (19Kms Trek &amp; 30kms/1hr by Road)' daydescription='Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the ‘Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostrate with your head touching the deity etc. After Temple Darshan trek down to Sonprayag. Further drive to Guptkashi. Check-in Hotel. Night Halt.' />
                                        <PackageDayDetail span='Day 8 - Guptkashi to Badrinath (215kms/7hr)' daydescription='Morning after breakfast, drive to Badrinath. Check in to the hotel arrival in Badrinath. Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal &amp; Aarti in the evening.There is another interesting sightseeing spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River. Just within the three km of Badrinathjee. Overnight stay at Badrinath.' />
                                        <PackageDayDetail span='Day 9 - Badrinath to Rudraprayag (160kms) / Kirtinagar (200kms)' daydescription='Early morning, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus).Drive back to Rudraprayag / Kirtinagar via Joshimath. Check-in Hotel. Overnight stay.' />
                                        <PackageDayDetail span='Day 10 - Rudraprayag to Rishikesh to Haridwar  (160kms/5hr) /  Kirtinagar to Rishikesh to Haridwar (135kms/4hr)' daydescription='Drive to Rishikesh, the ‘place of sages’ is a celebrated spiritual town on the bank of Ganga and is surrounded by the Shivalik range of the Himalayas on three sides.Later transfer to Haridwar Railway Station / Dehradun Airport.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Chardham Yatra Package from Delhi' price='22,650' stay='10 Nights/ 11 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Delhi to Haridwar (220Kms / 6-7hr)' daydescription='Meet our driver at Delhi airport /station/hotel/home and drive to Haridwar. Check into the hotel arrival in Haridwar. Evening visit Mansa Devi Temple &amp; Ganga aarti at Har Ki Pauri. Overnight stay at Haridwar.' />
                                        <PackageDayDetail span='Day 2 - Haridwar to Barkot (210kms/6-7hr)' daydescription='Barkot via Mussoorie, En route visit Mussoorie Lake &amp; Kempty Fall in Mussoorie. Later drive straight to Barkot. Check into the hotel arrival in Barkot. Overnight stay at Barkot.' />
                                        <PackageDayDetail span='Day 3 - Barkot to Yamunotri to Barkot {36kms drive &mp; 5 kms Trek (one side)}' daydescription='Early morning after breakfast, drive to Jankichatti / Phoolchatti &amp; star trek from here to Yamunotri (Either by walk or by horse or by Doli at own cost). After taking bath in Jamunabai Kund’s warm water and having “Darshan” of “Yamunaji” return to Jankichatti by trek. Later drive towards Barkot, Overnight stay at Barkot.' />
                                        <PackageDayDetail span='Day 4 - Barkot to Uttarkashi (100kms/4hr)' daydescription='Morning after breakfast, drive to Uttarkashi. Check into the hotel arrival in Uttarkashi. Visit Kashi Vishwanath Temple in Uttarkashi. Overnight stay at Uttarkashi.' />
                                        <PackageDayDetail span='Day 5 - Uttarkashi to Gangotri to Uttarkashi (100kms/3-4 each side)' daydescription='Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil Valley.On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Later drive back to Uttarkashi. Overnight stay at Uttarkashi.' />
                                        <PackageDayDetail span='Day 6 - Uttarkashi to Guptkashi (220kms/8-9hr)' daydescription='Morning after breakfast, drive to Guptkashi via Moolgarh &amp; Lambgoan. En route, you can see the beautiful river Mandakini at Tilwara.Check into the hotel arrival in Guptakashi. Overnight stay at Guptakashi.' />
                                        <PackageDayDetail span='Day 7 - Guptkashi to Kedarnath to Guptkashi (30kms by road &amp; 19kms Trek one way) ' daydescription='Morning after breakfast departure for Kedarnath dham. Enjoy Kedarnath Darshan &amp; back your hotel. Overnight stay at Kedarnath.You can visit Kedarnath either by treking or by Helicopter(helicopter ticket is not included in this package).By trek, in morning our driver will drop you at Sonprayag then you have to take local jeep for Gaurikund &amp; then your trek strat for Kedarnath Ji. After darshan, you follow same &amp; back to Sonpraag.' />
                                        <PackageDayDetail span='Day 8 - Guptkashi to Badrinath (160kms/7hr)' daydescription='Morning after breakfast, drive to Badrinath. Check in to the hotel arrival in Badrinath.Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal &amp; Aarti in the evening.There is another interesting sightseeing spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund, and the “Mukh” of the Saraswati River. Just within the three km of Badrinathjee. Overnight stay at Badrinath.' />
                                        <PackageDayDetail span='Day 9 - Badrinath to Joshimath to Rudraprayag (160kms/7hr) ' daydescription='Morning after breakfast, a driver for Rudraprayag via Joshimath.Check into the hotel arrival in Rudraprayag. Overnight stay at Rudraprayag.' />
                                        <PackageDayDetail span='Day 10 - Rudraprayag to Haridwar (165kms/5-6hr)' daydescription='Morning after breakfast, drive for Haridwar via Rishikesh. Check-in Hotel. Later visit Rishikesh Temples &amp; Sight Seeing – Laxman Jhulla, Ram Jhulla. Overnight stay at Haridwar.' />
                                        <PackageDayDetail span='Day 11 - Haridwar to Delhi (220Kms / 6-7hr)' daydescription='Morning after breakfast, drive for Delhi. Dropping at Delhi airport / station / home / hotel.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                                <TableRow packagename='Chardham Helicopter Package from Dehradun' price='1,69,000' stay='4 Nights/ 5 Days' />
                                <tr className='toggle'>
                                    <td colSpan={this.state.colSpan}>
                                        <PackageDayDetail span='Day 1 - Dehradun To Yamunotri' daydescription='Departure from Sahastradhara Helipad, Dehradun.Arrival at Kharsali helipad, Yamunotri.Then, trek (Palki) 6 kms to Yamunotri, Darshan &amp; Return back.Lunch at Kharsali.Visit toShani temple (winter seat of Yamunotri).Overnight stay at hotel in Kharsali.' />
                                        <PackageDayDetail span='Day 2 - Yamunotri To Gangotri' daydescription='Morning after breakfast, departure from Yamunotri Helipad to Harsil Helipad.Then, drive to Gangotri temple 22 kms and have darshan at Gangotri Temple.After darshan return to Harsil.After arival at Harsil Lunch &amp; Day at leisure in Harsil valley.Overnight stay at hotel in Harsil.' />
                                        <PackageDayDetail span='Day 3 - Yamunotri To Kedarnath' daydescription='Morning after breakfast, departure from Harsil Helipad to Kedarnath Helipad.On arival,perform Pooja &amp; Darshan at Kedarnath.After darshan, departure to Guptkashi and have lunch there.After lunch, Visit to ancient Triyuginarayan temple &amp; day at leisure in Guptkashi.Overnight stay at hotelin Guptkashi.' />
                                        <PackageDayDetail span='Day 4 - Kedarnath to Badrinath' daydescription='After breakfast, departure from Kedarnath / Guptkashi helipad to Badrinath Helipad.After arival perfrom Pooja &amp; Darshan at Badrinath.After darshan lunch at Hotel Sarovar Portico.After lunch,visit to Mana village &amp; Day at leisure in Badrinath.Overnight stay at Badrinath.' />
                                        <PackageDayDetail span='Day 5 - Maha Abhishek Pooja &amp; Return to Dehradun' daydescription='In morning, 2 Hrs Maha Abhishek Pooja in Badrinath Temple. After pooja, departure from Badrinath helipad to Sahastradhara helipad , Dehradun.' />
                                    </td>
                                    <td>
                                        <button className='book-btn'>Book Now</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='tour-places'>
                        <h2>Popular Places In CharDham</h2>
                        <div className='place-to-visit'>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place1}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place2}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place3}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place4}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place5}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place6}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place7}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place8}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place9}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place10}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place11}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place12}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place13}/>
                            </div>
                            <div className='tour-card'>
                                <DetailedPlace {...placeDetail.place14}/>
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