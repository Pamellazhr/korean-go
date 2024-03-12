import AdminContact from "@/app/components/AdminContact";
import React from "react";
import Header from "../../components/Header";
import MobileNavbar from "../../components/MobileNavbar";
import Footer from "../../components/Footer";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AdminContact />
      <Footer />
    </main>
  );
}

export default page;
