import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import './product.css';

function Product(){
    
    const products = useSelector(state => state.product.items)
    
    return (
        <Container>
            <h2 className="mt-3">List Product</h2>
           <Row  className="rows">
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
           </Row>
        </Container>
    )
}

export default Product