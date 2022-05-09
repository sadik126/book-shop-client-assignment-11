import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, price, img, description } = props.service;
    const nevigate = useNavigate();

    const nevigatedetail = (id) => {
        nevigate(`/products/${id}`)
    }

    const nevigateupdate = (id) => {
        nevigate(`/update/${id}`)
    }
    return (
        <div className='col-md-4 d-flex justify-content-center'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} height="318" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                    <h4 className='text-danger fw-bold'>Price :{price}৳</h4>
                    <Button variant="primary" onClick={() => nevigatedetail(_id)}>Show detail</Button>
                    <Button variant="success ms-2" onClick={() => nevigateupdate(_id)}>update stock</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;