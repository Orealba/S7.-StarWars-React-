import "./styles/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 border-y border-gray-700">
        <nav className="bg-transparent">
          <div className="flex justify-center items-center  ">
            <ul className="flex space-x-8 items-center">
              <li className="border-x border-gray-700 px-3 py-2">
                <a
                  href="#"
                  className="block  text-gray-400 rounded  md:bg-transparent hover:text-white active:text-white hover:font-bold active:font-bold"
                  aria-current="page">
                  HOME
                </a>
              </li>
              <li className="border-r border-gray-700  py-2 pr-3 starship-button">
                <a
                  href="#"
                  className="block   text-gray-400 rounded md:bg-transparent hover:text-white active:text-white hover:font-bold active:font-bold">
                  STARSHIPS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
