import { Home } from './Pages/Home';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Starships } from './Pages/Starships';
import { StarshipProvider } from './Context/StarshipsContext';
import { ShipFile } from './Pages/ShipFile';
import { ShipsInfoProvider } from './Context/ShipsInfoContext';

function App() {
  return (
    <StarshipProvider>
      <ShipsInfoProvider>
        <>
          <Header></Header>
          <Navbar></Navbar>

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/ships"
              element={<Starships />}
            />
            
            <Route
              path="/ships/:id/info"
              element={<ShipFile />}
            />
          </Routes>
        </>
      </ShipsInfoProvider>
    </StarshipProvider>
  );
}

export default App;
