import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    FETCH_API_POST,
    GET_TOTAL_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAIL,
    ITEM_SELECTED,
    ITEM_REMOVE
} from './Constant'

export const addToCard = payload => {
    return {
        type: ADD_TO_CART,
        payload
    }
}
export const removeToCard = payload => {
    return {
        type: REMOVE_TO_CART,
        payload
    }
}
export const fetchApiPost = payload => {
    return {
        type: FETCH_API_POST,
        payload
    }
}
export const getTotalPage = payload => {
    return {
        type: GET_TOTAL_PAGE,
        payload
    }
}
export const nextPage = payload => {
    return {
        type: NEXT_PAGE,
        payload
    }
}
export const prevPage = payload => {
    return {
        type: PREV_PAGE,
        payload
    }
}
export const fetchProducSuccess = payload => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload
    }
}
export const fetchProducFail = () => {
    return {
        type: FETCH_PRODUCT_FAIL
    }
}
export const itemSelected = payload => {
    return {
        type: ITEM_SELECTED,
        payload
    }
}

export const itemRemove = payload => {
    return {
        type: ITEM_REMOVE,
        payload
    }
}
