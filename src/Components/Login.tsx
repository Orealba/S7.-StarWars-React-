import { supabase } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import darth from '../assets/images/Darth.png';

export const Login = ({ supabase, session }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate('/ships'); // Redirige a la página de Starships si hay sesión
    }
  }, [session, navigate]); // Dependencias del useEffect

  return (
    <div>
      <img
        src={darth}
        alt=""
        className=" flex justify-center max-w-80 w-3/7 mt-40 "
      />
      <h1 className="text-3xl font-['Star_Jedi'] text-yellow-400">
        log in or Sign up
      </h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    </div>
  );
};
