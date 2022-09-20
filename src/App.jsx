import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Personajes from './Components/Personajes';

import Home from './Components/Home';
import NotFound from './Components/NotFound';
import PjDetails from './Components/PjDetails';
import Buscar from './Components/Buscar';
import Header from './Components/Header';
import { AutoProvider, useAuto } from './Components/Autorizacion';
import Login from './Components/Login';
function App() {
  const ProtectedRoute = ({ children }) => {
    const { isLogued } = useAuto();
    //coge la url de donde esta el usuario ene se momento
    const location = useLocation();

    if (!isLogued) {
      return (
        <Navigate
          to="/login"
          state={{
            location,
            dato: 'hola esto es un dato enviado por el state de navigate y abierto por el uselocation()',
          }}
        />
      );
    }
    return children;
  };

  return (
    <div className="App">
      <Header />
      <AutoProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            path="/personajes"
            element={
              <ProtectedRoute>
                <Buscar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personajes/:desc"
            element={
              <ProtectedRoute>
                <Personajes />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<PjDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AutoProvider>
    </div>
  );
}

export default App;
