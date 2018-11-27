import _ from 'lodash';

const initialState = {
    indexSearch: "",
    selectedPlaceId: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TERM':
            return _.assign({}, state, { indexSearch: action.payload });
        case 'SET_PLACE_ID':
        return _.assign({}, state, { selectedPlaceId: action.payload });
        default:
          return state;
    }
};
