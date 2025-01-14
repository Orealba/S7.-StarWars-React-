import React, { createContext, useContext, useState } from 'react';

interface Pilot {
  id: number;
  name: string;
}

interface Film {
  id: number;
  title: string;
}
interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: number;
  max_atmosphering_speed: string;
  crew: string;
  pilots: string[];
}

interface ShipsInfoContextType {
  starship: Starship | null;
  pilots: Pilot[];
  films: Film[];
  fetchStarshipById: (id: number) => Promise<void>;
}

const ShipsInfoContext = createContext<ShipsInfoContextType | undefined>(
  undefined,
);

export const ShipsInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starship, setStarship] = useState<Starship | null>(null);
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [films, setFilms] = useState<Film[]>([]);

  const fetchStarshipById = async (id: number) => {
    try {
      const response = await fetch(
        `https://swapi.orealbasoriano.com/api/starships/${id}`,
      );
      const data = await response.json();
      setStarship(data);
      setPilots(data.pilots);
      setFilms(data.films);
    } catch (error) {
      console.error('Error fetching starship by ID:', error);
    }
  };

  return (
    <ShipsInfoContext.Provider
      value={{
        starship,
        pilots,
        films,
        fetchStarshipById,
      }}>
      {children}
    </ShipsInfoContext.Provider>
  );
};

export const useShipsInfoContext = () => {
  const context = useContext(ShipsInfoContext);
  if (!context) {
    throw new Error(
      'useShipsInfoContext must be used within a ShipsInfoProvider',
    );
  }
  return context;
};
