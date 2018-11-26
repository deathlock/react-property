import _ from 'lodash';

const initialState = {
    PropertyListData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'PROPERTY_LIST':
        	return _.assign({}, state, { PropertyListData: action.payload });
        default:
          return state;
    }
};
