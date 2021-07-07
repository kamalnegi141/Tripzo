import React, { Component } from 'react';
import '../css/Subscribe.css';

export default class Subscribe extends Component {
    render() {
        return (
            <section className='subscribe' style={{marginTop:'40px'}}>
                <div className='sub-text'>
                    <h2>Subscribe For Latest Updates</h2>
                    <p>Subscribe our website to get latest info directly to your email.</p>
                </div>
                <form className='sub-form'>
                    <input type='text' placeholder='Your email'></input>
                    <input type='submit' value='Submit' id='submit'></input>
                </form>
            </section>
        )
    }
}
