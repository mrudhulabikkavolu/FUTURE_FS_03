import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#6b4226] text-white py-16 px-10 md:px-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>

          <h2 className="text-4xl font-bold">
            GOLDEN BAKERY
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Freshly baked cakes, pastries, cookies,
            and delightful memories served every day.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-2xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4 text-gray-200">

            <li className="hover:text-orange-300 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-orange-300 cursor-pointer transition">
              Menu
            </li>

            <li className="hover:text-orange-300 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-orange-300 cursor-pointer transition">
              Contact
            </li>

          </ul>

        </div>

        {/* SOCIALS */}
        <div>

          <h3 className="text-2xl font-semibold">
            Follow Us
          </h3>

          <div className="flex gap-6 mt-6 text-2xl">

            <FaInstagram className="cursor-pointer hover:text-orange-300 transition" />

            <FaFacebookF className="cursor-pointer hover:text-orange-300 transition" />

            <FaTwitter className="cursor-pointer hover:text-orange-300 transition" />

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-400 mt-12 pt-8 text-center text-gray-300">

        © 2026 GOLDEN BAKERY. All rights reserved.

      </div>

    </footer>
  )
}

export default Footer