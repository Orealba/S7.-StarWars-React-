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
import { createClient } from '@supabase/supabase-js';
import { ProtectedRoute } from './Components/Utils/ProtectedRoute';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

function App() {
  const [session, setSession] = useState(null);
  const handleSignOut = () => {
    supabase.auth.signOut().then(() => {
      window.location.reload();
    });
  };
  useEffect(() => {
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
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  providers={[]}
                />
              }></Route>
            <Route
              element={
                <ProtectedRoute
                  canActivate={!session}
                  supabase={supabase}
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
