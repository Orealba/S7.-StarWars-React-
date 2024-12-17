import { Welcome } from './Pages/Welcome';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Welcome></Welcome>
    </>
  );
}

export default App;
