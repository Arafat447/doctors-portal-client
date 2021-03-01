import React from 'react';
import { faClock, faPhoneAlt, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const info = [
        {
            title: "Opening Hours",
            description: "We are open 7 days",
            icon: faClock,
            background: 'primary'
        },
        {
            title: "Visit our location",
            description: "Brooklyn , NY 1036, USA",
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: "Contact us now",
            description: "+1487653885",
            icon: faPhoneAlt,
            background: 'primary'
        }
    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    info.map(data => <InfoCard data={data}></InfoCard>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;