import _ from 'lodash';

const initialState = {
	userToken : "",
	isLoggedin:false
}

export default (state = initialState, action) =>{
	switch (action.type){
		case 'USER_TOKEN':
			return _.assign({}, state, { userToken: action.payload });
		case 'SET_LOGGEDIN_STATE':
			return _.assign({}, state, { isLoggedin: action.payload });
		default:
      return state;
	}
}