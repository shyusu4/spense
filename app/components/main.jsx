import Navbar from './navbar';
import Hero from './hero';
import Logos from './logos';
import EscrowCard from './escrowcard';
import EditorCard from './editorcard';
import Footer from './footer';

export default function Main() {
  return (
    <>
      <header className="px-[150px] py-[20px] bg-gray-beige">
        <Navbar />
        <Hero />
      </header>
      <main className="px-[150px] py-[20px]">
        <Logos />
        <EscrowCard />
        <EditorCard />
      </main>
      <Footer />
    </>
  );
}
