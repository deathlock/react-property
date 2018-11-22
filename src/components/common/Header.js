import React from 'react';

import LoginModal from './LoginModal';

const Header = () => {
    return (
        <header className="header-sec">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 login-wrap">
                	<button type="button" className="log-btn" data-toggle="modal" data-target="#smallShoes">
                        <img src="images/profile.png" alt="" />
                        Hello, Guest
                    </button>
                    <LoginModal />
                    
                </div>
                <div className="col-md-6 text-center">
                	<a href="index.html"><img src="images/logo.png" alt="" /></a>
                </div>
                <div className="col-md-3">
                    <div className="key-wrap"> 
                        130,090  
                        <img src="images/key.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;