import React from 'react';
import { Link } from 'react-router-dom';
import { FaAccusoft, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer container-fluid pt-5">
            <div className="container ">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <ul>
                            <li><BsLaptop /> Laptop Management</li>
                            <li><FaAccusoft /> Multiplan ,Dhaka 1207</li>
                            <li><FaEnvelope /> laptopmanagement@gmail.com</li>
                            <li><FaMobileAlt /> 016xxxxxxxx</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/contact" className='footer-link'>Contact</Link></li>
                            <li><Link to="/about" className='footer-link'>About</Link></li>
                            <li><Link to="/privacy" className='footer-link'>Privacy</Link></li>
                            <li><Link to="/terms" className='footer-link'>Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/" className='footer-link'>Media</Link></li>
                            <li><Link to="/blog" className='footer-link'>Blog</Link></li>
                            <li><Link to="/" className='footer-link'>Forums</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <h4 className=' py-2 text-center'>All rights &copy; belongs to <span className='text-white'>
                <BsLaptop /> Laptop Store {new Date().getFullYear()}</span></h4> */}
                <h5 className='text-white text-center'> &copy; belongs to Laptop Management. All right reserved. </h5>
            </div>
        </div>
    );
};

export default Footer;