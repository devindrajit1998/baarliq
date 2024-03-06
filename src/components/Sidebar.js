import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import "../";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    master: false,
    beer: false,
    bottle: false,
    liquor: false,
  });

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (dropdownName) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      [dropdownName]: !isDropdownOpen[dropdownName],
    });
  };

  return (
    <Card
      className={`fixed h-100vh w-1/5 bg_sidebar ${
        isSidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <div className="mb-2 p-4 flex justify-center">
        {/* Logo and other sidebar content here */}
        <img
          src={require("../assets/ic_barliq.png")}
          alt="brand_logo"
          style={{ width: "115px" }}
        />
      </div>
      {/* Mobile toggle button */}
      <div className="mx-auto bg-sidebar md:hidden">
        <button className="text-white" onClick={handleSidebarToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>


      {/* sidebar */}
      
{/* desktop  */}
<div className="sidebar md:block hidden">
        <ul className="menu">
          <li className="">
            <a href="#" className="flex items-center p-2 rounded-lg dd_menu">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 12.5H12.5L12.5 16.5H16.5V12.5ZM12.5 11H16.5C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 3.5H3.5L3.5 7.5H7.5V3.5ZM16.5 3.5H12.5V7.5H16.5V3.5ZM7.5 12.5H3.5L3.5 16.5H7.5V12.5ZM7.5 2H3.5C2.67157 2 2 2.67157 2 3.5V7.5C2 8.32843 2.67157 9 3.5 9H7.5C8.32843 9 9 8.32843 9 7.5V3.5C9 2.67157 8.32843 2 7.5 2ZM16.5 2H12.5C11.6716 2 11 2.67157 11 3.5V7.5C11 8.32843 11.6716 9 12.5 9H16.5C17.3284 9 18 8.32843 18 7.5V3.5C18 2.67157 17.3284 2 16.5 2ZM3.5 11H7.5C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11Z"
                  fill="white"
                />
              </svg>
              <span className="ml-3 text-white">Dashboard</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg dd_menu"
              aria-controls="master-dropdown"
              onClick={() => handleDropdownToggle("master")}
            >
              <i className="fa-solid fa-layer-group text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">
                Master Inventory
              </span>
              <svg
                className="w-3 h-3 mr-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="master-dropdown"
              className={isDropdownOpen.master ? "py-2 space-y-2" : "hidden"}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Add BAR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Add Sub-Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Stock Entry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Add Items
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg dd_menu"
              aria-controls="beer"
              onClick={() => handleDropdownToggle("beer")}
            >
              <i className="fa-solid fa-layer-group text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">
                Beer
              </span>
              <svg
                className="w-3 h-3 mr-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="beer"
              className={isDropdownOpen.beer ? "py-2 space-y-2" : "hidden"}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Load Beer
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg dd_menu"
              aria-controls="bottle"
              onClick={() => handleDropdownToggle("bottle")}
            >
              <i className="fa-solid fa-layer-group text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">
                Bottle
              </span>
              <svg
                className="w-3 h-3 mr-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="bottle"
              className={isDropdownOpen.bottle ? "py-2 space-y-2" : "hidden"}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Load Bottle
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg dd_menu"
              aria-controls="liquor"
              onClick={() => handleDropdownToggle("liquor")}
            >
              <i className="fa-solid fa-layer-group text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">
                Liquor
              </span>
              <svg
                className="w-3 h-3 mr-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="liquor"
              className={isDropdownOpen.liquor ? "py-2 space-y-2" : "hidden"}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group sub_menu "
                >
                  - Load Liquor
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
  );
}
