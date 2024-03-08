import BlogLanding from "./components/BlogLanding";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <Hero />
      <Description />
      <BlogLanding />
      <Contact />
      <Cta />
      <Footer />
    </main>
  );
}
