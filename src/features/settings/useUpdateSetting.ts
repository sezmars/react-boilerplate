import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';
import { Api } from '../../utils/enums.ts';

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: async () => {
      toast.success('Setting successfully edited');
      await queryClient.invalidateQueries({ queryKey: [Api.settings] });
    },
    onError: err => toast.error(err as string),
  });

  return { isUpdating, updateSetting };
};
