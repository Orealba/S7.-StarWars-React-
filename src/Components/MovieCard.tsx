import { Link } from 'react-router-dom';

interface Film {
  id: number;
  title: string;
}
export const MovieCard: React.FC<{ film: Film }> = ({ film }) => {
  return (
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/films/${film.id}`}
        className="block
           w-[400px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[400px]
            h-[80px] sm:h-[60px] md:h-[230px]
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div className="flex flex-col justify-between leading-normal">
          <h4 className="text-xl font-bold  text-gray-400 ">{film.title}</h4>
        </div>
      </Link>
    </div>
  );
};
