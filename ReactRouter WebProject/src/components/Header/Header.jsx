import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons for the menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-12"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {["Home", "About", "Contact", "Github"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium duration-200 ${
                    isActive ? "text-orange-700 border-b-2 border-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex space-x-3">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2 transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2 transition duration-300"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-4 pb-4 border-t border-gray-200">
            {["Home", "About", "Contact", "Github"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2 transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2 transition duration-300"
            >
              Get started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
