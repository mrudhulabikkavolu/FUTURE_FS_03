import { FaStar } from "react-icons/fa"

const reviews = [
  {
    name: "Priya",
    review:
      "The cakes are absolutely delicious and always fresh. My favorite bakery since childhood!",
  },

  {
    name: "Rahul",
    review:
      "Amazing pastries and wonderful customer service. Highly recommended!",
  },

  {
    name: "Sneha",
    review:
      "Beautiful bakery with tasty desserts and a cozy atmosphere.",
  },
]

function Testimonials() {
  return (
    <section className="py-24 px-10 md:px-20 bg-white">

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        What Customers Say
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        Sweet words from our happy customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#fff8f0] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
          >

            {/* STARS */}
            <div className="flex gap-1 text-orange-400 text-xl">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            {/* REVIEW */}
            <p className="mt-6 text-gray-700 leading-relaxed">
              "{review.review}"
            </p>

            {/* NAME */}
            <h3 className="mt-6 text-2xl font-semibold text-[#6b4226]">
              {review.name}
            </h3>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Testimonials