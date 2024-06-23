import Container from "@/components/shared/container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Container classes="h-[90vh] flex flex-col text-center max-w-4xl px-8 items-center justify-center">
        <h1 className="font-bold text-blue-500 opacity-70 text-6xl lg:txt-7xl xl:text-8xl uppercase">
          Unlocking Possibilities with Creative Innovations
        </h1>

        <p></p>
      </Container>
    </main>
  );
}
