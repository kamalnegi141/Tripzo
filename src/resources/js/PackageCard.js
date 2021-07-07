import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PackageCard extends Component {
    render() {
        return (
            <section className='package-card'>
                <img src={this.props.src} alt={this.props.location}></img>
                <div className='package-detail'>
                    <div className='card-top'>
                        <h3>{this.props.location}</h3>
                        <p>{this.props.price}</p>
                    </div>
                    <div className='card-bottom'>
                        <div className='left'>
                            <p>Validity:</p>
                            <span>{this.props.validity}</span>
                        </div>
                        <div className='right'>
                            <Link to={this.props.navigateTo}>
                                <button>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
