import {
  FaBreadSlice,
  FaTruck,
  FaHeart,
  FaLeaf,
} from "react-icons/fa"

function WhyChooseUs() {
  return (
    <section className="py-24 px-10 md:px-20 bg-white">

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Why Choose Us
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        We deliver freshness, quality, and happiness every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        {/* CARD 1 */}
        <div className="bg-[#fff8f0] rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

          <FaLeaf className="text-5xl text-orange-500 mx-auto" />

          <h3 className="mt-6 text-2xl font-semibold text-[#6b4226]">
            Fresh Ingredients
          </h3>

          <p className="mt-4 text-gray-600">
            We use premium and fresh ingredients for every recipe.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-[#fff8f0] rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

          <FaHeart className="text-5xl text-orange-500 mx-auto" />

          <h3 className="mt-6 text-2xl font-semibold text-[#6b4226]">
            Handmade Recipes
          </h3>

          <p className="mt-4 text-gray-600">
            Every cake and pastry is crafted with love and care.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-[#fff8f0] rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

          <FaTruck className="text-5xl text-orange-500 mx-auto" />

          <h3 className="mt-6 text-2xl font-semibold text-[#6b4226]">
            Fast Delivery
          </h3>

          <p className="mt-4 text-gray-600">
            Quick and safe delivery for all your sweet cravings.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-[#fff8f0] rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

          <FaBreadSlice className="text-5xl text-orange-500 mx-auto" />

          <h3 className="mt-6 text-2xl font-semibold text-[#6b4226]">
            Hygienic Kitchen
          </h3>

          <p className="mt-4 text-gray-600">
            Prepared in a clean and hygienic environment every day.
          </p>

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs