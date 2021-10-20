import React from 'react';
import Pricing from '../../Pricing/Pricing';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Pricing></Pricing>
    
        </div>
    );
};

export default Home;