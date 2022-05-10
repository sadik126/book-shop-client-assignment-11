import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Section1 from '../Section1/Section1';
import Service from '../Service/Service';
// import Services from '../Service/Services';

const Home = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://radiant-falls-05577.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <Review></Review>
            {/* <Services></Services> */}

            <div className="container">
                <h1 className='text-center mb-5'> Our products</h1>
                <div className="row g-3">
                    {
                        services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                    }

                </div>
            </div>


        </div>
    );
};

export default Home;