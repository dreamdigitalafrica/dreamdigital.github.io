import Image from "next/image";
import Container from "./container";
import Link from "next/link";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="shadow-sm">
      <Container classes="py-4 flex justify-between items-center">
        <Image
          src={"/logo_landscape.png"}
          height={40}
          width={100}
          alt="Dream Digital Logo"
        />

        <Link href={"https://wa.me/message/QCRD26U4R3SID1"} target="_blank">
          <button className="border px-4 py-2 rounded-lg font-semibold">
            Let's Get Started
          </button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
