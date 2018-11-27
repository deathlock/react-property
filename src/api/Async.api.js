import axios from 'axios';
import * as utils from '../library/utils';
import * as _ from '../redux/actions/Sync.action';

const baseUrl = "http://192.168.1.111:8098/api/customer";

/*********** Without Reducers ***********/


export const getGooglePlaceAutoFill = (term) => {
       //return axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?'+utils.queryString(term))
       return axios.get(baseUrl+ '/checkapi')
        .then(r => r.data)
        .catch(e => console.log("Error in propertyList", e));
}



/*********** With Reducers ***********/

export const getPropertyList = () => dispatch => {
	axios.get(baseUrl + '/propertylist')
        .then(r => dispatch(_.propertyListData(r.data)))
        .catch(e => console.log("Error in propertyList", e));
}
