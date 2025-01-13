import { Outlet } from 'react-router-dom';

import { SupabaseClient } from '@supabase/supabase-js';

import { Login } from '../Login';

interface ProtectedRouteProps {
  canActivate: boolean;
  supabase: SupabaseClient;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  canActivate,
  supabase,
}) => {
  if (canActivate) {
    return <Login supabase={supabase} />;
  }

  return <Outlet />;
};
