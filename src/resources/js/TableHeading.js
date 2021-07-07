import React, { Component } from 'react'

export default class TableHeading extends Component {
    render() {
        return (
            <tr>
                <th>{this.props.name} Packages</th>
                <th>Price(Per Person on twin sharing)</th>
                <th>Nights</th>
                <th className='include'>Incluisons</th>
                <th></th>
            </tr>
        )
    }
}
