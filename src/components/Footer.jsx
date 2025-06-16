import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Home,
  Rocket,
  FileArchive,
  Users,
  Info,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B5E20] text-[#E8F5E9] pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="E-Cell Logo" className="h-14 mb-4" />
          <p className="text-sm text-justify leading-relaxed text-[#C8E6C9]">
            e-Entrepreneurship Cell is a non-profit organisation solely with the
            purpose of creating awareness towards the developing entrepreneurial
            culture in our surrounding and encourage students to embrace the
            idea of starting their own venture and also to inspire and guide
            young entrepreneurs and their start-ups.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center hover:text-[#A5D6A7] transition">
              <Home className="w-4 h-4 mr-2" /> <a href="#">Home</a>
            </li>
            <li className="flex items-center hover:text-[#A5D6A7] transition">
              <Rocket className="w-4 h-4 mr-2" /> <a href="#">Initiative</a>
            </li>
            <li className="flex items-center hover:text-[#A5D6A7] transition">
              <FileArchive className="w-4 h-4 mr-2" /> <a href="#">Archives</a>
            </li>
            <li className="flex items-center hover:text-[#A5D6A7] transition">
              <Users className="w-4 h-4 mr-2" /> <a href="#">Team</a>
            </li>
            <li className="flex items-center hover:text-[#A5D6A7] transition">
              <Info className="w-4 h-4 mr-2" /> <a href="#">About</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" /> ecell@example.com
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +91 98765 43210
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> E-Cell Office, XYZ Campus
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us On</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#A5D6A7] transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#A5D6A7] transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#A5D6A7] transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#A5D6A7] transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs mt-10 border-t border-[#388E3C] pt-4 text-[#C8E6C9]">
        © {new Date().getFullYear()} E-Cell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
