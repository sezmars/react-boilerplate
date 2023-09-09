import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';
import { User } from '@supabase/supabase-js';

interface IUserCheck {
  user_metadata: { fullName: string; avatar: string };
  email: string;
}

export const useUser = (): {
  isLoading: boolean;
  user: Partial<User | IUserCheck>;
  isAuthenticated: boolean;
} => {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user: user || {
      user_metadata: { fullName: '' },
      email: '',
    },
    isAuthenticated: user?.role === 'authenticated',
  };
};
