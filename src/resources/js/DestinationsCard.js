import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DestinationsCard extends Component {
    redirectToPage = () => {
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
            <section className='destination-card' >
                <img src={this.props.src} alt={this.props.alt} ></img>
                <div className='place-detail' >
                    <p > {this.props.title} </p> 
                    {
                        history ? (
                            <button onClick={this.redirectToPage}
                                type='button'
                                className='redirect' > {this.props.places} </button>
                        ) : null
                    }
                </div>
            </section>
        )
    }
}
export default withRouter(DestinationsCard)