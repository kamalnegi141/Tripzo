import React, { Component } from 'react';
import '../css/Packages.css';
import PackageCard from './PackageCard';
import package1 from '../images/Packages/goapackage.jpeg';
import package2 from '../images/Packages/chardhampackage.jpg';
import package3 from '../images/Packages/ladakpackage.jpg';
import package4 from '../images/Packages/himachalpackage.jpg';
import package5 from '../images/Packages/cancellation.jpg';
import package6 from '../images/Packages/jaipurpackage.jpeg';

const cardDetails={
    card1:{
        src:package1,
        location:'Goa Packages',
        price:'Starting at ₹ 9,999 Per Person',
        validity:'July 31, 2021'
    },
    card2:{
        src:package2,
        location:'CharDham Packages',
        price:'Starting at ₹ 1,59,999 Per Person',
        validity:'Aug 30, 2021',
        navigateTo:'/chardham'
    },
    card3:{
        src:package3,
        location:'Ladak Package',
        price:'Starting at ₹ 35,999 Per Person',
        validity:'Sep 30, 2021'
    },
    card4:{
        src:package4,
        location:'Himanchal Packages',
        price:'Starting at ₹ 6,499 Per Person',
        validity:'Jun 30, 2021'
    },
    card5:{
        src:package5,
        location:'Book Your Holiday With Confidence',
        validity:'Jun 30, 2021'
    },
    card6:{
        src:package6,
        location:'Jaipur Packages',
        price:'Starting at ₹ 8,499 Per Person',
        validity:'July 31, 2021'
    }
}
export default class Packages extends Component {
    render() {
        window.scrollTo(0,0);
        return (
            <section className='package' id='package'>
                <div className='package-title'>
                    <h1>Great Offers &amp; Amzing Deals</h1>
                </div>
                <div className='package-container'>
                    <h3>Holiday Offers call 0123-4567890</h3>
                    <div className='container'>
                        <div className='card'>
                            <PackageCard {...cardDetails.card1} navigateTo='/goa'/>
                        </div>
                        <div className='card'>
                            <PackageCard {...cardDetails.card2} navigateTo='/chardham'/>
                        </div>
                        <div className='card'>
                            <PackageCard {...cardDetails.card3} navigateTo='/leh'/>
                        </div>
                        <div className='card'>
                            <PackageCard {...cardDetails.card4} navigateTo='/manali'/>
                        </div>
                        <div className='card'>
                            <PackageCard {...cardDetails.card5} navigateTo='/destination'/>
                        </div>
                        <div className='card'>
                            <PackageCard {...cardDetails.card6} navigateTo='/rajasthan'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
