import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  FileArchive,
  Users,
  Info,
  Rocket,
  Mail,
} from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Placeholder for the logo if the original path isn't available in the environment.
  // In a real application, ensure the 'logo' import is correct.
  const logoPlaceholder =
    "https://placehold.co/150x48/2E7D32/F1F8F4?text=E-Cell+Logo";

  const navLinks = [
    { name: "Home", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "Initiative", icon: <Rocket className="w-4 h-4 mr-1" /> },
    { name: "Archives", icon: <FileArchive className="w-4 h-4 mr-1" /> },
    { name: "Team", icon: <Users className="w-4 h-4 mr-1" /> },
    { name: "About", icon: <Info className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="bg-[#2E7D32] shadow-md fixed w-full z-20 top-0 left-0 border-b border-[#1B5E20]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} className="h-12 rounded-lg" alt="E-Cell Logo" />
        </a>

        {/* Desktop Contact Us Button */}
        <div className="hidden md:flex md:order-2">
          <button
            type="button"
            className="flex items-center gap-1 text-white bg-[#66BB6A] hover:bg-[#AED581] hover:text-[#212121] font-semibold rounded-lg text-sm px-4 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden md:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-[#66BB6A] focus:outline-none focus:ring-2 focus:ring-[#AED581] transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#2E7D32] md:flex-row md:space-x-8 md:mt-0 md:bg-transparent">
            {navLinks.map(({ name, icon }) => (
              <li key={name}>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-[#F1F8F4] rounded transition-all duration-300 hover:text-[#AED581] md:hover:bg-transparent md:hover:text-[#AED581] md:p-0"
                >
                  {icon}
                  {name}
                </a>
              </li>
            ))}

            {/* Mobile Contact Us Button */}
            <li className="mt-2 md:hidden flex items-center">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-1 text-white bg-[#66BB6A] hover:bg-[#AED581] hover:text-[#212121] font-semibold rounded-lg text-sm px-4 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
