import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-light mt-5'>
            <div className="row d-flex">
                <div className="col-md-3 text-center">
                    <h5>Follow me</h5>
                    <a href="">Facebook</a><br />
                    <a href="">Linkdin</a><br />
                    <a href="">Instagram</a><br />
                    <a href="">Github</a><br />

                </div>
                <div class="col-md-3 text-center">
                    <h5>My address</h5>
                    <p>Mirpur-14,Ibrahimpur,Kamal khan sarak,Dhaka-1206</p>
                    <p>phone:+8801400156406</p>
                    <p>Email:sadikhimel04@gmail.com</p>
                </div>
                <div class="col-md-3 text-center">
                    <h5>Information</h5>
                </div>
                <div class="col-md-3 text-center">
                    <h5>legal</h5>
                </div>
            </div>
            <div class="row p-2 bg-dark">
                <div class="col-md-12">
                    <h6 class="text-center">© 2021 Copyright: Rayhan sadik</h6>
                </div>
            </div>


        </div>
    );
};

export default Footer;