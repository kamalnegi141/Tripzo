import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'

export default class TripCard extends Component {
    render() {
        return (
            <section className='trip-card'>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='trip-des'>
                    <span><FaMapMarkerAlt /></span>
                    <div className='location-deatil'>
                        <p>{this.props.date}, 2021</p>
                        <h4> {this.props.location}</h4>
                    </div>

                </div>
            </section>
        )
    }
}
