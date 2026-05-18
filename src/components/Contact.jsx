import { useState } from "react"

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSendMessage = () => {

    const whatsappMessage = `
Hello GOLDEN BAKERY,

Customer Name: ${contactData.name}

Customer Email: ${contactData.email}

Message:
${contactData.message}
`

    const whatsappLink =
      `https://wa.me/919440178477?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <section
      id="contact"
      className="py-24 px-10 md:px-20 bg-[#fff8f0]"
    >

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Contact Us
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        We'd love to hear from you and serve you fresh delights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">

        {/* LEFT SIDE */}
        <div>

          <div className="flex items-center gap-4 mb-8">

            <FaMapMarkerAlt className="text-3xl text-orange-500" />

            <div>
              <h3 className="text-2xl font-semibold text-[#6b4226]">
                Address
              </h3>

              <p className="text-gray-600">
                GOLDEN BAKERY, Main Road, Your City
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 mb-8">

            <FaPhoneAlt className="text-3xl text-orange-500" />

            <div>
              <h3 className="text-2xl font-semibold text-[#6b4226]">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 9876543210
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 mb-8">

            <FaEnvelope className="text-3xl text-orange-500" />

            <div>
              <h3 className="text-2xl font-semibold text-[#6b4226]">
                Email
              </h3>

              <p className="text-gray-600">
                goldenbakery@gmail.com
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-6 outline-none focus:border-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-6 outline-none focus:border-orange-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={contactData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-6 outline-none focus:border-orange-500"
          ></textarea>

          <button
            onClick={handleSendMessage}
            className="w-full bg-[#6b4226] text-white py-4 rounded-xl hover:bg-orange-500 transition"
          >
            Send Message
          </button>

        </div>

      </div>
    </section>
  )
}

export default Contact