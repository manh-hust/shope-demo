import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import './style.css'

function Navigation() {

    const total = useSelector(state => state.cart.total)
    return (
       <div className="navigation">
            <Link  to="/" >Home</Link>
            <div className="navigation__item">
                <Link to='/products' >Products</Link>
                <Link to='/cart' >Cart({total})</Link>
                <Link to='/App' >Post</Link>
                <Link to='/signin' >Account</Link>
            </div>
       </div>
    )
}

export default Navigation