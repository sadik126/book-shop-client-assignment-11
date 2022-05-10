import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Myitems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://radiant-falls-05577.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url)
            setItems(data)
            // const { data } = await axios.get(url)
            // setItems(data)
        }
        getItems();
    }, [user])
    console.log(items)
    return (
        <div>
            {items.length}
        </div>
    );
};

export default Myitems;