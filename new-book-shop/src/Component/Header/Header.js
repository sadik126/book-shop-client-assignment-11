import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const Handlesignout = () => {
        signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-2" href="#"> <span className='text-danger'> BOOK </span>LOVER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>



                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/products">Manage Inventory</Link>
                        </li>

                        {/* {
                            user ? <li className="nav-item me-2">
                                <Link className="nav-link" to="/delete">Delete Inventory</Link>
                            </li> : <li className="nav-item me-2">
                                <Link className="nav-link" to="/"></Link>
                            </li>
                        } */}

                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/additem">Add Item</Link>
                        </li>
                        {/* <li className="nav-item me-4">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> */}
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        {/* <li className="nav-item me-4">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li> */}

                        {
                            user ? <li className="nav-item me-2">
                                <Link className="nav-link" to="/myitems">My items</Link>
                            </li> :
                                <li className="nav-item me-2">
                                    <Link className="nav-link" to="/"></Link>
                                </li>
                        }


                        {
                            user ? <li className="nav-item me-2">
                                <Link className="nav-link text-danger fw-bold" onClick={Handlesignout} to="/signin">Logout</Link>
                            </li>
                                :

                                <li className="nav-item me-2">
                                    <Link className="nav-link text-danger fw-bold" to="/signin">Login</Link>
                                </li>


                        }



                        {
                            user ? <li className="nav-item me-2">
                                <Link className="nav-link" to="/"></Link>
                            </li>
                                : <li className="nav-item me-2">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                        }




                        {
                            user ? <li className="nav-item me-4 ms-4">
                                <Link className="nav-link active" aria-current="page" to="/">{user.displayName}</Link>


                            </li> :
                                <li className="nav-item me-4 ms-4">
                                    <Link className="nav-link active" aria-current="page" to="/"></Link>
                                </li>
                        }
                        {
                            user ? <img src={user.photoURL} className="rounded-circle" width="50px" alt="" /> : <li className="nav-item me-4">
                                <Link className="nav-link active" aria-current="page" to="/"></Link>
                            </li>
                        }








                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;