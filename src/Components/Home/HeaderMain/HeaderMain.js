import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <div style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-1">
                <h1>Your New Smile <br/>Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem dolor architecto perferendis iste dicta.</p>
                <button className="btn btn-custom text-white">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;