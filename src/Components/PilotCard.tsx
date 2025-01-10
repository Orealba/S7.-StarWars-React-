import { Link } from 'react-router-dom';

interface Pilot {
  id: number;
  name: string;
}

export const PilotCard: React.FC<{ pilot: Pilot }> = ({ pilot }) => {
  return (
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/pilots/${pilot.id}`} 
        className="block
            w-[1000px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[1500px]
            h-[100px] sm:h-[80px] md:h-[230px]
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div className="flex flex-col justify-between leading-normal">
          <h4 className="mb-4 text-3xl font-bold tracking-tight text-gray-400 ">
            {pilot.name}
          </h4>
        </div>
      </Link>
    </div>
  );
};
