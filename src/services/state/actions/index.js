import {
    FETCHED_LIST, FETCHING_LIST, CANCEL_REQUEST, REQUEST_ERROR, ADD_ITEM, REMOVE_ITEM,
    // ADD_ITEM, REMOVE_ITEM
} from '../types';
import { api } from '../../APIFactory'

export const getVehicles = () => dispatch => {
    dispatch({ type: `vehicles/${FETCHING_LIST}` });
    api.get('/vehicles').then(res => {
        dispatch({ type: `vehicles/${FETCHED_LIST}`, data: res.data });
    }).catch(err => {
        if (!err.response) {
            dispatch({ type: `vehicles/${CANCEL_REQUEST}` })
        } else {
            dispatch({ type: `vehicles/${REQUEST_ERROR}`, errors: err.response.data });
        }
    })
}

export const addToCart = (item) => dispatch => {
    dispatch({ type: ADD_ITEM, item })
}

export const removeFromCart = (itemId) => dispatch => {
    dispatch({ type: REMOVE_ITEM, itemId })
}