import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col } from 'reactstrap';
import './home.css';

function Home(){

    return (
      <Container>
        <Row>
          <Carousel 
            className="Carousel-Container"
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            width="75%"
          >
            <div>
                <img src="https://picsum.photos/id/1039/1200/600" />
            </div>
            <div>
                <img src="https://picsum.photos/id/1040/1200/600" />
            </div>
            <div>
                <img src="https://picsum.photos/id/104/1200/600" />
            </div>
          </Carousel>
        </Row>
        <Row 
        className="mt-5 align-items-center"
        >
          <Col
          className="md-auto"
          >
            <button className="btn-nav"><span></span>Search</button>
          </Col>
        </Row>
      </Container>
    )}

export default Home