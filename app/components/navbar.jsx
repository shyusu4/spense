export default function Navbar() {
  return (
    <>
      <nav className="py-2 w-full z-20 top-0 left-0 right-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              spense.
            </span>
          </a>
          <div className="flex items-center justify-between space-x-8 text-lg md:order-2">
            <div className="invisible md:visible space-x-8">
              <span href="#" aria-current="page">
                Login
              </span>
              <button
                type="button"
                className="text-white bg-black rounded-lg text-base font-semibold px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Get Started
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row p-4 mt-4 space-x-8 mt-0 text-lg">
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
