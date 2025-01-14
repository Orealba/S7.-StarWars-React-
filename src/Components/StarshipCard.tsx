import { Link } from 'react-router-dom';

interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  pilots: string[];
}
export const StarshipCard: React.FC<{ starship: Starship }> = ({
  starship,
}) => {
  return (
    <div className="grid gap-4 p-4">
      <Link
        to={`/ships/${starship.id}/info`}
        className="block 
            w-[19rem] sm:w-[25rem] md:w-[500px] lg:w-[50rem] xl:w-[70rem] 
            h-100px] sm:h-[80px] md:h-[110px] 
            p-3 sm:p-4 md:p-6 bg-gray-800/50 border border-gray-700 rounded-lg shadow 
            hover:bg-gray-700/50 transition-all duration-300 transform 
            hover:scale-[1.02] text-left
            mx-auto">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl sm:text-xs md:text-xl font-bold tracking-tight text-white">
            {starship.name}
          </h2>
          <p className="text-gray-300 text-sm mt-1">{starship.model}</p>
        </div>
      </Link>
    </div>
  );
};
