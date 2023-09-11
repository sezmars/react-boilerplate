import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutateCabin } from '../../services/apiCabins';
import { toast } from 'react-hot-toast';
import { ICabin } from '../../interfaces/cabin.ts';
import { Api } from '../../utils/enums.ts';

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: Partial<ICabin>; id: number }) => mutateCabin(newCabinData, id),
    onSuccess: async () => {
      toast.success('Cabin successfully edited');
      await queryClient.invalidateQueries({ queryKey: [Api.cabins] });
    },
    onError: (err) => toast.error(err as string),
  });

  return { isEditing, editCabin };
};
