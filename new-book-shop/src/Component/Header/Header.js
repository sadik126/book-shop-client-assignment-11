import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success py-4">
            <div className="container">
                <a className="navbar-brand fw-bold fs-2" href="#"> <span className='text-danger'> BOOK </span>LOVER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link text-danger fw-bold" to="/signin">Login</Link>
                        </li>

                        {/* {
                            user && <>
                                <Link className="nav-link" to="/addservice">Add service</Link>
                                <Link className="nav-link" to="/manageservice">Manage service</Link>
                            </>
                        }
                        {
                            user ? <li className="nav-item me-4">
                                <Link className="nav-link text-danger" onClick={Handlesignout} to="/signin">Logout</Link>
                            </li>
                                :
                                <li className="nav-item me-4">
                                    <Link className="nav-link text-info" to="/signin">Login</Link>
                                </li>

                        } */}

                        {/* <li className="nav-item me-4">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li> */}

                        {/* {
                            user ? <li className="nav-item me-4">
                                <Link className="nav-link" to="/"></Link>
                            </li>
                                : <li className="nav-item me-4">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                        } */}






                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;