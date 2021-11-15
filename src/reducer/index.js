import {combineReducers} from 'redux'
import productReducer from './product'
import productDetailReducer from './product.detail'
import cartReducer from './cart'
import postReducer from './posts'

const reducer  = combineReducers({
    product: productReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
    post: postReducer,
})

export default reducer
