import DetailBlog from "@/app/components/DetailBlog";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileNavbar from "@/app/components/MobileNavbar";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <DetailBlog id={params.id} />
      <Footer />
    </main>
  );
}

export default page;
