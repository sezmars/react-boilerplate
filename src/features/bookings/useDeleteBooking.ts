import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import { Api } from '../../utils/enums.ts';

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: async () => {
      toast.success('Booking successfully deleted');

      await queryClient.invalidateQueries({
        queryKey: [Api.bookings],
      });
    },
    onError: err => toast.error(err as string),
  });

  return { isDeleting, deleteBooking };
};
