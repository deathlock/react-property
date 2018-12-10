import _ from 'lodash';

const initialState = {
	userToken : "",
	isLoggedin:false,
	userProfileDetails:[{'first_name' : 'Hello', 'last_name': 'Guest'}]
}

export default (state = initialState, action) =>{
	switch (action.type){
		case 'USER_TOKEN':
			return _.assign({}, state, { userToken: action.payload });
		case 'SET_LOGGEDIN_STATE':
			return _.assign({}, state, { isLoggedin: action.payload });
		case 'USER_PROFILE_DATA':
			return _.assign({}, state, { userProfileDetails: action.payload });
		default:
      return state;
	}
}