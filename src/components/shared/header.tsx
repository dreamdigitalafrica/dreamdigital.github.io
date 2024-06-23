import Image from "next/image";
import Container from "./container";
import Link from "next/link";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="shadow-sm bg-blue-950 z-50">
      <Container classes="py-4 flex justify-between items-center">
        <Image
          src={"/logo_landscape.png"}
          height={36}
          width={84}
          alt="Dream Digital Logo"
        />

        <nav className="text-white font-[300]   text-sm ">
          <ul className="flex gap-6">
            <li>
              <Link href={"/"}>Who we are</Link>
            </li>
            <li>
              <Link href={"/"}>What we do</Link>
            </li>
            <li>
              <Link href={"/our-works"}>Our works</Link>
            </li>
            <li>
              <Link href={"/"}>Our blog</Link>
            </li>
            <li>
              <Link href={"/"}>Reach us</Link>
            </li>
          </ul>
        </nav>

        <Link
          className="hidden md:block"
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
