import { useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Cart from "../components/Cart"
import CakeOrder from "../components/CakeOrder"
import About from "../components/About"
import WhyChooseUs from "../components/WhyChooseUs"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (indexToRemove) => {

    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    )

    setCart(updatedCart)
  }

  return (
    <div className="overflow-x-hidden bg-[#fff8f0] min-h-screen">

      <Navbar cartCount={cart.length} />

      <Hero />

      <Featured addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <CakeOrder />

      <About />

      <WhyChooseUs />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

    </div>
  )
}

export default Home