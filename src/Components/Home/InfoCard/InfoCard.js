import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';
const InfoCard = ({ data }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`info-container d-flex justify-content-center info-${data.background}`}>
                <div>
                    <FontAwesomeIcon className='info-icon mr-3' icon={data.icon} />
                </div>
                <div>
                    <h6>{data.title}</h6>
                    <small>{data.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;