import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { toast } from 'react-hot-toast';
import { QueryFilters } from '@tanstack/query-core';
import { Status } from '../../utils/enums.ts';

interface CheckoutMutationData {
  id: number;
}

export const useCheckout = (): {
  checkout: UseMutateFunction<CheckoutMutationData, unknown, number, QueryFilters>;
  isCheckingOut: boolean;
} => {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation<
    CheckoutMutationData,
    unknown,
    number,
    QueryFilters
  >({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: Status.checkedOut,
      }),

    onSuccess: async (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      await queryClient.invalidateQueries({ active: true } as QueryFilters);
    },

    onError: () => toast.error('There was an error while checking out'),
  });

  return { checkout, isCheckingOut };
};
