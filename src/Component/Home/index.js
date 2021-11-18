import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col } from 'reactstrap';
import './home.css';
import video from '../../video/video.mp4'

function Home(){

    return (
      <>
        <div className="home-container-video">
          <video autoPlay loop className="home-container-video__vd" muted >
            <source src={video} type="video/mp4"/>
          </video>
        </div>
        <div className="home-container-image">
        </div>
        <Container style={{height: '100vh'}}>
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
          <Row className="mt-5 justify-content-md-center">
            <Col
            md="auto"
            >
              <button className="btn-nav"><span></span>Search</button>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </>
    )}

export default Home