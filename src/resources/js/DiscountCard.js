import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default class DiscountCard extends Component {
    render() {
        return (
            <section className='discount-card' style={{backgroundColor:`${this.props.backgroundcolor}`, border:`${this.props.border}`}}>
                <div className='card-top'>
                    <p><span>Tripzo</span> Exclusive</p>
                    <p>{this.props.packagedetail}</p>
                    <h3><span>Starting at </span>&#8377; {this.props.price}</h3>
                    <p>{this.props.info}</p>
                </div>
                <div className='card-bottom'>
                    <button>Know More</button>
                    <span><FaArrowRight /></span>
                </div>
            </section>
        )
    }
}
