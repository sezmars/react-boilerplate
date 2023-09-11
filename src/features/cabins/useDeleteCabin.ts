import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import { Api } from '../../utils/enums.ts';

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: async () => {
      toast.success('Cabin successfully deleted');

      await queryClient.invalidateQueries({
        queryKey: [Api.cabins],
      });
    },
    onError: (err) => toast.error(err as string),
  });

  return { isDeleting, deleteCabin };
};
