import React from "react";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <Blog />
      <Footer />
    </main>
  );
}

export default page;
