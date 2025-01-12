import { Outlet } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { SupabaseClient } from '@supabase/supabase-js';

interface ProtectedRouteProps {
  canActivate: boolean;
  supabase: SupabaseClient;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  canActivate,
  supabase,
}) => {
  if (canActivate) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    );
  }

  return <Outlet />;
};
