import logo from "../assets/logo.jpg"

function Navbar({ cartCount }) {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-[#fff8f0] shadow-md fixed top-0 left-0 z-50">

      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="Golden Bakery Logo"
          className="w-14 h-14 object-cover rounded-full"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4226]">
          GOLDEN BAKERY
        </h1>

      </div>

      <ul className="hidden md:flex gap-8 text-lg font-medium text-[#6b4226]">

        <a href="#home">
          <li className="cursor-pointer hover:text-orange-500 transition">
            Home
          </li>
        </a>

        <a href="#menu">
          <li className="cursor-pointer hover:text-orange-500 transition">
            Menu
          </li>
        </a>

        <a href="#about">
          <li className="cursor-pointer hover:text-orange-500 transition">
            About
          </li>
        </a>

        <a href="#contact">
          <li className="cursor-pointer hover:text-orange-500 transition">
            Contact
          </li>
        </a>

      </ul>

      <div className="bg-[#6b4226] text-white px-5 py-2 rounded-full font-semibold">

        Cart: {cartCount}

      </div>

    </nav>
  )
}

export default Navbar