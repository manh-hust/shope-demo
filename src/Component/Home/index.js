import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col } from 'reactstrap';
import './home.css';
import video from '../../video/video.mp4'
import img1 from '../../image/shahara/pic-1.png'
import img2 from '../../image/shahara/pic-2.png'
import img3 from '../../image/shahara/pic-3.png'
import img4 from '../../image/shahara/pic-4.png'


function Home(){

    return (
      <>
        <div className="home-container-video">
          <video autoPlay loop className="home-container-video__vd" muted >
            <source src={video} type="video/mp4"/>
          </video>
          <Container>
            <Row style={{justifyContent : 'space-around'}}>
              <Col md={4} className="home-container-video-content">
                  <h1>Chicken Grill</h1>
                  <p>You are the most prepared YouTuber when talking about website tutorial I have ever seen.
                  All of your tutorials are very practical and easy to follow. Big love from a new subscriber</p>
                  <button className="btn-nav"><span></span>Get Started</button>
              </Col>
              <Col  md={4}  className="home-container-video-images">
                <img className="item" src={img1}></img>
                <img className="item" src={img2}></img>
                <img className="item" src={img3}></img>
                <img className="item" src={img4}></img>
              </Col>
            </Row>
          </Container>
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
          </Row>
          <Row>

          </Row>
        </Container>
      </>
    )}

export default Home