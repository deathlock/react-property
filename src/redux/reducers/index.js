import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import appReducer from './app.reducer';
import propertyReducer from './property.reducer';

const rootReducer = combineReducers({
    routing,
    appReducer,
    propertyReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
