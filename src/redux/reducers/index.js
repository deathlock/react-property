import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import appReducer from './app.reducer';
import propertyReducer from './property.reducer';

const rootReducer = combineReducers({
    routing,
    appReducer,
    propertyReducer
});

export default rootReducer;
