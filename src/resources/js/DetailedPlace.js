import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../css/DetailedPlace.css';

export default class DetailedPlace extends Component {
    render() {
        return (
            <section className='tour'>
                <img src={this.props.src} alt={this.props.placename}></img>
                <div className='trip-detail'>
                    <div className='detail-left'>
                        <span><FaMapMarkerAlt /></span>
                    </div>
                    <div className='detail-right'>
                        <h2>{this.props.placename}</h2>
                        <p>{this.props.address}</p>
                    </div>
                </div>
            </section>
        )
    }
}
