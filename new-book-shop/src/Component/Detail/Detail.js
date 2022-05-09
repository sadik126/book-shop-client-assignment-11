
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Detail = () => {
    const { serviceID } = useParams();
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState({})




    useEffect(() => {
        const url = `http://localhost:4000/products/${serviceID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container w-50 mx-auto mt-5'>
            this is details
            {/* <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link> */}
            <Card className="text-center">
                <Card.Header className="fw-bold text-danger fs-1">Book name : {products.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Author: {products.author}</Card.Title>
                    <Card.Img variant="top" src={products.img} height="500px" width="300px" />
                    <Card.Title className='text-danger'>supplier email : {products.supplier}</Card.Title>
                    <Card.Title>stock:{products.stock}</Card.Title>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                    <Button variant="primary me-2">Price: {products.price}</Button>
                    {
                        user ? <Button variant="danger">Delivered</Button> : <Button disabled variant="danger">Delivered</Button>
                    }
                    <br />



                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
        </div>
    );
};

export default Detail;