import { useState } from "react"

const items = [
  {
    name: "Veg Puff",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  },

  {
    name: "Samosa",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "White Bread",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },

  {
    name: "Brown Bread",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
  },

  {
    name: "Cupcakes",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
  },

  {
    name: "Chocolate Cake",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },

  {
    name: "Sandwich",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Cold Coffee",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },

  {
    name: "Donuts",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },

  {
    name: "Cookies",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
  },
]

function Featured({ addToCart }) {

  const [showAll, setShowAll] = useState(false)

  const displayedItems = showAll ? items : items.slice(0, 6)

  return (
    <section
      id="menu"
      className="py-24 px-10 md:px-20 bg-white"
    >

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Our Menu
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        Fresh bakery items made with love every day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#fff8f0] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-[#6b4226]">
                {item.name}
              </h3>

              <p className="mt-2 text-orange-500 font-bold text-lg">
                ₹{item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="mt-5 w-full bg-[#6b4226] text-white py-3 rounded-xl hover:bg-orange-500 transition"
              >
                Add To Cart
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="flex justify-center mt-14">

        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-[#6b4226] transition"
        >
          {showAll ? "Show Less" : "View More"}
        </button>

      </div>

    </section>
  )
}

export default Featured