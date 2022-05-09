import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className='container'>
            <h1 className='text-center'>Our collection</h1>
            <div className="row g-3">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;