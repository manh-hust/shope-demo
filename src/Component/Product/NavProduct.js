import './NavProduct.css'
import { Link } from 'react-router-dom';

function NavProduct ({category}) {

  
    return (
      <>
         <h2 className="mt-3">List Product</h2>
         <div className="Nav-product">
               <Link to={`/products`} className="Nav-product-item">
                  <p>All</p>
               </Link>
               {category.map(item => (
                  <Link to={`/products/category/${item}`} className="Nav-product-item">
                     <p>{item}</p>
                  </Link>
               ))}
         </div>
      </>
    )
}

export default NavProduct