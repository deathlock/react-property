import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import appReducer from './app.reducer';
import propertyReducer from './property.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    routing,
    appReducer,
    propertyReducer,
    userReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
