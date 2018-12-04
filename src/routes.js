import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import Loader from './components/common/Loader';
import PropertyList from './components/pages/PropertyList';
import UserProfile from './components/pages/UserProfile';
import AgentProfile from './components/pages/AgentProfile';


export default () => (
	<Layout>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/loader' component={Loader} />
			<Route exact path='/property-list' component={PropertyList} />
			<Route exact path='/user-profile' component={UserProfile} />
			<Route exact path='/agent-profile' component={AgentProfile} />
		</Switch>
	</Layout>
);
