/***** Home  */
export const searchTermData = payload => ({ type: 'SEARCH_TERM', payload });
export const setPlaceId = payload => ({ type: 'SET_PLACE_ID', payload });

/***** Property Listing */
export const propertyListData = payload => ({ type: 'PROPERTY_LIST', payload });

/**** User Token */
export const userLoggedIn = payload => ({type: 'SET_LOGGEDIN_STATE', payload});
export const userTokenData = payload => ({ type: 'USER_TOKEN', payload });
export const userProfileData = payload => ({ type: 'USER_PROFILE_DATA', payload });
