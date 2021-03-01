import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="pt-3">
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="pt-3">
                            <h5 className="mb-3"> Services</h5>
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="pt-3">
                            <h5 className="mb-3"> Oral Health</h5>
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="pt-3">
                            <h5 className="mb-3"> OUR ADDRESS</h5>
                            <a href="#">New York 101010 Hudson <br /> Yards</a>
                            <div className="mt-5 social-media">
                                <ul>
                                    <li><a href="https://facebook.com"><FontAwesomeIcon className='media-icon mr-3' icon={faFacebookF} /></a></li>
                                    <li><a href="https://instagram.com"><FontAwesomeIcon className='media-icon mr-3' icon={faInstagram} /></a></li>
                                    <li><a href="https://google.com"><FontAwesomeIcon className='media-icon mr-3' icon={faGooglePlusG} /></a></li>
                                </ul>
                            </div>
                            <div className="mt-5">
                                <h6>Call Now</h6>
                                <button className="btn btn-custom text-white">+187593993</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center pt-5">
                    Copyright {(new Date().getFullYear())} All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;