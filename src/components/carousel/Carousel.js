
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import { Container } from 'reactstrap';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Container>
              <Carousel autoPlay>
                  <div>
                      <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__480.jpg" alt='un chien qui regarde la lune'/>
                      <p className="legend">Chien Lune</p>
                      
                  </div>
                  <div>
                      <img src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995__480.jpg" alt='une petite lune face à la terre'/>
                      <p className="legend">david contre goliath</p>
                  </div>
                  <div>
                      <img src="https://cdn.pixabay.com/photo/2018/07/30/11/20/blood-moon-3572336__480.jpg"  alt='Lune rouge sombre'/>
                      <p className="legend">Lune rouge sombre</p>
                  </div>
              </Carousel>
              
            </Container>
        );
    }
};
 
export default DemoCarousel;

