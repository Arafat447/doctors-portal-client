import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const Doctor = () => {
    return (
        <div className="col-md-4">
            <img src="https://i.ibb.co/FD5z1Y4/doctor-sm.png" alt="" className="img-fluid mb-3" />
            <p className="text-secondary"><FontAwesomeIcon style={{ color: '#1CC7C1' }} className='mr-2' icon={faPhoneAlt} /> +1458620087</p>
        </div>
    );
};

export default Doctor;