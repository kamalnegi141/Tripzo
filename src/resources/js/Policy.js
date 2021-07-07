import React, { Component } from 'react'

export default class Policy extends Component {
    render() {
        return (
            <div className='policy'>
                <div className='payment-policy'>
                    <h3>Payment Policy</h3>
                    <p>Booking Fee</p>
                    <h4>From 01 Jan 2021 to 30 Sep 2021</h4>
                    <ul>
                        <li>30 or more days before departure: 25%</li>
                        <li>Between 29 to 20 days before departure: 50%</li>
                        <li>Between 19 to 15 days before departure: 100%</li>
                    </ul>
                </div>
                <div className='cancellation-policy'>
                    <h3>Cancellation Policy</h3>
                    <p>Cancellation charge per person</p>
                    <h4>From 01 Jan 2021 to 30 Sep 2021</h4>
                    <ul>
                        <li>30 or more days before departure: 25%</li>
                        <li>Between 29 to 20 days before departure: 50%</li>
                        <li>Between 19 to 15 days before departure: 100%</li>
                    </ul>
                </div>
            </div>
        )
    }
}
