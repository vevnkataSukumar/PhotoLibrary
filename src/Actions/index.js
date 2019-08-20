import * as config from '../Axios/index';
import { say, pass } from '../Axios/actions';

import * as types from '../Reducers/constants';

// Fetch Make 
export const fetchAlbums = () => (dispatch) => {
    console.log('Albums fetch');
    
	// Initial load
	dispatch(say(types.IS_LOADING_ALBUMS));

    config.AppUrl.get('albums')
	.then((response) => {
		console.log('album response', response);
		dispatch(pass(types.GET_ALBUMS, response.data));
	})
	.catch((error) => {
		// error
		if (error.response) {
			dispatch(pass(types.FAILED_TO_GET_ALBUMS, error.response.data));
		}
	});
};

// Fetch Make 
export const albumPhotos = (props) => (dispatch) => {
	console.log(props);
	
	// Initial load
	dispatch(say(types.IS_LOADING_ALBUM_PHOTOS));
    config.AppUrl.get(`photos${props.data}`)
	.then((response) => {
		dispatch(pass(types.GET_ALBUM_PHOTOS, response.data));
	})
	.catch((error) => {
		// error
		if (error.response) {
			dispatch(pass(types.FAILED_TO_GET_ALBUM_PHOTOS, error.response.data));
		}
	});
};