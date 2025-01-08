import { Home } from './Pages/Home';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Starships } from './Pages/Starships';
import { StarshipProvider } from './Context/StarshipsContext';
import { ShipFile } from './Pages/ShipFile';

function App() {
  return (
    <StarshipProvider>
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
          {/*OJO AQUÍ CON EL NAME EN EL LINK */}
          <Route
            path="/ships/:name/info"
            element={<ShipFile />}
          />
        </Routes>
      </>
    </StarshipProvider>
  );
}

export default App;
