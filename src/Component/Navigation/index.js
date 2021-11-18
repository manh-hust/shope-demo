import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import './style.css'

function Navigation() {

    const total = useSelector(state => state.cart.total)
    return (
       <div className="navigation">
            <Link  to="/" >Home</Link>
            <div className="navigation__item">
                <Link className="navigation__item-animation" to='/products' >Products</Link>
                <Link className="navigation__item-animation" to='/cart' >Cart({total})</Link>
                <Link className="navigation__item-animation" to='/App' >Post</Link>
                <Link className="navigation__item-animation" to='/signin' >Account</Link>
            </div>
       </div>
    )
}

export default Navigation