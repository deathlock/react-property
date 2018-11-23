import _ from 'lodash';

const initialState = {
    homeData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TERM':
        	return _.assign({}, state, { homeData: action.payload });
        default:
            return state;
    }
};
