import React, { Component } from 'react'

export default class ProvidedServiceCard extends Component {
    render() {
        return (
            <div className='providedservice-card'>
                <div className='card-left' style={{ backgroundColor: `${this.props.background}`, color: `${this.props.color}` }}>
                    {this.props.icon}
                </div>
                <div className='card-right'>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.detail}</p>
                </div>
            </div>
        )
    }
}
