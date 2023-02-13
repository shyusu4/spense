export default function Footer() {
  return (
    <footer className="flex justify-between bg-black text-white px-[150px] pt-[50px] pb-[80px]">
      <div>
        <a href="#">
          <h2 className="text-lg font-bold whitespace-nowrap mb-2">spense.</h2>
        </a>
        <p className="text-gray-500 w-[20rem]">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing{' '}
          <i>just</i> that.
        </p>
      </div>
      <div className="flex justify-between gap-24">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Sitemap</h3>
          <a href="#" className="text-gray-500">
            Homepage
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Resources</h3>
          <ul className="text-gray-500">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul className="text-gray-500">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Opportunities</h3>
          <a href="#" className="text-gray-500">
            Jobs
          </a>
        </div>
      </div>
    </footer>
  );
}
