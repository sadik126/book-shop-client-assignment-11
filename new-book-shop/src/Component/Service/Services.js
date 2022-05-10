import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://radiant-falls-05577.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)
    return (

        <div className='container'>
            <h1 className='text-center'>Our collection</h1>
            <div className="row g-3">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;