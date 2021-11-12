const initProductState = {
    items: [],
}

const productReducer = (state = initProductState, action) =>{
    switch(action.type){
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                items: action.payload
            }
        case 'FETCH_PRODUCT_FAIL':
            break;
        default:
            return state;
    }
}

export default productReducer;