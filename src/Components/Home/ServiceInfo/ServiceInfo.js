import React from 'react';

const ServiceInfo = ({service}) => {
    return (
        <div className="service-container col-md-4 text-center">
            <div>
                <img style={{height:'50px'}} src={service.image} alt=""/>
                <h6 className="my-3">{service.name}</h6>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque aliquam cum odit laudant</p>
            </div>
        </div>
    );
};

export default ServiceInfo;