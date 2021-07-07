import React, { Component } from 'react';
import '../css/SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'text',
            value:''
        }
    }
    handleDate = () => {
        this.setState({ type: 'date' })
    }
    handleText = (event) => {
        if (!event.target.value) {
            this.setState({ type: 'text' })
        }
        else {
            this.setState({ type: 'date' })
        }
    }
    render() {
        const inputdateoptions = {
            placeholder: 'Date Of Journey',
            type: this.state.type,
            onFocus: this.handleDate,
            onBlur: this.handleText,
            id:'journeydate',
            required:true
        }
        const searchoptions={
            type:'submit',
            id:'search',
            value:'Search'
        }
        return (
            <section className='searchbar' id='searchbar'>
                <h1>Where you want to go?</h1>
                <form className='searchform'>
                    <input placeholder='Where to go?' required autoComplete='true'></input>
                    <input {...inputdateoptions} ></input>

                    <select className='traveloption'>
                        <option>Select Travel Type</option>
                        <option>Ordinary</option>
                        <option>Luxury</option>
                    </select>
                    <input {...searchoptions}></input>
                </form>
            </section>
        )
    }
}
