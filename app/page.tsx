import {
  Categories,
  HeaderHome,
  Popular,
  Questions,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <>
      <header className="fixed flex justify-center items-center w-full top-0 left-0 right-0">
        <HeaderHome />
      </header>
      <main className="bg-bgPrimary relative">
        <Categories />
        <Popular />
        <Questions />
        <Testimonials />
      </main>
    </>
  );
}
