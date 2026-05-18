import { useState } from "react"

function CakeOrder() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cakeType: "",
    celebration: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCakeOrder = () => {

    const whatsappMessage = `
Hello GOLDEN BAKERY,

I would like to place a cake order.

Customer Name: ${formData.name}

Phone Number: ${formData.phone}

Cake Type: ${formData.cakeType}

Celebration Type: ${formData.celebration}

Custom Requirements:
${formData.message}
`

    const whatsappLink =
      `https://wa.me/919440178477?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <section className="py-24 px-10 md:px-20 bg-white">

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Birthday Cake Orders
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        Customize cakes for birthdays and special celebrations.
      </p>

      <div className="max-w-3xl mx-auto mt-16 bg-[#fff8f0] p-10 rounded-3xl shadow-xl">

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />

          <select
            name="cakeType"
            value={formData.cakeType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          >
            <option value="">Select Cake Type</option>
            <option>Chocolate Cake</option>
            <option>Vanilla Cake</option>
            <option>Butterscotch Cake</option>
            <option>Black Forest Cake</option>
            <option>Red Velvet Cake</option>
          </select>

          <select
            name="celebration"
            value={formData.celebration}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          >
            <option value="">Choose Celebration Type</option>
            <option>Children Birthday</option>
            <option>Adults Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your custom cake design or requirements"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          ></textarea>

          <button
            onClick={handleCakeOrder}
            className="w-full bg-[#6b4226] text-white py-4 rounded-xl hover:bg-orange-500 transition"
          >
            Place Cake Order
          </button>

        </div>

      </div>
    </section>
  )
}

export default CakeOrder