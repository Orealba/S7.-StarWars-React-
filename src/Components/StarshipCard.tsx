
interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
}
export const StarshipCard: React.FC<{ starship: Starship }> = ({
  starship,
}) => {
  return (
    <div className="grid gap-4 p-4">
      <a
        key={starship.name}
        href="#"
        className="block 
            w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1100px] 
            h-[70px] sm:h-[80px] md:h-[100px] 
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
      </a>
    </div>
  );
};
