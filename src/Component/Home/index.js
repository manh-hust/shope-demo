import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './home.css';

function Home(){

    return (
      <div>
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
      </div>
    )}

export default Home