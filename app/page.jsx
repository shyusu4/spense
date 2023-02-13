import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
export default function Home() {
  return (
    <>
      <header className="px-[100px] py-[20px] bg-gray-beige">
        <Navbar />
        <Hero />
      </header>
    </>
  );
}

