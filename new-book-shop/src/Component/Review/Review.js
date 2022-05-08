import React from 'react';
import person1 from '../img/person1.png'
import person2 from '../img/person2.png'
import person3 from '../img/person3.png'

const Review = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Here our customers</h1>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className='d-flex flex-column align-items-center'>
                        <img className='w-25 rounded-circle' src={person1} alt="" />
                        <p>
                            Slate helps you see how
                            many more days you need
                            to work to reach your financial
                            goal for the month and year.
                        </p>

                    </div>

                </div>
                <div className="col-lg-4">
                    <div className='d-flex flex-column align-items-center'>
                        <img className='w-25 rounded-circle' src={person3} alt="" />
                        <p>
                            Slate helps you see how
                            many more days you need
                            to work to reach your financial
                            goal for the month and year.
                        </p>

                    </div>

                </div>
                <div className="col-lg-4">
                    <div className='d-flex flex-column align-items-center'>
                        <img className='w-25 rounded-circle' src={person2} alt="" />
                        <p>
                            Slate helps you see how
                            many more days you need
                            to work to reach your financial
                            goal for the month and year.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;