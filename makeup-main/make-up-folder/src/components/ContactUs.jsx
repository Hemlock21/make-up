import React from 'react';
import '../styling/ContactUs.css';
import '../styling/navbar.css';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";

function ContactUs() {
    return (
        <div className="ContactUs">

            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="logo">
                            <span className="nav-text1"><strong>PRO</strong> makeup studio</span>
                        </div>
                        <div className="contact-us-menu">
                        <div className="menu">
                            <Link to="/">Home</Link>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Portfolio</a>
                            <Link to="/contact-us">Contact Us</Link>
                        </div>
                        </div>
                        <div className="logo">
                            <span className="nav-text2"><strong>ELENA STAGGE</strong></span>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <div className="main-container">
                    <div className="location-container">
                        <div className="special-alignment">
                        <div className="location"><strong>LOCATION</strong></div>
                        <div className="more">lalalalal</div>
                        <div className="more">lalalalal</div>
                        <div className="more">lalalalal</div>
                        </div>
                        <div className="map-box">
                            <iframe
                                title="location-map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201.96652854766762!2d14.5047997!3d35.9111299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45d56d84c63f%3A0xf2e610059d5bfdf1!2sKim%20%26%20Rose!5e0!3m2!1sen!2smt!4v1754862798350!5m2!1sen!2smt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    <div className="get-in-touch-container">
                        <div className="get-in-touch">
                            <div className="special-alignment">
                            <strong>GET IN TOUCH</strong>
                            <div className="more">lalalalal</div>
                            </div>
                            <div className="form">
                                <div className="form-name-email">
                                    <div className="form-item">
                                        <label htmlFor="name" className="text"></label>
                                        <input
                                            type="name"
                                            id="name"
                                            placeholder="Name"
                                            required
                                            className="input"
                                        />
                                    </div>

                                        <div className="form-item">
                                            <label htmlFor="email" className="text"></label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                required
                                                className="input"
                                            />
                                    </div>
                                </div>

                                <div className="form-item">
                                    <label htmlFor="subject" className="text"></label>
                                    <input
                                        type="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                        className="input"
                                    />
                                </div>

                                <div className="form-textbox">
                                    <label htmlFor="text" className="text"></label>
                                    <textarea
                                        name="text"
                                        id="text"
                                        placeholder="Text"
                                        required
                                        className="input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <div className="contact-info">
                    <div className="container contact-footer">
                        <div className="contact-container">
                            <div className="contact-info-item">
                                <h1> Contact Us</h1>
                                <div className="item-item"> <FaPhone/> +356 7952 1909</div>
                                <div className="item-item"> <MdEmail /> info@promakeup.studio</div>
                            </div>
                            <div className="contact-info-item">
                                <h1> Address</h1>
                                <div className="item-item"> ProMakeup @ Kim & Rose</div>
                                <div className="item-item"> Professional Makeup in Malta</div>
                                <div className="item-item"> Triq Tal - Katidral 62</div>
                                <div className="item-item"> Sliema, VAT: 2877-7802</div>
                            </div>
                        </div>
                        <div className="contact-container-logo">
                            <div className="contact-info-item"> {/* centering right*/}
                                <h1>PRO <span className="light-text">makeup studio</span></h1>
                                <h1> <span className="light-text">ELENA STAGGE</span></h1>
                            </div>
                            <p className="copyright"> Copyright ©2022-2025 ProMakeup, WebDesign ProMakeup</p> {/* centering right*/}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;