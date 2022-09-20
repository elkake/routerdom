import './App.css';
import { Route, Routes } from 'react-router-dom';
import Personajes from './Components/Personajes';

import Home from './Components/Home';
import NotFound from './Components/NotFound';
import PjDetails from './Components/PjDetails';
import Buscar from './Components/Buscar';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="personajes" element={<Buscar />} />
        <Route path="personajes/:desc" element={<Personajes />}>
          <Route path="details" element={<PjDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
