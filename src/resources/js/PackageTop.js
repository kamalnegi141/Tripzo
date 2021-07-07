import React, { Component } from 'react';
import { FaPlane, FaBed, FaEye, FaUtensils, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default class PackageTop extends Component {
    render() {
        return (
            <section >
                <div className='image-container'>
                    <img className='image-responsive' src={this.props.src} alt={this.props.place}></img>
                </div>
                <div className='pack-info'>
                    <div className='pack-summary'>
                        <h1>{this.props.place} Holiday Packages</h1>
                        <div className='pack-services'>
                            <p><span ><FaPlane /></span>Flights</p>
                            <p><span><FaBed /></span>Accommodation</p>
                            <p><span><FaEye /></span>Sightseeing</p>
                            <p><span><FaUtensils /></span>Meals</p>
                        </div>
                        <div className='package-pricing'>
                            <p>Packages available from</p>
                            <div className='package-pricerange'>
                                <h4>{this.props.pricerange}</h4>
                                <span>Per Person on Twin Sharing</span>
                            </div>
                            <div className='down-arrow'>
                                <a href='#package-table'><FaRegArrowAltCircleDown /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
