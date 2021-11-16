import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Navigation from './Component/Navigation'
import Product from './Component/Product'
import ProductDetail from './Component/Product.detail'
import SignIn from './features/auth'
import App from './Component/Post/Post'


function App2(){
    
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