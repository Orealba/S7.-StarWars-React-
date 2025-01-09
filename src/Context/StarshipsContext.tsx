import React, { createContext, useContext, useEffect, useState } from 'react';

interface StarshipContextType {
  starships: Starship[];
  fetchStarships: (url?: string) => Promise<void>;
  loadMore: () => Promise<void>;
  allLoaded: boolean;
}
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
interface StarshipContextType {
  starships: Starship[];

  loadMore: () => Promise<void>;
}

const StarshipContext = createContext<StarshipContextType | undefined>(
  undefined,
);

export const StarshipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    'https://swapi.orealbasoriano.com/api/starships',
  );
  const [allLoaded, setAllLoaded] = useState(false);

  const fetchStarships = async (url: string = nextUrl!) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueStarships = data.data.filter(
        (starship: Starship) =>
          !starships.some(
            (existingStarship) => existingStarship.name === starship.name,
          ),
      );

      setStarships((prevStarships) => [...prevStarships, ...uniqueStarships]);
      setNextUrl(data.next_page_url);

      if (!data.next_page_url) {
        setAllLoaded(true);
      }
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };

  const loadMore = async () => {
    if (nextUrl) {
      await fetchStarships(nextUrl);
    }
  };

  useEffect(() => {
    const loadInitialStarships = async () => {
      await fetchStarships();
      console.log('Naves cargadas:', starships);
    };

    loadInitialStarships();
  }, []);

  return (
    <StarshipContext.Provider
      value={{ starships, fetchStarships, loadMore, allLoaded }}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarshipContext = () => {
  const context = useContext(StarshipContext);
  if (!context) {
    throw new Error(
      'useStarshipContext must be used within a StarshipProvider',
    );
  }
  return context;
};
