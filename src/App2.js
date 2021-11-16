import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Navigation from './Component/Navigation'
import App from './Component/Post/Post'
import Product from './Component/Product'
import ProductDetail from './Component/Product.detail'
import SignIn from './features/auth'


function App2(){

    const dispatch = useDispatch()
    useEffect(() =>{
       const fetchApiProduct =  async () => {
            const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err)
            })
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                payload: response.data
            })
            }
            fetchApiProduct()
    },[dispatch])



    return (
    <Router>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products/:productId"  component={ProductDetail}/>
            <Route path="/products" component={Product}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/App" component={App}/>
            <Route path="/signin" component={SignIn}/>
        </Switch>
    </Router>
    )
}
export default App2