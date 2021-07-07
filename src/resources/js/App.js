import React from 'react';
import '../css/App.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Destinations from './Destinations';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Goa from './Goa';
import Rajasthan from './Rajasthan';
import Manali from './Manali';
import Packages from './Packages';
import OurServices from './OurServices';
import Contact from './Contact';
import CharDham from './CharDham';
import Kashmir from './Kashmir';
import Leh from './Leh';

export default class App extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section >
                <div>
                    <Router >
                        <Navbar />
                        <Route path='/' exact component={Home} />
                        <Route path='/destination' exact component={Destinations} />
                        <Route path='/package' exact component={Packages}/>
                        <Route path='/ourservices' exact component={OurServices}/>
                        <Route path='/contact' exact component={Contact}/>
                        <Route path='/goa' exact component={Goa}/>
                        <Route path='/rajasthan' exact component={Rajasthan}/>
                        <Route path='/manali' exact component={Manali}/>
                        <Route path='/chardham' exact component={CharDham}/>
                        <Route path='/kashmir' exact component={Kashmir}/>
                        <Route path='/leh' exact component={Leh}/>
                        <Footer />
                    </Router>
                </div>
            </section>
        )
    }
}
