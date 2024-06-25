"use client";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Container from "./container";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-sm bg-white  z-50 sticky top-0">
      <Container classes="py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/logo_landscape.png"}
            height={36}
            width={84}
            alt="Dream Digital Logo"
          />
        </Link>

        <nav
          className={`${
            !isMenuOpen ? "hidden" : "flex"
          } md:flex flex-col md:flex-row w-full px-6 pt-12  md:p-0 md:w-max left-0 text-blue-500 absolute md:relative top-0  h-screen md:h-max shadow-sm text-sm md:text-base bg-white`}
        >
          <ul className="flex flex-col md:flex-row gap-6 w-full font-semibold">
            <li className="w-full md:w-max">
              <Link
                className="w-full flex"
                href={"/"}
                onClick={() => setIsMenuOpen(false)}
              >
                Who we are
              </Link>
            </li>
            <li className="w-full md:w-max">
              <Link
                className="w-full flex"
                href={"/"}
                onClick={() => setIsMenuOpen(false)}
              >
                What we do
              </Link>
            </li>
            <li className="w-full md:w-max">
              <Link
                className="w-full flex"
                href={"/our-works"}
                onClick={() => setIsMenuOpen(false)}
              >
                Our works
              </Link>
            </li>
            <li className="w-full md:w-max">
              <Link
                className="w-full flex"
                href={"/"}
                onClick={() => setIsMenuOpen(false)}
              >
                Our blog
              </Link>
            </li>
            <li className="w-full md:w-max">
              <Link
                className="w-full flex"
                href={"/"}
                onClick={() => setIsMenuOpen(false)}
              >
                Reach us
              </Link>
            </li>
          </ul>

          <div className="menu-toggler absolute flex md:hidden top-4 right-4" onClick={toggleMenu}>
            <FaTimes size={24} />
          </div>
        </nav>

        <div className="menu-toggler flex md:hidden" onClick={toggleMenu}>
          <AiOutlineMenu size={24} className="text-blue-500" />
        </div>

        <Link
          className=" hidden md:block"
          href={"https://wa.me/message/QCRD26U4R3SID1"}
          target="_blank"
        >
          <button className="text-blue-500 border px-4 py-2 rounded-lg font-semibold border-[#ff674d]">
            Let&apos;s Get Started
          </button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
