import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import PropertyList from './components/pages/PropertyList';
import Loader from './components/common/Loader';

export default () => (
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/property-list' component={PropertyList} />
				<Route exact path='/loader' component={Loader} />
			</Switch>
		</Layout>
	);
