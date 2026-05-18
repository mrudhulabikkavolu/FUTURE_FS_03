import { FaTrash } from "react-icons/fa"

function Cart({ cart, removeFromCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  )

  const whatsappMessage = `
Hello GOLDEN BAKERY,

I would like to order:

${cart
  .map(
    (item, index) =>
      `${index + 1}. ${item.name} - ₹${item.price}`
  )
  .join("\n")}

Total: ₹${total}
`

  const whatsappLink =
    `https://wa.me/919440178477?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="py-24 px-10 md:px-20 bg-[#fff8f0]">

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Your Cart
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        Review your selected bakery items.
      </p>

      {cart.length === 0 ? (

        <p className="text-center mt-16 text-2xl text-gray-500">
          Cart is empty
        </p>

      ) : (

        <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-3xl shadow-xl">

          <div className="space-y-6">

            {cart.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between border-b pb-5"
              >

                <div>

                  <h3 className="text-2xl font-semibold text-[#6b4226]">
                    {item.name}
                  </h3>

                  <p className="text-orange-500 font-bold mt-1">
                    ₹{item.price}
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-xl hover:scale-110 transition"
                >
                  <FaTrash />
                </button>

              </div>

            ))}

          </div>

          <div className="mt-10 flex items-center justify-between">

            <h3 className="text-3xl font-bold text-[#6b4226]">
              Total: ₹{total}
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition">
                Place Order
              </button>

            </a>

          </div>

        </div>

      )}

    </section>
  )
}

export default Cart