import React, { Component } from 'react'
import slide1 from '../images/Carousel-Image/jaipur.jpg';
import slide2 from '../images/Carousel-Image/manali1.jpg';
import slide3 from '../images/Carousel-Image/goa.jpg';
import slide4 from '../images/Carousel-Image/kashmir3.jpg';
import slide5 from '../images/Carousel-Image/kedarnath2.jpg';
import slide6 from '../images/Carousel-Image/leh.jpg';
import '../css/SlideShow.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const carouselControl = {
    showArrows: true,
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    stopOnHover: false,
    interval: 5500
}
export default class SlideShow extends Component {

    render() {
        return (
            <Carousel {...carouselControl} >
                <div className='mySlides  '>
                    <img src={slide1} alt='Rajasthan' style={{ width: '100%' }}></img>
                    <div className='text '>
                        <p>Rajasthan</p>
                        <span>Land of Kings</span>
                        <Link to='/rajasthan'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='mySlides '>
                    <img src={slide2} alt='jaipur' style={{ width: '100%' }}></img>
                    <div className='text'>
                        <p>Manali</p>
                        <span>Valley of the Gods</span>
                        <Link to='/manali'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='mySlides '>
                    <img src={slide3} alt='jaipur' style={{ width: '100%' }}></img>
                    <div className='text'>
                        <p>Goa</p>
                        <span>The Party Paradise</span>
                        <Link to='/goa'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='mySlides '>
                    <img src={slide4} alt='kashmir' style={{ width: '100%' }}></img>
                    <div className='text'>
                        <p>Kashmir</p>
                        <span>Switzerland of India </span>
                        <Link to='/kashmir'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='mySlides '>
                    <img src={slide5} alt='chardham' style={{ width: '100%' }}></img>
                    <div className='text'>
                        <p>Chardham</p>
                        <span>CharDham's Of India</span>
                        <Link to='/chardham'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='mySlides '>
                    <img src={slide6} alt='leh' style={{ width: '100%' }}></img>
                    <div className='text'>
                        <p>Leh</p>
                        <span>Little Tibet</span>
                        <Link to='/leh'>
                            <button className='explore-btn'>Explore</button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        )
    }
}
