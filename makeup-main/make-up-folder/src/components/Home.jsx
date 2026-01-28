import React from 'react';
import '../styling/Home.css';
import '../styling/navbar.css';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="Home">
            {/* Navbar */}
            <header>
                <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <span className="nav-text1"><strong>PRO</strong> makeup studio</span>
                    </div>
                    <div className="home-menu">
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

            {/* Main Section */}
            <main>
                <div className="contact">
                    <div className="image-container">
                        <div className="circle-image"></div>
                    </div>
                    <div className="text-container">
                        <h2><strong>GET IN TOUCH</strong></h2>
                        <p className="profession">Professional makeup artist</p>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button data-text="GET IN TOUCH">GET IN TOUCH</button>
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

export default Home;
