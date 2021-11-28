import {ADD_TO_CART, REMOVE_TO_CART} from '../Store/Constant'

const initCartState = {
    items: [],
    total: 0,
    login: false
}

const cartReducer = (state = initCartState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            let initTotal = 1
            const newItems = [...state.items]
            const newItem  = action.payload
            const newTotal = state.total + 1
            if(newItem.tt > 0 ){
                initTotal = initTotal + newItem.tt
                const newItemAdd = newItems[newItems.indexOf(newItem)]
                newItemAdd.tt = initTotal
            }
            else{
                newItem.tt = initTotal
                newItems.push(newItem)
            }
            
            return{
                ...state,
                items: newItems,
                total: newTotal,
            }   
        case REMOVE_TO_CART:
            const newItemsR = [...state.items]
            const item = action.payload
            if(item.tt > 1){
                const totalNew = item.tt - 1
                const itemNew = newItemsR[newItemsR.indexOf(item)]
                itemNew.tt = totalNew
            }
            else{
                newItemsR[newItemsR.indexOf(item)].tt = 0
                newItemsR.splice(newItemsR.indexOf(item),1)
            }

            const newTotalR = state.total - 1
            return{
                ...state,
                items: newItemsR,
                total: newTotalR,
            }   
        case 'LOGIN' :
            return {
                ...state,
                login: true
            }
        case 'LOGOUT' :
            return {
                ...state,
                login: false
            }

        default:
            return state;
    }

}

export default cartReducer;