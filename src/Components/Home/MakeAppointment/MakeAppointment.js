import React from 'react';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="appointment-container">
            <div className="row">
                <div className="col-md-5">
                    <img src="https://i.ibb.co/VNRDfGK/5790-removebg.png" alt="" className="img-fluid appointment-img" />
                </div>
                <div className="col-md-7">
                    <h5 className='my-3' style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                    <h1 className="text-white my-3">Make an appointment <br/> Today</h1>
                    <p className="my text-white">It is a long established fact that a render will be distracted by the readable <br/> content of a page when looking at its ..</p>
                    <button className="btn btn-custom text-white my-3">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;