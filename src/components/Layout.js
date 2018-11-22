import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './common/header';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Layout);