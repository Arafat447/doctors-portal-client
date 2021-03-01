import React from 'react';

const BlogCard = ({ info }) => {
    return (
        <section className="blog-card-container col-md-4">
            <div className="card">
                <div class="card-header d-flex align-items-center" >
                    <img className="mx-3" src={info.image} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{info.name}</h6>
                        <p className="text-secondary">{info.date}</p>
                    </div>
                </div>
                <div class="card-body">
                    <h5>{info.title}</h5>
                    <p class="card-text mt-4 text-secondary">{info.description}</p>
                </div>
            </div>
        </section>
    );
};

export default BlogCard;