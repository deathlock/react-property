import axios from 'axios';

import * as _ from '../redux/actions/Sync.action';

const baseUrl = "http://192.168.1.111:8098/api/agent";

/*********** Without Reducers ***********/





/*********** With Reducers ***********/

export const getPropertyList = () => dispatch => {
	axios['get'](baseUrl + '/property_list')
        .then(r => dispatch(_.propertyListData(r.data)));
}