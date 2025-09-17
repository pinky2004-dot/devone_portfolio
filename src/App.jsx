import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Research from "./sections/Research";
import SocialLinks from "./sections/SocialLinks";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Research />
    <SocialLinks />
  </>
);

export default App;
