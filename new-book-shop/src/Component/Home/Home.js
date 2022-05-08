import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Section1 from '../Section1/Section1';
import Service from '../Service/Service';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <Review></Review>
            <Services></Services>
        </div>
    );
};

export default Home;