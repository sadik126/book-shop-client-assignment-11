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
            const url = `http://localhost:4000/products?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
            // const { data } = await axios.get(url)
            // setItems(data)
        }
        getItems();
    }, [user])
    return (
        <div>
            here is my items{items.length}
        </div>
    );
};

export default Myitems;