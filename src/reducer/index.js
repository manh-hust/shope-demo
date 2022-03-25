import {combineReducers} from 'redux'
import productReducer from './product'
import productDetailReducer from './product.detail'
import cartReducer from './cart'
import postReducer from './posts'
import categoryReducer from './category'

const reducer  = combineReducers({
    product: productReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
    post: postReducer,
    category: categoryReducer
})

export default reducer
