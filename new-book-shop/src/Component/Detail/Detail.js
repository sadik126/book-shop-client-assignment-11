import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div>
            this is details
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default Detail;