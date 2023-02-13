import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex items-center justify-between gap-8 mt-8">
          <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Share your unfiltered thoughts. Get paid.
            </h1>
            <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl">
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing <i>just</i> that.
            </p>
            <ul className="mb-5">
              <li className="flex items-center mb-2 text-gray-700">
                <Image
                  src={'/assets/checkmark.svg'}
                  width={30}
                  height={30}
                  alt="checkmark icon"
                />
                <span className="ml-3 text-lg font-semibold">
                  Receive 99% off the earnings.
                </span>
              </li>
              <li className="flex items-center mb-2 text-gray-700">
                <Image
                  src={'/assets/checkmark.svg'}
                  width={30}
                  height={30}
                  alt="checkmark icon"
                />
                <span className="ml-3 text-lg font-semibold">
                  Get paid via Debit Card, ACH, or PayPal.
                </span>
              </li>
              <li className="flex items-center mb-2 text-gray-700">
                <Image
                  src={'/assets/checkmark.svg'}
                  width={30}
                  height={30}
                  alt="checkmark icon"
                />
                <span className="ml-3 text-lg font-semibold">
                  Withdraw your earning anytime.
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md block px-5 py-2.5"
                placeholder="john@example.com"
                required
              />
              <button
                type="button"
                className="text-white bg-black rounded-md text-base font-semibold px-5 py-2.5 text-center"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/assets/desktop-hero.png"
              width={500}
              height={500}
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
