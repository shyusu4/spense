import Image from 'next/image';

export default function EscrowCard() {
  return (
    <div className="flex items-center justify-between gap-8 mt-8 rounded-lg bg-gray-beige pt-10 px-[50px]">
      <div className="flex flex-col justify-center mx-[20px]">
        <h2 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none w-[22rem]">
          Secure your money with Escrow.
        </h2>
        <p className="mb-4 font-light text-gray-500 text-lg w-[29rem]">
          Spense uses Escrow to secure all payments. We believe Escrow offers
          the highest level of security for your payments, so you never need to
          worry about scams.
        </p>
        <a href="#" className="text-lg">
          Learn more about Escrow &rarr;
        </a>
      </div>
      <div>
        <Image
          src={'/assets/desktop-phone.png'}
          width={400}
          height={100}
          alt="escrow website on phone mockup"
        />
      </div>
    </div>
  );
}
