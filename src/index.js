import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './redux/store';
import createRoutes from './routes';

const initialState = {}
const { store, persistor } = configureStore(initialState);
const routes = createRoutes(store);

ReactDom.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		<Router>
			{routes}
		</Router>
		</PersistGate>
	</Provider>
	, document.getElementById("root"));

