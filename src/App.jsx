import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Guides from "./components/Guides";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { ScrollToTop } from "./components/scrolltop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Guides />
      <Careers />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
