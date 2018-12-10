import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "babel-polyfill";
import LoadingBar, { showLoading } from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import '../../public/css/font-awesome.min.css';

import Header from './common/Header';
import Footer from './common/Footer';

class Layout extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
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
                <LoadingBar style={{ backgroundColor: 'yellow', height: '5px', position:"fixed", zIndex: 10000 }} />
                <ToastContainer />
                <Header {...this.props} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

const store = select => select;
export default withRouter(connect(store)(Layout));