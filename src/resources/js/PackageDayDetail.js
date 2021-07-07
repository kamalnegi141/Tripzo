import React, { Component } from 'react'

export default class PackageDayDetail extends Component {
    render() {
        return (
            <p><span>{this.props.span}</span>{this.props.daydescription}</p>
        )
    }
}
