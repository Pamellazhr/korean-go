import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Description />
      <Blog />
      <Contact />
      <Cta />
    </main>
  );
}
