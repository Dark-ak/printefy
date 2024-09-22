
import Features from "./components/Features"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Products from "./components/Products"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sales from "./components/Sales"
import FeedBack from "./components/FeedBack"
import Profit from "./components/Profit"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Products />
      {/* <Check /> */}

      <Sales />
      <FeedBack />
      <Profit />
      <Footer />
    </div>
  )
}

export default App
