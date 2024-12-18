import { Link } from 'react-router-dom';
import { Carrousel } from '../Components/Carrousel';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" ">
        <Carrousel />
      </div>
      <div className="fixed bottom-0 right-20 sm:bottom-1 sm:right-1/2 sm:translate-x-1/2">
        <Link
          to="/ships"
          className="inline-block px-12 py-4 mb-3 text-lg font-bold text-white bg-black border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 font-['Star_Jedi']">
          Comenzar
        </Link>
      </div>
    </div>
  );
};
