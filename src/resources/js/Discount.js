import React, { Component } from 'react'
import DiscountCard from './DiscountCard';
import '../css/Discount.css';
import { Link } from 'react-router-dom';

const cardOptions = {
    card1: {
        packagedetail: 'Package Starting @',
        price: '11,999(PP)',
        info: 'On Goa Holidays',
        backgroundcolor: 'rgba(161, 243, 154 , 0.1)'
    },
    card2: {
        packagedetail: 'Early Bird Discount',
        price: '14,499(PP)',
        info: 'On Jaipur Holidays',
        border: '1px solid rgba(164, 189, 242 , 0.8)'
    },
    card3: {
        packagedetail: 'Himanchal is now open!',
        price: '7,999(PP)',
        info: 'On Holidays',
        backgroundcolor: 'rgba(193, 245, 237 , 0.25)',
        border: '1px solid rgba(105, 245, 224 ,0.7)'
    },
    card4: {
        packagedetail: 'Chardham By Helicopter',
        price: '1,49,999',
        info: 'On Domestic Holidays',
        backgroundcolor: 'rgba(245, 176, 238 , 0.2)',
        border: '1px solid rgba(164, 189, 242 , 0.8)'
    },
    card5: {
        packagedetail: 'Manali is Pleased To Have You',
        price: '8,499(PP)',
        backgroundcolor: 'rgba(161, 243, 154 , 0.1)',
        border: '1px solid rgba(105, 245, 224 ,0.7)'
    },
    card6: {
        packagedetail: 'Kerala is now Open',
        price: '12,999(PP)',
        info: 'On Holidays',
        backgroundcolor: 'rgba(193, 245, 237 , 0.25)',
    },
    card7: {
        packagedetail: 'Weekend Getaways',
        price: '5,999',
        info: 'On Holidays',
        backgroundcolor: 'rgba(245, 176, 238 , 0.2)',
        border: '1px solid rgba(164, 189, 242 , 0.8)'
    }
}
export default class Discount extends Component {
    componentDidMount() {
        const prev = document.getElementById('left');
        const next = document.getElementById('right');
        const track = document.getElementById('track');
        const cardWidth = document.getElementById('card').offsetWidth;
        const carouselwidth=document.getElementById("carousel-container").offsetWidth;
        const cardstoview=Math.floor(carouselwidth/cardWidth);
        const scrollWidth = cardWidth;
        let index = 0;
        const totalCards = document.getElementsByClassName('card-container').length;
        const hideindex = totalCards - cardstoview;
        if (index === 0) {
            prev.style.visibility = 'hidden';
        }
        next.addEventListener('click', () => {
            index++;
            track.style.transform = `translateX(-${index * scrollWidth}px)`;
            if (index === hideindex) {
                next.style.visibility = 'hidden';
            }
            if (index > 0) {
                prev.style.visibility = 'visible';
            }

        })
        prev.addEventListener('click', () => {
            index--;
            track.style.transform = `translateX(-${index * scrollWidth}px)`;
            if (index < 3) {
                next.style.visibility = 'visible';
            }
            if (index === 0) {
                prev.style.visibility = 'hidden';
            }
        })
    }
    render() {
        return (
            <section className='discount'>
                <div className='discount-top'>
                    <h2>Holiday Discounts For You
                        <Link to='/package' id='package-link'>VIEW ALL</Link></h2>
                </div>
                <div id='carousel-container'>
                    <div className='arrows'>
                        <span className='left-arrow' id='left'>&#10094;</span>
                        <span className='right-arrow' id='right'>&#10095;</span>
                    </div>
                    <div className='carousel-inner'>
                        <div id='track'>
                            <div className='card-container' id='card'>
                                <DiscountCard  {...cardOptions.card1} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard   {...cardOptions.card2} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard {...cardOptions.card3} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard {...cardOptions.card4} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard {...cardOptions.card5} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard {...cardOptions.card6} />
                            </div>
                            <div className='card-container'>
                                <DiscountCard {...cardOptions.card7} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
