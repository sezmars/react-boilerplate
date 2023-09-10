import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { mutateCabin } from '../../services/apiCabins';

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: mutateCabin,
    onSuccess: async () => {
      toast.success('New cabin successfully created');
      await queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: err => toast.error(err as string),
  });

  return { isCreating, createCabin };
};
