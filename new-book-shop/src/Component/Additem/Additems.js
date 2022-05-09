import { async, jsonEval } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Additems = () => {
    const { register, handleSubmit } = useForm()
    // const { password, setPassword } = useForm()
    // const { name, setName } = useForm()
    // const { price, setPrice } = useForm()
    // const { stock, setStock } = useForm()
    // const { description, setDescription } = useForm()
    // const { image, setImage } = useForm()
    // const handleemail = async (e) => {
    //     setEmail(e.target.value)

    // }

    // const handlename = async (e) => {
    //     setName(e.target.value)
    // }

    // const Handlepass = async (e) => {
    //     setPassword(e.target.value)
    // }

    // const Handleprice = async (e) => {
    //     setPrice(e.target.value)
    // }

    // const handlestock = async (e) => {
    //     setStock(e.target.value)
    // }

    // const handledescription = async (e) => {
    //     setDescription(e.target.value)
    // }

    // const handleimage = async (e) => {
    //     setImage(e.target.value)
    // }

    const onSubmit = data => {
        // e.preventDefault()
        const url = `http://localhost:4000/products`
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

        // await createUserWithEmailAndPassword(email, password)
        // await updateProfile({ displayName: name });
        // // console.log('Updated profile');
        // nevigate('/')
        // console.log(email, password, name, price, stock, description, image)

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
                    <Form.Control type="email" placeholder="Enter email" {...register("supplier")} required />

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
                    <Form.Control type="text" placeholder="enter image link"{...register("image")} required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Add here
                </Button>
            </Form>
        </div>
    );
};

export default Additems;