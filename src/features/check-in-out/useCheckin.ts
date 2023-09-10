import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ICheckinBreakfast } from '../../interfaces/checkin.ts';
import { QueryFilters } from '@tanstack/query-core';

export const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: number;
      breakfast: Partial<ICheckinBreakfast>;
    }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: async data => {
      toast.success(`Booking #${data.id} successfully checked in`);
      await queryClient.invalidateQueries({ active: true } as QueryFilters);
      navigate('/');
    },

    onError: () => toast.error('There was an error while checking in'),
  });

  return { checkin, isCheckingIn };
};
