import {ITEM_SELECTED, ITEM_REMOVE} from '../Store/Constant'

const initProduct = {
    itemSlected: {},
    loading: false
}

const productDetailReducer = (state = initProduct, action) =>{
    switch(action.type){
      
        case ITEM_SELECTED:
            return {
                ...state,
                itemSlected: action.payload,
                loading: true
            }
        case ITEM_REMOVE:
            return { }
        default:
            return state;
    }
}

export default productDetailReducer;