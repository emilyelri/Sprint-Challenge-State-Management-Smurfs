import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions';

const initialState = [{
    date: [],
    isFetching: false,
    error: ''
}];

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                data: '',
                isFetching: false,
                error: action.payload
            };
        default: 
        return state;
    }
}

export default smurfReducer;