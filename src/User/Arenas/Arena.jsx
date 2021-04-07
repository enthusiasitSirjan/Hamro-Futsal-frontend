import React from "react";
import Navbar from "../../Landingpage/Navbar/Navbar";
import Futsalarena from "./Futsalarena";
import Footer from "../../Landingpage/Footer";

const Arena = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Futsalarena />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Arena;
