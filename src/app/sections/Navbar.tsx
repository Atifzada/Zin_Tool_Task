import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const iconSize = 20;
  return (
    <nav className="bg-white shadow-md p-4">
      {/* First Line */}
      <div className="flex items-center justify-between min-w-full px-8">
        {/* Logo */}
        <div className="w-24">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>

        {/* Search Bar */}
        <div className="relative mx-4">
      <input
        type="text"
        placeholder="Search for Movie, TV Shows, Themes & Cast"
        className="w-96 rounded-full p-2 px-4 focus:outline-none focus:ring focus:border-gray-500 bg-gray-200 placeholder:pr-8"
      />
      <div className="absolute right-2 top-3">
      <IoSearch size={iconSize} />
        {/* < className="text-gray-500" /> */}
      </div>
    </div>     

        {/* Login and Signup Buttons */}
        <div className="flex items-center space-x-4">
          <button className=" text-black font-bold rounded-full px-4 py-2">
            Login
          </button>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2">
            Signup
          </button>
        </div>
      </div>

      {/* Second Line - Menu Links */}
      <div className="flex items-center justify-center font-medium text-gray-600 mt-8">
        <ul className="flex space-x-10">
          <li>
            <Link href="https://elements.envato.com/stock-video" target="_blank">Stock Video</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/video-templates" target="_blank">Video Templates</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/audio" target="_blank">Music</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/sound-effects" target="_blank">Sound Effect</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/graphics" target="_blank">Graphic Templates</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/presentation-templates" target="_blank">Graphics</Link>
          </li>
          <li>
            <Link href="/presentation-templates" target="_blank">Presentation Templates</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/photos" target="_blank">Photos</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/fonts" target="_blank">Fonts</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/add-ons" target="_blank">Add-ons</Link>
          </li>
          <li>
            <Link href="https://elements.envato.com/web-templates" target="_blank">More</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
