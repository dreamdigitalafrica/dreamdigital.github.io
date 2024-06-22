import Image from "next/image";
import Container from "./container";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="py-4 border-t">
      <Container>
        <div className="flex justify-between items-center">
        <Image
          src={"/logo_landscape.png"}
          height={30}
          width={80}
          alt="Dream Digital Logo"
        />

          <p className="text-sm"> All rights Reserved <span>&copy; 2024</span></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
