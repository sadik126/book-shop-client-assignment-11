import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Myitem from '../Myitem/Myitem';



const Myitems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    const nevigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const supplier = user.email;
            const url = `http://localhost:4000/product?supplier=${supplier}`;
            const { data } = await axios.get(url)
            setItems(data)
            // const { data } = await axios.get(url)
            // setItems(data)
        }
        getItems();
    }, [user])
    console.log(items)
    const nevigatedetail = (id) => {
        nevigate(`/products/${id}`)
    }

    const nevigateupdate = (id) => {
        nevigate(`/update/${id}`)
    }
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://radiant-falls-05577.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(service => service._id !== id)
                    setItems(remaining)

                    console.log(data)
                })
        }
    }
    return (
        <div className='container'>
            <div className="row g-3">


                {
                    items.map(item => <Myitem key={item._id} item={item} handleDelete={handleDelete}></Myitem>)
                }



            </div>

        </div>
    );
};

export default Myitems;