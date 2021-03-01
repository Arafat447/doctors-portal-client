import React from 'react';
import TestomonialCard from '../TestomonialCard/TestomonialCard';
import './Testomonial.css'

const testomonialInfo = [
    {
        img: "https://i.ibb.co/k2X727Y/Ellipse-1.png"
    },
    {
        img: "https://i.ibb.co/vLk2VbH/Ellipse-2.png"
    },
    {
        img: "https://i.ibb.co/0sgV5f3/Ellipse-3.png"
    }
]
const Testomonial = () => {
    return (
        <section className="testomonial-container my-5">
            <div className="testomonial-content d-flex justify-content-center row">
                <div className="col-10">
                    <div className="float-left d-inline">
                        <h5 className="mt-5" style={{ color: '#1CC7C1' }}>TESTOMONIALS</h5>
                        <h2>What's Our Patient <br /> Says</h2>
                    </div>
                    <div className="float-right d-inline mt-5">
                        <img style={{ height: '200px' }} src="https://i.ibb.co/MsXLFHV/quote.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        testomonialInfo.map(info => <TestomonialCard data={info}></TestomonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testomonial;