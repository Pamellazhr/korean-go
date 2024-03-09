import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <Gallery />
      <Footer />
    </main>
  );
}

export default page;
