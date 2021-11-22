import {FETCH_PRODUCT_FAIL, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST} from '../Store/Constant'

const initProductState = {
    items: [],
}

const productReducer = (state = initProductState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_PRODUCT_REQUEST:
            return {

            }

        case FETCH_PRODUCT_FAIL:
            return {
                ...state
            }            
        default:
            return state;
    }
}

export default productReducer;