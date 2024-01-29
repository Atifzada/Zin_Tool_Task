import React from "react";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import FooterLinks from "../components/FooterLinks";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const columns = [
  {
    heading: "Internal Link",
    links: [
      { text: "Documentaries", url: "/documentaries" },
      { text: "Themes", url: "/themes" },
      { text: "Chrome cast", url: "/chromecast" },
    ],
  },
  {
    heading: "Enterprise",
    links: [
      { text: "Download Chrome browser", url: "/download-chrome" },
      { text: "Chrome browser for Devices", url: "/chrome-devices" },
      { text: "Chrome browser for Enterprise", url: "/chrome-enterprise" },
      { text: "Chrome OS", url: "/chrome-os" },
      { text: "Google Cloud", url: "/google-cloud" },
      { text: "Google Workplace", url: "/google-workplace" },
    ],
  },
  {
    heading: "Internal Link",
    links: [
      { text: "Documentaries", url: "/documentaries" },
      { text: "Themes", url: "/themes" },
      { text: "Chrome cast", url: "/chromecast" },
    ],
  },
  {
    heading: "Enterprise",
    links: [
      { text: "Download Chrome browser", url: "/download-chrome" },
      { text: "Chrome browser for Devices", url: "/chrome-devices" },
      { text: "Chrome browser for Enterprise", url: "/chrome-enterprise" },
      { text: "Chrome OS", url: "/chrome-os" },
      { text: "Google Cloud", url: "/google-cloud" },
      { text: "Google Workplace", url: "/google-workplace" },
    ],
  },
  {
    heading: "Internal Link",
    links: [
      { text: "Documentaries", url: "/documentaries" },
      { text: "Themes", url: "/themes" },
      { text: "Chrome cast", url: "/chromecast" },
    ],
  },
];

const footerMenu: string[] = [
  "privacy policy",
  "terms & conditions",
  "cookies policy",
  "about us",
  "EULA",
  "contact",
];

const Footer = () => {
  const iconSize = 24;
  return (
    <footer className="bg-[#F1F3F4] w-full mt-8 px-16 py-8">
      <div className="flex gap-8 pb-8">
        <h3 className="font-semibold">Follow us</h3>
        <FaYoutube
          className="text-md cursor-pointer text-gray-600 hover:text-black"
          size={iconSize}
        />
        <FaTwitter
          className="text-md cursor-pointer text-gray-600 hover:text-black"
          size={iconSize}
        />
        <FaFacebookF
          className="text-md cursor-pointer text-gray-600 hover:text-black"
          size={iconSize}
        />
      </div>
      <div className="border-t-2 border-gray-400" />
      <div className="my-8 py-8">
        <FooterLinks columns={columns} />
      </div>
      <div className="border-t-2 border-gray-400" />
      <div className="flex mt-8 pt-8">
        {/* Logo */}
        <div className="w-48 pr-6">
          <Image src={logo} alt="Logo" width={192} height={192} />
        </div>
        {/* Menu */}
        <div className="flex items-center">
          {footerMenu.map((item, itemIndex) => (
            <p
              key={itemIndex}
              className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700 mx-6 capitalize"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
