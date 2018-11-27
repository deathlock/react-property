import axios from 'axios';

import * as _ from '../redux/actions/Sync.action';

const baseUrl = "http://192.168.1.111:8098/api/customer";

/*********** Without Reducers ***********/





/*********** With Reducers ***********/

export const getPropertyList = () => dispatch => {
	axios['get'](baseUrl + '/propertylist')
        .then(r => dispatch(_.propertyListData(r.data)))
        .catch(e => console.log("Error in propertyList", e));
}