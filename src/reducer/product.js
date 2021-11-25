import {FETCH_PRODUCT_FAIL, FETCH_PRODUCT_SUCCESS} from '../Store/Constant'

const initProductState = {
    items: [],
    isSuccess: true
}

const productReducer = (state = initProductState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isSuccess: true
            }
        case FETCH_PRODUCT_FAIL:
            return {
                ...state,
                isSuccess: false
            }            
        default:
            return state;
    }
}

export default productReducer;