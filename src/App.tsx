import { Home } from './Pages/Home';
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Starships } from './Pages/Starships';
import { StarshipProvider } from './Context/StarshipsContext';
import { ShipFile } from './Pages/ShipFile';
import { ShipsInfoProvider } from './Context/ShipsInfoContext';
import { useState, useEffect } from 'react';
import { createClient, Session } from '@supabase/supabase-js';
import { ProtectedRoute } from './Components/Utils/ProtectedRoute';
import { Login } from './Components/Login';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const handleSignOut = () => {
    supabase.auth.signOut().then(() => {
      window.location.reload();
    });
  };
  useEffect(() => {
    if (!supabase) {
      console.error('Supabase client is not initialized');
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <StarshipProvider>
      <ShipsInfoProvider>
        <>
          <Header
            session={session}
            handleSignOut={handleSignOut}
          />
          <Navbar></Navbar>

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={
                <Login
                  supabase={supabase}
                  session={session}
                />
              }></Route>
            <Route
              element={
                <ProtectedRoute
                  canActivate={!session}
                  supabase={supabase}
                  session={session}
                />
              }>
              <Route
                path="/ships"
                element={<Starships />}
              />

              <Route
                path="/ships/:id/info"
                element={<ShipFile />}
              />
            </Route>
          </Routes>
        </>
      </ShipsInfoProvider>
    </StarshipProvider>
  );
}

export default App;
