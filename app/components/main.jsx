import Navbar from './navbar';
import Hero from './hero';
import Logos from './logos';
import EscrowCard from './escrowcard';

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
      </main>
    </>
  );
}
