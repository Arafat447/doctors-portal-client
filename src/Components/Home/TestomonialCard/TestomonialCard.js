import React from 'react';

const TestomonialCard = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="card card-container text-center">
                <p className="text-secondary p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, temporibus minima repellat iusto provident nobis voluptate. Voluptas eveniet sapiente, officia labore exercitationem nemo facere recusandae est magnam aliquid illum sed?</p>
                <div className="d-flex justify-content-center">
                    <img src={data.img} alt="" className="card-img m-3" />
                    <h6 className="ml-2 mt-4" style={{ color: '#1CC7C1' }}>Winson Herry</h6>
                </div>
            </div>
        </div>
    );
};

export default TestomonialCard;