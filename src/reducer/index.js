import {combineReducers} from 'redux'
import productReducer from './product'
import productDetailReducer from './product.detail'
import cartReducer from './cart'

const reducer  = combineReducers({
    product: productReducer,
    cart: cartReducer,
    productDetail: productDetailReducer
})

export default reducer
