import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.packagename}</td>
                <td>Rs. {this.props.price}</td>
                <td>{this.props.stay}</td>
                <td className='include'>Meals , Accommodation , Volvo , Transfer , Sightseeing</td>
                <td>
                    <button className='detail-btn view-btn'>More Details</button><button className='detail-btn less-btn'>Less Details</button></td>
            </tr>
        )
    }
}
