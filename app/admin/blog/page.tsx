import AdminBlog from "@/app/components/AdminBlog";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileNavbar from "@/app/components/MobileNavbar";
import React from "react";

function page() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <AdminBlog page="home" />
      <Footer />
    </main>
  );
}

export default page;
