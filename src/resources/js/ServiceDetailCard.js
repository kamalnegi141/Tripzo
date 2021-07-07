import React, { Component } from 'react'

export default class ServiceDetailCard extends Component {
    render() {
        return (
            <div className='service-detail-card'>
                <img src={this.props.src} alt='service-name'></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.detail}</p>
            </div>
        )
    }
}
