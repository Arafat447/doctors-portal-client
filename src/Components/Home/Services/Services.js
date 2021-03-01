import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
const serviceData = [
    {
        name: 'Flouride Treatment',
        image: 'https://i.ibb.co/R0mrNFp/001-dental.png'
    },
    {
        name: 'Cavity Filling',
        image: 'https://i.ibb.co/c1k89Ts/tooth-1.png'
    },
    {
        name: 'Teeth Whitening',
        image: 'https://i.ibb.co/7KHCcBD/tooth.png'
    },
]
const Services = () => {
    return (
        <section>
            <div className="text-center my-5">
                <h4 style={{color:'#1CC7C1'}}>OUR SERVICES</h4>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="row">
                        {
                            serviceData.map(data => <ServiceInfo service={data}></ServiceInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;