import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';
import { Api } from '../../utils/enums.ts';

export const useBooking = () => {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: [Api.bookings, bookingId],
    queryFn: () => getBooking(bookingId!),
    retry: false,
  });

  return { isLoading, error, booking };
};
