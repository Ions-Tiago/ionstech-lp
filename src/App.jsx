import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Insights from "./components/Insights"
import Pricing from "./components/Pricing"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Insights/>
      <Stats/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
