import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="container my-5 py-5 contact">
            <div className=" text-center contact-content">
                <h5 style={{ color: '#1CC7C1' }} className="mb-2">CONTACT US</h5>
                <h1 className="text-white">Always Connect With Us</h1>
            </div>
            <div className="col-md-9 mx-auto p-5">
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="" id="" cols="20" rows="5"></textarea>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button type="submit" className="btn btn-custom btn-submit text-white">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;