import React from 'react';
import {  Switch, Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from './library/middleware'
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Loader from './components/common/Loader';
import PropertyList from './components/pages/PropertyList';
import UserProfile from './components/pages/UserProfile';
import AgentProfile from './components/pages/AgentProfile';
import Register from './components/pages/Register';


export default () => (
	<Layout>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/loader' component={Loader} />
			<Route exact path='/property-list' component={PropertyList} />
			<Route exact path='/agent-profile' component={AgentProfile} />
			<PrivateRoute exact path='/register' onlyLoggedout={true} component={Register} />
			<PrivateRoute exact path='/user-profile' component={UserProfile} />
		</Switch>
	</Layout>
);
