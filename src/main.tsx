import './index.css';
import App from './App.tsx';
import 'flowbite/dist/flowbite.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
