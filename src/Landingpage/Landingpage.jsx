import React from "react";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Futsalnepal from "./Futsalnepal";
import Gallery from "./Gallery";
import Imagesection from "./Imagesection";
import Navbar from "./Navbar/Navbar";
import Services from "./Services";

const Landingpage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="main-container">
          <Imagesection />
          <Services />
          <Futsalnepal />
          <Aboutus />
          <Gallery />
          <Contactus />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Landingpage;
