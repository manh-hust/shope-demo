import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Component/Cart'
import Product from './Component/Product'
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import ProductDetail from './Component/Product.detail'

function App2(){
    
    return (
    <Router>
        <Navigation/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products/:productId"  component={ProductDetail}/>
            <Route path="/products" exact component={Product}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
    </Router>
    )
}
export default App2