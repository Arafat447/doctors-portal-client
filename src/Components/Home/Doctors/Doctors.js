import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section className="container text-center">
            <h5 className="my-5" style={{ color: '#1CC7C1' }}>OUR DOCTORS</h5>
            <div className="row">
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
            </div>
        </section>
    );
};

export default Doctors;