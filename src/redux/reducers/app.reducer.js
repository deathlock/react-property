import _ from 'lodash';

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'APP_SET_DATA':
            return _.assign({}, state, { data: action.payload.data });
        default:
            return state;
    }
};
