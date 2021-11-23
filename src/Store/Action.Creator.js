import axios from 'axios'

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

export const loadProducts = () => async dispatch => {
    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: response.data
        })
    }
    catch(error){
        console.log(error)
        dispatch({
            type: FETCH_PRODUCT_FAIL,
        })
    }

}

export const fetchProducSuccess = () => {

}

export const fetchProducFail = () => {
    return {
        type: FETCH_PRODUCT_FAIL
    }
}

export const fetchDetailProduct = productId => async dispatch => {
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(itemSelected(response.data))
    }
    catch(error){
        console.log(error)
    }
}

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

export const fetchPaginationPost = fillter => async dispatch =>{
    try{
        console.log('Fillter: ' + fillter._limit)
        const response = await axios.get(`https://js-post-api.herokuapp.com/api/posts?_limit=${fillter._limit}&_page=${fillter._page}`)
        dispatch(fetchApiPost(response.data))
        console.log('Data: ' + response.data)
        dispatch(getTotalPage(response.pagination._totalRows))
    }
    catch(error){
        console.log(error)
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

