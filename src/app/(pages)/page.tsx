import Container from "@/components/shared/container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="h-[90vh] flex flex-col  min-h-screen  items-center">
        <Container classes="h-full flex flex-col text-center max-w-4xl px-8 items-center justify-center">
          <h1 className="font-bold text-blue-500 opacity-70 text-4xl md:text-6xl lg:txt-7xl xl:text-8xl uppercase">
            Unlocking Possibilities with Creative Innovations
          </h1>

          <p></p>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Our works</h2>
        </Container>
      </section>

      
      <section>
        <Container>
          <h2>Our solutions</h2>
        </Container>
      </section>

       
      <section>
        <Container>
          <h2>Testimonials</h2>
        </Container>
      </section>
    </main>
  );
}
