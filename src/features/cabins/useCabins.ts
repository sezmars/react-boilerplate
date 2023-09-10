import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { Api } from '../../utils/enums.ts';

export const useCabins = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: [Api.cabins],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
};
