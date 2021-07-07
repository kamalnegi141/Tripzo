import React, { Component } from 'react';
import { FaRegClock, FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import { withRouter } from 'react-router';
import '../css/PlacesCard.css';

class PlacesCard extends Component {
    redirectToPlace = () => {
        const { history } = this.props;
        if (history) {
            history.push(this.props.navigateTo);
        }
        var destinationlink = document.getElementById("destination-link");
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace('active', '');
        destinationlink.className+='active';
    }
    render() {
        const { history } = this.props;
        return (
            <section className='place-card'>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='place-des'>
                    {history ? (
                        <h1 onClick={this.redirectToPlace} className='redirect'>{this.props.title}</h1>

                    ) : null}
                    <h2><span><FaMapMarkerAlt /></span>India</h2>
                    <div className='review'>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><p>(0 Review)</p></span>
                        <p><span><FaRegClock /></span> {this.props.days} days</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default withRouter(PlacesCard)