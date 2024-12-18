import { Home } from './Pages/Home';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { StarshipCard } from './Components/StarshipCard';

function App() {
  return (
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
          element={<StarshipCard />}
        />
      </Routes>
    </>
  );
}

export default App;
