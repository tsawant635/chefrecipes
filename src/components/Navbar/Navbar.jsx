import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fallbackUserProfile, logo } from "@/data/images";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [userPhotoURL, setUserPhotoURL] = useState(fallbackUserProfile);

  useEffect(() => {
    // Check if the user is signed in by checking localStorage
    const signedIn = localStorage.getItem("isUserSignedIn");
    if (signedIn) {
      setIsUserSignedIn(true);
      const displayName = localStorage.getItem("displayName") || "T Sawant";
      setUserName(displayName);
      const photoURL =
        localStorage.getItem("photoURL") || fallbackUserProfile
      setUserPhotoURL(photoURL);
    }
  }, []);

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img
                  src= {logo}
                  alt="Logo"
                  className="w-10"
                />
                Chef Delights
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              {isUserSignedIn ? (
                // Display profile picture and name if user is signed in
                <Link href="/user-details">
                  <div className="flex items-center gap-3 cursor-pointer">
                    <div className="relative group">
                      <img
                        src={userPhotoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                    </div>

                    <p className="hover:text-yellow-500 cursor-pointer">
                      {userName}
                    </p>
                  </div>
                </Link>
              ) : (
                // Display login button if user is not signed in
                <Link href="/login">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  Login
                </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
