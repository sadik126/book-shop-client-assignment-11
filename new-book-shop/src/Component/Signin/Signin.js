import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nevigate = useNavigate()

    const handleemail = (e) => {
        setEmail(e.target.value)

    }

    const Handlepass = (e) => {
        setPassword(e.target.value)
    }

    const Handleusesignin = (e) => {
        e.preventDefault()
        // signInWithEmailAndPassword(email, password)
        console.log(email, password)

    }

    const Navigateregister = () => {
        nevigate('/signup')
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center'>Please login here</h1>
            <Form onSubmit={Handleusesignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={Handlepass} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mx-auto d-block w-25 rounded-pill'>
                    Login
                </Button>
            </Form>
            <p>New to Book lover ?</p> <Link to="/signup" className='text-success pe-auto  text-decoration-none ' onClick={Navigateregister}>Please register</Link>
        </div>
    );
};

export default Signin;