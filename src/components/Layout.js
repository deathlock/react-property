import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "babel-polyfill";

import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import '../../public/css/font-awesome.min.css';

import Header from './common/Header';
import Footer from './common/Footer';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pathname = this.props.location.pathname;
        let DivClass;
        if (pathname == "/") {
            DivClass = "bg-img";
        } else {
            DivClass = "bg-img contain-remove-bg";
        }
        return (
            <div id="wrapper" className={DivClass}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default withRouter(Layout);