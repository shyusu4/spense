import Navbar from './navbar';
import Hero from './hero';
import Logos from './logos';
import EscrowCard from './escrowcard';
import EditorCard from './editorcard';
import Footer from './footer';

export default function Main() {
  return (
    <>
      <header className="lg:px-[150px] md:px-[50px] py-[20px] bg-gray-beige">
        <Navbar />
        <Hero />
      </header>
      <main className="lg:px-[150px] md:px-[50px] py-[20px]"></main>
    </>
  );
}
