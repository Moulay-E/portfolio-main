'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="colorGris top-0 fixed w-full z-50  text-gray-50 border-white border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  font-poppins font-bold   ">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap ">
            Moulay Edda
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="  flex flex-col font-medium mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <Link
                href="/"
                className="transition-transform hover:scale-110 block py-2 pl-3 pr-4 text-gray-50 rounded md:bg-transparent  md:p-0  "
                aria-current="page"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#presentation"
                className="transition-transform hover:scale-110 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                onClick={toggleMenu}
              >
                Presentation
              </Link>
            </li>
            <li>
              <Link
                href="/#competence"
                className="transition-transform hover:scale-110 block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0 "
                onClick={toggleMenu}
              >
                Competence
              </Link>
            </li>
            <li>
              <Link
                href="/#project"
                className="transition-transform hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0 md:p-0  "
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="transition-transform hover:scale-110 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  "
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
