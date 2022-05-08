import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Section1 from '../Section1/Section1';
import Service from '../Service/Service';
import Services from '../Service/Services';

const Home = () => {
    const [user] = useAuthState(auth)
    console.log(user)
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