import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import App from './components/pages/App';
import Loader from './components/common/loader';

export default () => (
		<Layout>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/loader' component={Loader} />
			</Switch>
		</Layout>
	);
