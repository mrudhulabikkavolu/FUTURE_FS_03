import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-32 bg-[#fff8f0]"
    >

      {/* LEFT SIDE */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#6b4226] leading-tight">
          Freshly Baked Happiness Every Day
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#6b4226] leading-tight font-['Dancing_Script']">        
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Welcome to GOLDEN BAKERY - serving delicious cakes,
          pastries, cookies, and warm memories since years.
        </p>
        </h1>        

        <div className="mt-8 flex gap-5">

          {/* ORDER NOW BUTTON */}
          <a
            href="https://wa.me/918328649412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#6b4226] text-white px-8 py-3 rounded-full hover:bg-orange-500 hover:scale-105 transition duration-300">
              Order Now
            </button>
          </a>

          {/* VIEW MENU BUTTON */}
          <a href="#menu">
            <button className="border-2 border-[#6b4226] text-[#6b4226] px-8 py-3 rounded-full hover:bg-[#6b4226] hover:text-white hover:scale-105 transition duration-300">
              View Menu
            </button>
          </a>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="mt-16 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          alt="Bakery"
          className="w-[350px] md:w-[500px] rounded-3xl shadow-2xl"
        />

      </motion.div>

    </section>
  )
}

export default Hero