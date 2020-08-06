import {
    FETCHED_LIST, FETCHING_LIST, CANCEL_REQUEST, REQUEST_ERROR,
    ADD_ITEM, REMOVE_ITEM
} from '../types';

const initialList = {
    data: [],
    loading: false,
    fetched: false,
    errors: {}
}

export const list = ({ moduleName, cancelRequest }) => (state = initialList, { type, errors, data }) => {
    switch (type) {
        case `${moduleName}/${FETCHING_LIST}`:
            return { ...initialList, loading: true };
        case `${moduleName}/${FETCHED_LIST}`:
            return { ...state, fetched: true, loading: false, ...data, errors: {} };
        case `${moduleName}/${REQUEST_ERROR}`:
            return { ...state, fetched: true, loading: false, errors };
        case `${cancelRequest && `${moduleName}/${CANCEL_REQUEST}`}`:
            return {
                ...state, loading: false, fetched: true,
                errors: { message: "Something went wrong. Please try again" }
            };
        default:
            return state;
    }
}

const initialCart = {
    items: []
}

export const cart = (state = initialCart, { item, itemId, type }) => {
    switch (type) {
        case ADD_ITEM:
            if(state.items.findIndex(itm => itm.id === item.id) === -1) {
                return { ...state, items: [...state.items, item] }
            }
            return state;
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(itm => itm.id !== itemId)
            }
        default:
            return state;
    }
}