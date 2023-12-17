import { logo } from "@/data/images";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaInstagram className="text-3xl" />, link: "#" },
    { icon: <FaFacebook className="text-3xl" />, link: "#" },
    { icon: <FaLinkedin className="text-3xl" />, link: "#" },
  ];

  const Discover = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Login", path: "/login" },
  ];

  const Links = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];

  const renderLinks = (linkArray) => (
    <ul className="flex flex-col gap-3">
      <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
        Links
      </h1>
      {linkArray.map(({ title, path }) => (
        <li key={title} className="cursor-pointer">
          <a href={path}>{title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="max-w-[50px]"
              />
              Chef Delights
            </h1>
            <p className="">
              Chef Delights invites you to savor the essence of authentic Indian
              cuisine. Our culinary sanctuary curates a diverse range of
              recipes, meticulously crafted by skilled chefs.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>India</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+919999999999</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map(({ icon, link }) => (
                <a key={link} href={link}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">{renderLinks(Discover)}</div>
            <div className="py-8 px-4">{renderLinks(Links)}</div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            Made with ❤️ by Tukaram Sawant
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
