export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex flex-wrap items-center justify-between pt-5">
          <a href="" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              spense.
            </span>
          </a>
          <div className="flex items-center justify-between text-lg md:order-2">
            <div className="lg:space-x-5 md:space-x-2 invisible md:visible">
              <span href="#" aria-current="page">
                Login
              </span>
              <button
                type="button"
                className="text-white bg-black rounded-lg text-base font-semibold lg:px-5 lg:py-2.5 md:px-3 md:py-1.5 text-center"
              >
                Get Started
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden md:flex md:w-auto md:order-1">
            <ul className="flex flex-row lg:space-x-5 md:space-x-2 text-lg">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded md:p-0"
                  aria-current="page"
                >
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
