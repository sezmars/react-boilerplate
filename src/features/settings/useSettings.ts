import { useQuery } from '@tanstack/react-query';
import { Api } from '../../utils/enums.ts';
import { getSettings } from '../../services/apiSettings.ts';

export const useSettings = () => {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: [Api.settings],
    queryFn: getSettings,
  });

  return {
    isLoading,
    error,
    settings,
  };
};
