import Celebrate from "./components/Celebrate";
import Footer from "./components/Footer";
import Exclusive from "./components/Exclusive";
import Hero from "./components/Hero";
import Jewellery from "./components/Jewellery";
import Navbar from "./components/Navbar";
import Seller from "./components/Seller";

const App = () => {
  return (
    <div className="w-full h-full relative  to-emerald-400">
      <Navbar />
      <Hero/>
      <Jewellery/>
      <Exclusive/>
      <Seller/>
      <Celebrate/>
      <Footer/>
    </div>
  );
};

export default App;
