import React from "react";
import { Link } from "react-router-dom";

import fut1 from "../assets/Gallery/fut1.jpg";
import fut2 from "../assets/Gallery/fut2.jpg";
import fut3 from "../assets/Gallery/fut3.jpg";
import fut4 from "../assets/Gallery/fut4.jpg";

const Gallery = () => {
  return (
    <>
      <div className="futsal-gallery">
        <h1>Gallery</h1>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={fut1} alt="First slide" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  backgroundColor: "black",
                  opacity: "0.5",
                }}
              >
                <h2 style={{ color: "white" }}>Nepali enjoying futsal</h2>
                <p>source@Nagarik</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fut2} alt="Second slide" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  backgroundColor: "black",
                  opacity: "0.5",
                }}
              >
                <h2 style={{ color: "white" }}>
                  Nepali Chelis enjoying futsal
                </h2>
                <p>Nagarik</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fut3} alt="Third slide" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  backgroundColor: "black",
                  opacity: "0.5",
                }}
              >
                <h2 style={{ color: "white" }}>Futsal craze</h2>
                <p>Nagarik</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fut4} alt="Fourth slide" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  backgroundColor: "black",
                  opacity: "0.5",
                }}
              >
                <h2 style={{ color: "white" }}>We love futsal</h2>
                <p>Kantipur</p>
              </div>
            </div>
          </div>
          <Link
            className="carousel-control-prev"
            to="#"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Gallery;
