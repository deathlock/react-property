import React from 'react';

import '../../../public/js/jquery.min.js';
import '../../../public/js/popper.min.js';
import '../../../public/js/bootstrap.min.js';

const Footer = () => {
    return (
        <footer className="footer-sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 foot-nav">
                        <ul className="foot-nav-list">
                            <li><a href="#">About Find Key</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p className="copy-text">&copy; 2018 Find Key. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;