import React from 'react';

const FeaturedService = () => {
    return (
        <section className="feature-container d-flex justify-content-center">
            <div className="row w-75">
                <div className="col-md-4 feature-img">
                    <img style={{ height: '400px' }} className="img-fluid" src="https://i.ibb.co/VCkZD1X/Mask-Group-3.png" alt="" />
                </div>
                <div className="col-md-8 feature-content my-3">
                    <h2>Exceptional Dental <br /> Care, on Your Terms</h2>
                    <small className="mt-5 text-secondary d-block feature-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Molestiae ipsam iste excepturi, voluptate officia incidunt <br/> rem iusto veritatis suscipit omnis ex distinctio reprehenderit <br/> provident nulla similique eligendi porro cupiditate fugit. <br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, odit.
                    </small>
                    <button className="btn btn-custom text-white my-5">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;