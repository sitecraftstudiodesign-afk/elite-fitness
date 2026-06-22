import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Memberships from "./components/Memberships"; 
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Stats />
      <Memberships />
      <Trainers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;