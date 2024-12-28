import React, {createContext, useContext,useEffect,useState } from "react";

interface Starship {
    name: string;
    model: string;
    
}
interface StarshipContextType {
    starships: Starship[];
    fetchStarships : () => Promise<void>
}

const StarshipContext = createContext<StarshipContextType | undefined>(undefined);

export const StarshipProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const [starship, setStarship] = useState<Starship[]>([]);
    const fetchStarships = async () => {
        try { 
            const response = await fetch('https://swapi.py4e.com/api/starships/');
            const data = await response.json();
            setStarship(data.results);
        }catch (error) {
            console.error('Error fetching starships:', error);
        }
    };

useEffect(()=>{
    fetchStarships();
}, []);

return( 
    <StarshipContext.Provider value={{starships, fetchStarships}}>
        {children}
    </StarshipContext.Provider>

);

export const useStarshipContext = () => {
    const context = useContext(StarshipContext);
    if (!context){
        throw new Error('useStarshipContext must be used within a StarshipProvider');
  }
  return context;
    }
}



}