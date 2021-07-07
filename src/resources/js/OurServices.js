import React, { Component } from 'react';
import servicehome from '../images/Services/servicehome.png';
import '../css/OurServices.css';
import tick from '../images/Services/tick.png';
import ServiceDetailCard from './ServiceDetailCard';
import optimization from '../images/Services/experience.jpg';
import tecsupport from '../images/Services/tecsupport.jpg';
import ProvidedServiceCard from './ProvidedServiceCard';
import faq from '../images/Services/faq.jpg';
import { FaBed, FaPlaneDeparture, FaCar, FaTrain, FaClipboardList, FaBus } from 'react-icons/fa';

export default class OurServices extends Component {
    componentDidMount() {
        var plusbtn = document.getElementsByClassName('plus');
        var minusbtn = document.getElementsByClassName('minus');
        var togglecontent = document.getElementsByClassName('faq-answer');
        for (let j = 0; j < togglecontent.length; j++) {
            plusbtn[j].addEventListener('click', () => {
                //rest of the content will hide
                for (let i = 0; i < togglecontent.length; i++) {
                    togglecontent[i].style.display = 'none';
                    plusbtn[i].style.display = 'block';
                    minusbtn[i].style.display = 'none';
                }
                //only the content of which btn is clicked will show
                togglecontent[j].style.display = 'block';
                plusbtn[j].style.display = 'none';
                minusbtn[j].style.display = 'block';
            })
            minusbtn[j].addEventListener('click', () => {
                //hide contnet
                togglecontent[j].style.display = 'none';
                plusbtn[j].style.display = 'block';
                minusbtn[j].style.display = 'none';
            })
        }
        if(this.props.location.pathname==='/ourservices'){
            var servicelink = document.getElementById("service-link");
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace('active', '');
            servicelink.className += 'active';
        }
    }
    render() {
        return (
            <section className='our-service'>
                <div className='our-service-top'>
                    <div className='our-service-intro'>
                        <h1>What we can do for you</h1>
                        <p>We focus that investment where it matters most to our partners; developing products and services to grow their business and better serve their travelers.</p>
                    </div>
                    <div className='our-service-image'>
                        <img src={servicehome} alt='service'></img>
                    </div>
                </div>
                <div className='our-service-container'>
                    <div className='our-service-detail'>
                        <div className='left'>
                            <h1>Expertise in Diverse Business Verticals</h1>
                            <div className='bottom-line'></div>
                            <div className='support-detail'>
                                <div className='support-title'>
                                    <img src={tick} alt='tick'></img>
                                    <h2>Partner services</h2>
                                </div>
                                <div className='support-des'>
                                    <p>We don't just give you the access to our supply and wish you all the best. We are invested in long term success.</p>
                                </div>
                            </div>
                            <div className='support-detail'>
                                <div className='support-title'>
                                    <img src={tick} alt='tick'></img>
                                    <h2>Customer Support</h2>
                                </div>
                                <div className='support-des'>
                                    <p>Give our travelers great experiences with exceptional customer service. Make our suppliers work for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='our-service-detail'>
                        <div className='service-card'>
                            <ServiceDetailCard src={optimization} title='Optimization specialist' detail='Your optimization specialist will work with your team to keep your integration effective.' />
                        </div>
                    </div>
                    <div className='our-service-detail'>
                        <div className='service-card'>
                            <ServiceDetailCard src={tecsupport} title='Technical support' detail='If you have technical queries, our helpdesk is on hand to advise and troubleshoot.' />
                        </div>
                    </div>
                </div>
                <div className='provided-service'>
                    <div className='service-title'>
                        <h1>One Stop for All Travel Solutions</h1>
                        <hr />
                        <p>Take your existing travel business online or expand the services you provide or start a new travel business.</p>
                    </div>
                    <div className='service-icons'>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaBed />} title='Hotel Booking' detail='8,50,000+ inventories aggregated from multiple Bedbanks, OTA and GDS.' background='#ece6fc' color='#3F51B5' />
                        </div>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaPlaneDeparture />} title='Flight Booking' detail='950+ Airlines aggregated from multiple OTA and GDS. IATA not mandatory.' background='#fddcec' color='#c1206e' />
                        </div>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaCar />} title='Car Rnetals' detail='Partnered with world’s leading B2B transport solutions.' background='#fce8d1' color='#ff9800' />
                        </div>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaTrain />} title='Transfers' detail='Pre-booked airport taxis for easy transfers to and from the airport.' background='#cff2e6' color='#009688' />
                        </div>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaClipboardList />} title='Things to do' detail='Sell tickets and excursions online with instant confirmation voucher.' background='#F7DCF7' color='#F6ADF6' />
                        </div>
                        <div className='icon'>
                            <ProvidedServiceCard icon={<FaBus />} title='Bus Booking' detail='Book Bus tickets with redBus India and find the 70K+ routes 2300+ Operators.' background='#dbedf9' color='#3590d0' />
                        </div>
                    </div>
                </div>
                <div className='faq'>
                    <img src={faq} alt='faq'></img>
                    <div className='faq-detail'>
                        <div className='faq-title'>
                            <h1>Commonly Asked Questions</h1>
                            <hr />
                            <p>Our methodical approach is focused on revealing the essence of each design challenge to allow us.</p>
                        </div>
                        <div className='faq-question'>
                            <div className='question'>
                                <h4>What is your refund policy?</h4>
                                <button className='plus'>+</button>
                                <button className='minus'>-</button>
                            </div>
                            <div className='answer'>
                                <p className='faq-answer'>We offer 100% refund if requested within 72 hours and partial refund depending on the scenario if the setup is initiated.</p>
                            </div>
                        </div>
                        <div className='faq-question'>
                            <div className='question'>
                                <h4>What Travel Documents Do I Need ?</h4>
                                <button className='plus'>+</button>
                                <button className='minus'>-</button>
                            </div>
                            <div className='answer'>
                                <p className='faq-answer'>Any Identity Proof such as Adhar Card, Passport, Drivers Licence, Voter Id and Pan Card.</p>
                            </div>
                        </div>
                        <div className='faq-question'>
                            <div className='question'>
                                <h4>Do I Need Medical/travel Insurance ?</h4>
                                <button className='plus'>+</button>
                                <button className='minus'>-</button>
                            </div>
                            <div className='answer'>
                                <p className='faq-answer'>Yes. It is advisable that you buy a comprehensive medical / travel insurance in advance from your country before travelling to India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
