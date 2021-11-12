const initProduct = {
    itemSlected: {}
}

const productDetailReducer = (state = initProduct, action) =>{
    switch(action.type){
      
        case 'ITEM_SELECTED':
            return {
                ...state,
                itemSlected: action.payload
            }
        case 'ITEM_REMOVE':
            return { }

        default:
            return state;
    }
}

export default productDetailReducer;