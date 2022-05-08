import React from 'react';
import img from '../img/book 1.png'

const Section1 = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid rounded' width='400px' src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h1 className='text-center text-success'>why book is important?</h1>
                    <p>Books are considered as the best friends of students in a real sense, and it is said that they are also the best companions of students. They play a significant role in Student’s life. Books give plenty of joy to students, and they learn a lot of things from books. They take them into a unique world of imagination and improve their standard of living.

                        Books help to inspire students to do hard work with courage and hope. They enrich the experience of students and sharpen their intellect. There are many benefits of Reading books; students will get more knowledge, improve memory and build more vocabulary.</p>

                </div>
            </div>

        </div>
    );
};

export default Section1;