import BlogLanding from "./components/BlogLanding";
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
      <BlogLanding />
      <Contact />
      <Cta />
    </main>
  );
}
