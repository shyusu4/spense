import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section>
        <div className="grid max-w-screen-xl py-8 top-5 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Share your unfiltered thoughts. Get paid.
            </h1>
            <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl">
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing <i>just</i> that.
            </p>
            <ul>
              <li className="flex items-center mb-2 text-gray-700">
                <Image
                  src={'/assets/Checkmark.svg'}
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
                  src={'/assets/Checkmark.svg'}
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
                  src={'/assets/Checkmark.svg'}
                  width={30}
                  height={30}
                  alt="checkmark icon"
                />
                <span className="ml-3 text-lg font-semibold">
                  Withdraw your earning anytime.
                </span>
              </li>
            </ul>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/assets/desktop-hero.png"
              width={500}
              height={500}
              alt="Hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
