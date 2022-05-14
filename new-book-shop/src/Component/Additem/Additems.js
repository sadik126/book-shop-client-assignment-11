import { async, jsonEval } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Additems = () => {
    const { register, handleSubmit } = useForm()
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        // e.preventDefault()
        const url = `https://radiant-falls-05577.herokuapp.com/products`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        if (onSubmit) {
            toast('added your item')
        }

    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center'>Here add your items</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder='Enter name' {...register("name")} required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price"{...register("price")} required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" placeholder="Enter stock" {...register("stock")} required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>supplier</Form.Label>
                    <Form.Control type="email" value={user.email} placeholder="Enter email" {...register("supplier")} required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" {...register("description")} rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="enter author" {...register("author")} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="enter image link"{...register("img")} required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Add here
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Additems;