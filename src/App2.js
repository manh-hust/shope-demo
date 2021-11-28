import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Navigation from './Component/Navigation'
import Post from './Component/Post/Post'
import Product from './Component/Product'
import ProductDetail from './Component/Product.detail'
import SignIn from './features/auth'
import Login from './Component/Login'
import ScrollToTop from './Component/BackToTop'
import { loadProducts } from './Store/Action.Creator'

function App2(){

    const dispatch = useDispatch()
    dispatch(loadProducts())
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/products/:productId"  component={ProductDetail}/>
                <Route path="/products" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/App" component={Post}/>
                <Route path="/signin/login" component={Login}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/:string" component={Err}></Route>
            </Switch>
            <ScrollToTop/>
        </Router>
    )
}
function Err () {
    
    return (
        <h1>Error. Not Found 404</h1>
    )
}
export default App2