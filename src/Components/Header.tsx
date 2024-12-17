import logo from '../assets/images/logo.png';
import '../Components/styles/Header.css';

export const Header = () => {
  return (
    <>
      <div className="grid grid-cols-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
        <img
          src={logo}
          alt="logo"
          className="mt-4 w-32 h-14 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-[12.5rem] lg:h-[5.8rem] mx-auto col-start-2"
        />
        <div className="flex gap-4 items-center justify-end">
          <button
            type="button"
            className="bg-transparent text-white font-medium rounded-lg text-sm px-1  text-center outline-none focus:outline-none hover:outline-none border-none focus:border-none hover:border-none ring-0 focus:ring-0 hover:ring-0 hover:scale-105 transition-transform">
            LOGIN
          </button>
          <p className='text-gray-500'>//</p>
          <button
            type="button"
            className="bg-transparent text-white font-medium rounded-lg text-sm px-3  text-center outline-none focus:outline-none hover:outline-none border-none focus:border-none hover:border-none ring-0 focus:ring-0 hover:ring-0 hover:scale-105 transition-transform">
            SIGNUP
          </button>
        </div>
      </div>
    </>
  );
};
