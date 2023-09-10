import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';
import { Api } from '../../utils/enums.ts';

export const useRecentBookings = () => {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: [Api.bookings, `last-${numDays}`],
  });

  return { isLoading, bookings };
};
