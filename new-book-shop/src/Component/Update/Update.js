import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { serviceID } = useParams();
    const { register, handleSubmit } = useForm()
    const [products, setProducts] = useState({})




    useEffect(() => {
        const url = `http://localhost:4000/products/${serviceID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const onSubmit = data => {
        console.log(data)
        // e.preventDefault()
        const url = `http://localhost:4000/products/${serviceID}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

            })

        // await createUserWithEmailAndPassword(email, password)
        // await updateProfile({ displayName: name });
        // // console.log('Updated profile');
        // nevigate('/')
        // console.log(email, password, name, price, stock, description, image)

    }
    return (
        <div>
            <h1>this is stock update of {products.name}</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter your stock number</Form.Label>
                    <Form.Control type="number" placeholder='Enter your stock number' {...register("stock")} required />

                </Form.Group>





                <Button variant="success" type="submit">
                    Add here
                </Button>
            </Form>
        </div>
    );
};

export default Update;