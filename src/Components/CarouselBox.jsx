import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import forestImg from "../assets/forest.jpg";
import fforestImg from "../assets/fforest.jpg";
import gforestImg from "../assets/gforest.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100%" src={forestImg} alt="forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              dolor dolores debitis eius incidunt vero maxime omnis consequatur,
              dolorum ab! Doloribus fuga quidem tenetur dolore aut nobis,
              consequatur repudiandae? Exercitationem.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100%" src={fforestImg} alt="forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              dolor dolores debitis eius incidunt vero maxime omnis consequatur,
              dolorum ab! Doloribus fuga quidem tenetur dolore aut nobis,
              consequatur repudiandae? Exercitationem.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100%" src={gforestImg} alt="forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              dolor dolores debitis eius incidunt vero maxime omnis consequatur,
              dolorum ab! Doloribus fuga quidem tenetur dolore aut nobis,
              consequatur repudiandae? Exercitationem.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
