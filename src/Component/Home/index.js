import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Col, Container, Row } from 'reactstrap';
import ScrollReveal from 'scrollreveal';
import img1 from '../../image/shahara/pic-1.png';
import img2 from '../../image/shahara/pic-2.png';
import img3 from '../../image/shahara/pic-3.png';
import img4 from '../../image/shahara/pic-4.png';
import video from '../../video/video.mp4';
import './Home.model.css';

function Home(){

    const contentVideo = useRef()
  
    useEffect(()=>{
      const classNameContentVideo = contentVideo.current.className
      ScrollReveal().reveal(`.${classNameContentVideo}`, {origin: 'left', distance: '100px', delay: 700})
      ScrollReveal().reveal(`.home-container-video-images`, {distance: '50px', interval: 200, delay: 500})
      ScrollReveal().reveal(`.item`, {distance: '50px', interval: 100, delay: 500})
    },[])
    return (
      <>
        <div className="home-container-video">
          <video autoPlay loop className="home-container-video__vd" muted >
            <source src={video} type="video/mp4"/>
          </video>
          <Container>
            <Row style={{
                justifyContent : 'space-around',
                alignItems: 'center',
                marginBottom: 40
                }} 
              >
              <Col md={4} className="home-container-video-content" >
                  <div className="home-container-video-content_child" ref={contentVideo}>
                    <h1>Chicken Grill</h1>
                    <p>You are the most prepared YouTuber when talking about website tutorial I have ever seen.
                    All of your tutorials are very practical and easy to follow. Big love from a new subscriber</p>
                    <button className="btn-nav"><span></span>Get Started</button>
                  </div>
              </Col>
              <Col  md={4}  className="home-container-video-images">
                  <div className="item">
                    <img className="item-hover" src={img1} alt="hihi" ></img>
                  </div>
                  <div className="item">
                    <img className="item-hover" src={img2} alt="hihi"></img>
                  </div>
                  <div className="item">
                    <img className="item-hover" src={img3} alt="hihi"></img>
                  </div>
                  <div className="item">
                    <img className="item-hover" src={img4} alt="hihi"></img>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-container-image">
        </div>
        <Container style={{height: '100vh'}}>
          <Row className="mt-5 justify-content-md-center">
          </Row>
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
                  <img src="https://picsum.photos/id/1039/1200/600" alt="hihi"/>
              </div>
              <div>
                  <img src="https://picsum.photos/id/1040/1200/600" alt="hihi"/>
              </div>
              <div>
                  <img src="https://picsum.photos/id/104/1200/600" alt="hihi"/>
              </div>
            </Carousel>
          </Row>
        </Container>
      </>
    )}

export default Home