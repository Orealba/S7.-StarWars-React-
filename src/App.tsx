import { Home } from './Pages/Home';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Starships } from './Pages/Starships'

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
          element={<Starships />}
        />
      </Routes>
    </>
  );
}

export default App;
