
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="bg-black fixed top-20  sm:top-28 lg:top-32   left-1/2 transform -translate-x-1/2 z-50 w-full px-4 border-y border-gray-700">
        <nav className="bg-transparent">
          <div className="flex justify-center items-center ml- ">
            <ul className="flex space-x-1 items-center">
              <li className="border-x border-gray-700 border-b-2 border-b-transparent px-3 py-2 hover:border-b-blue-500 active:border-b-blue-500">
                <Link
                  to="/"
                  className="text-gray-400 rounded md:bg-transparent hover:text-white active:text-white hover:font-bold active:font-bold">
                  HOME
                </Link>
              </li>
              <li className="border-r border-gray-700 border-b-2 border-b-transparent py-2 px-1 hover:border-b-blue-500 active:border-b-blue-500">
                <Link
                  to="/ships"
                  className="text-gray-400 rounded md:bg-transparent hover:text-white active:text-white hover:font-bold active:font-bold">
                  STARSHIPS
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
