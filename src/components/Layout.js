import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import '../../public/css/font-awesome.min.css';

import Header from './common/header';
import Footer from './common/footer';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default withRouter(Layout);