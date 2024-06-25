"use client";

import Image from "next/image";
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
    <header className="shadow-sm bg-blue-950 z-50 relative">
      <Container classes="py-4 flex justify-between items-center">
        <Image
          src={"/logo_landscape.png"}
          height={36}
          width={84}
          alt="Dream Digital Logo"
        />

        <nav
          className={`${
            !isMenuOpen ? "hidden" : "flex"
          } md:flex flex-col md:flex-row w-full px-6 py-6 md:p-0 md:w-max left-0 text-white font-[300] text-sm absolute md:relative top-[100%] bg-blue-700 md:bg-transparent`}
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
        </nav>

        <div className="menu-toggler flex md:hidden" onClick={toggleMenu}>
          <AiOutlineMenu size={24} className="text-white" />
        </div>

        <Link
          className=" hidden md:block"
          href={"https://wa.me/message/QCRD26U4R3SID1"}
          target="_blank"
        >
          <button className="text-white border px-4 py-2 rounded-lg font-semibold">
            Let&apos;s Get Started
          </button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
