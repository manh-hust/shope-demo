import {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Button, Spinner } from 'reactstrap'
import './style.css'
import {addToCard, itemRemove, fetchDetailProduct} from '../../Store/Action.Creator'

function ProductDetail() {
    const { productId } = useParams()
    const productItem = useSelector((state) => state.productDetail.itemSlected)
    const loading = useSelector((state) => state.productDetail.loading)
    const dispatch = useDispatch()

    function handleAdd(item){
        dispatch(addToCard(item))
    }

    useEffect(() => {
        if(productId && productId !== ''){
            dispatch(fetchDetailProduct(productId))
        }
        return () => {
            dispatch(itemRemove())
        }
    },[productId, dispatch])

    return (
            <div>
                { loading ? 
               ( 
                <div className="product-detail">
                    <div className="product-detail__img">
                        <img src={productItem.image} alt="hihi"/>
                    </div>
                    <div className="product-detail__descrip">
                        <div className="product-detail__descrip__title">
                            <h2>{productItem.title}</h2>
                        </div>
                        <div className="product-detail__descrip__price">
                            <span>${productItem.price}</span>
                        </div>
                        <div className="product-detail__descrip__text">
                            <span>{productItem.description}</span>
                        </div>
                        <div className="button-group">
                            <Link to='/signin'>
                                <Button color="danger" className="button-group__buy">Buy</Button>
                            </Link>
                            <Button 
                                color="success" outline 
                                className="button-group__buy"
                                onClick = {() => {handleAdd(productItem)}}    
                            >   Add to Card
                            </Button>
                        </div>
                    </div>
                </div>
               ): (
                <div  className="Spinner">
                    <Spinner
                    className="Spinner-item"
                    type="grow" 
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    size="sm"
                >
                  Loading...
                </Spinner>
                </div>
                )
            }
            </div>
    )
}

export default ProductDetail