import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import './product.css';
import { useDispatch, useSelector } from 'react-redux'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import NavProduct from './NavProduct'
import { fetchCategory } from '../../Store/Action.Creator';

function Product(){
    
    const products = useSelector(state => state.product.items) 
    console.log(products);
    const category = useSelector(state => state.category)

    const dispatch = useDispatch()
    const { type } = useParams()
    console.log('Type: ',type);

    useEffect(() => {
        ScrollReveal().reveal('.rows',{delay: 300, origin: 'bottom', distance: '100px'}) 
        ScrollReveal().reveal('.card-product',{delay: 300, interval: 200, origin: 'bottom', distance: '50px', scale: 0.9, duration: 300})
    },[])

    useEffect(() => {
        console.log('Type: ',type);
        if(type && type !== ''){
            dispatch(fetchCategory(type))
        }
        // else{
        //     dispatch(fetchCategory('electronics'))
        // }
        // return () => {
        //     dispatch(itemRemove())
        // }
    },[type, dispatch])

    return (
        <Container style={{position: 'relative'}}>
            <NavProduct category={category}/>
            
            {products ?
           (<Row  className="rows">
            {products.map((product) =>(
            <Col className="columns"
                key={product.id}
                xl="3"
                lg="4"
                md="6"
                sm="12"
            >   
                <Link to={`/products/${product.id}`}>
                <Card className="card-product">
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
           </Row>) : <h5>Loading...</h5>
            }
        </Container>
    )
}

export default Product