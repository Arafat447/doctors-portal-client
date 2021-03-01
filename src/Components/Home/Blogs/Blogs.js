import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
const blogInfo = [
    {
        name: "Rashed Kabir",
        title: "Check at least a doctor for your teeth",
        date: "22 Feb 2021",
        image: 'https://i.ibb.co/0sgV5f3/Ellipse-3.png',
        class: "card-special",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem labore quidem quas cumque vel"
    },
    {
        name: "DR.Caudi",
        title: "Tow times of brush in a day can keep you healthy",
        date: "2 Dec 2020",
        image: 'https://i.ibb.co/k2X727Y/Ellipse-1.png',
        class: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem labore quidem quas cumque vel "
    },
    {
        name: "DR.John Mitchel",
        title: "The tooth cancer is taking a chalange",
        date: "23 Jan 2021",
        image: 'https://i.ibb.co/vLk2VbH/Ellipse-2.png',
        class: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem labore quidem quas cumque vel "
    },
]
const Blogs = () => {
    return (
        <section className="blog-container">
            <div className="text-center my-5">
                <h5 style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <div className="row">
                        {
                            blogInfo.map(data => <BlogCard info={data}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;