import React, { useEffect, useState } from 'react';

const Deleteitem = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:4000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)

                    console.log(data)
                })
        }
    }
    return (
        <div>
            this is delete
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name} <button className='btn btn-danger' onClick={() => handleDelete(service._id)}>delete</button></h3>

                </div>)
            }
        </div>
    );
};

export default Deleteitem;