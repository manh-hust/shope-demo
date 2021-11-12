import{ useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './style.css'
import {Button, Spinner} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

function ProductDetail() {
    const { productId } = useParams()
    const productItem = useSelector((state) => state.productDetail.itemSlected)
    const dispatch = useDispatch()

    const fetchDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => console.log("Err: ", err))
        dispatch({
            type: 'ITEM_SELECTED',
            payload: response.data
        })
    }

    function handleAdd(item){
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }

    useEffect(() => {
        if(productId && productId !== ''){
            fetchDetail()
        }

        return () => {
            dispatch({
                type:'ITEM_REMOVE',
            })
        }
    },[productId])
    return (
            <div>
                { productItem ? 
               ( 
                <div className="product-detail">
                    <div className="product-detail__img">
                        <img src={productItem.image}></img>:
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
                            <Button color="danger" className="button-group__buy">Buy</Button>
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
                    color="warning"
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    color="warning"
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    color="warning"
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    color="warning"
                    size="sm"
                >
                  Loading...
                </Spinner>
                <Spinner
                    className="Spinner-item"
                    type="grow" 
                    color="warning"
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