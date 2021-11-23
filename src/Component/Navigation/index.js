import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux';
import './style.css'

function Navigation() {

    const total = useSelector(state => state.cart.total)
    return (
       <div className="navigation">
            <NavLink className="navigation__item-animation"  to="/" >Home</NavLink>
            <div className="navigation__item">
                <NavLink activeClassName="avtive-navbars" className="navigation__item-animation" to='/products' >Products</NavLink>
                <NavLink activeClassName="avtive-navbars" className="navigation__item-animation" to='/cart' >
                    Cart
                    { total ?
                        <span className="cart-total">12</span> :
                        true
                    }
                </NavLink>
                <NavLink activeClassName="avtive-navbars" className="navigation__item-animation" to='/App' >Post</NavLink>
                <NavLink activeClassName="avtive-navbars" className="navigation__item-animation" to='/signin' >Account</NavLink>
            </div>
       </div>
    )
}

export default Navigation