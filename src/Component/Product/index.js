import { useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col, Spinner } from 'reactstrap';
import { Card, CardTitle, CardBody, CardImg, CardSubtitle} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './product.css';
function Product(){

    
    const products = useSelector(state => state.product.items)
    const dispatch = useDispatch()
    const swit = useRef(false)

    const fetchProduct = async () => {
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

    useEffect(() => {
        fetchProduct()
        swit.current = true
    },[])
    return (
        <Container>
            <h2 mt="5">List Product</h2>
            { swit.current ?
           (<Row  className="rows">
            {products.map((product) =>(
            <Col className="columns"
                key={product.id}
                xl="3"
            >   
                <Link to={`/products/${product.id}`}>
                <Card>
                    <CardImg
                        className="CardImg"
                        alt="Card image cap"
                        src={product.image}
                        top
                        width="100%"
                    /> 
                    <CardBody>
                        <CardTitle tag="h5">
                            {product.category}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Price: {product.price}$
                        </CardSubtitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
             ))}
           </Row>):
           (
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
           )}
        </Container>
    )
}

export default Product