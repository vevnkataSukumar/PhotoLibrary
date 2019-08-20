import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from './constants';

// Inital stage of Reducer
const InitialState = {
	isLoading: false,
	data: [],
	hasData: false,
	error: false,
};

// Albums Reducer
function albumsReducer(state = InitialState, action = null) {
	switch (action.type) {
		case types.IS_LOADING_ALBUMS:
			return { 
                ...state, 
                isLoading: true, 
            };
		case types.GET_ALBUMS:
			return { 
				...state, 
				isLoading: false, 
				error: false, 
				data: action.payload, 
				hasData: true, 
            };
		case types.FAILED_TO_GET_ALBUMS:
			return { 
				...state, 
				isLoading: false, 
				error: true, 
				hasData: false, 
			};
		default:
			return state;
	}
}

// Album photos Reducer
function albumPhotosReducer(state = InitialState, action = null) {
	switch (action.type) {
		case types.IS_LOADING_ALBUM_PHOTOS:
			return { 
                ...state, 
                isLoading: true, 
            };
		case types.GET_ALBUM_PHOTOS:
			return { 
				...state, 
				isLoading: false, 
				error: false, 
				data: action.payload, 
				hasData: true, 
            };
		case types.FAILED_TO_GET_ALBUM_PHOTOS:
			return { 
				...state, 
				isLoading: false, 
				error: true, 
				hasData: false, 
			};
		default:
			return state;
	}
}

const appReducer = combineReducers({
    albums: albumsReducer,
    albumPhotos: albumPhotosReducer,
});

export default appReducer;