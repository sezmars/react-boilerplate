import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';
import { User } from '@supabase/supabase-js';
import { Api } from '../../utils/enums.ts';

export const useUser = (): {
  isLoading: boolean;
  user: User | null | undefined;
  isAuthenticated: boolean;
} => {
  const { isLoading, data: user } = useQuery({
    queryKey: [Api.user],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'authenticated',
  };
};
