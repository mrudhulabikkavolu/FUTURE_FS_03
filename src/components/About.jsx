function About() {
  return (
    <section 
    id="about"
    className="py-24 px-10 md:px-20 bg-[#fff8f0]">

      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* IMAGE */}
        <div className="flex-1">

          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f"
            alt="Bakery Interior"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

        {/* TEXT */}
        <div className="flex-1">

          <h2 className="text-5xl font-bold text-[#6b4226]">
            About GOLDEN BAKERY
          </h2>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            GOLDEN BAKERY has been serving freshly baked cakes,
            pastries, cookies, and delightful treats loved by people
            for years. Our passion is creating delicious moments
            with premium ingredients, warm hospitality, and handmade care.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            From school-time memories to family celebrations,
            our bakery continues to bring happiness through every bite.
          </p>

          <button className="mt-8 bg-[#6b4226] text-white px-8 py-3 rounded-full hover:bg-orange-500 transition">
            Explore More
          </button>

        </div>

      </div>
    </section>
  )
}

export default About