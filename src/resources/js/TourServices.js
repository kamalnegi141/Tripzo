import React, { Component } from 'react'

export default class TourServices extends Component {
    render() {
        return (
            <div className='tour-service-detail'>
                <div className='inclusion'>
                    <h3>Inclusion</h3>
                    <ul >
                        <li>Transfers from Airport to Hotel to Airport</li>
                        <li>Meals as per hotel plan</li>
                        <li>Accommodation on twin sharing basis</li>
                        <li>Parking and Toll Tax</li>
                        <li>Sightseeing in shared vehical</li>
                        <li>Pick and Drop at time of arrival/departure</li>
                        <li>All tours and transfers by Seat included</li>
                    </ul>
                </div>
                <div className='exclusion'>
                    <h3>Exclusion</h3>
                    <ul >
                        <li>Camera fee</li>
                        <li>Alcoholic/ Non-Alcoholic beverages</li>
                        <li>Travel insurence</li>
                        <li>5% GST</li>
                        <li>Entrance fee to monuments and museum</li>
                        <li>All personal expenses</li>
                    </ul>
                </div>
            </div>
        )
    }
}
