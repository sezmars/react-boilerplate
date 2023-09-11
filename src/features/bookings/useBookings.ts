import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';
import { Api, SortBooking, Status } from '../../utils/enums.ts';

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status');
  const filter = !filterValue || filterValue === Status.all ? null : { field: 'status', value: filterValue };

  // SORT
  const sortByRaw = searchParams.get('sortBy') || SortBooking.startDateDesc;
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: [Api.bookings, filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count ? count : 0 / PAGE_SIZE);

  if (page < pageCount)
    queryClient
      .prefetchQuery({
        queryKey: [Api.bookings, filter, sortBy, page + 1],
        queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      })
      .then();

  if (page > 1)
    queryClient
      .prefetchQuery({
        queryKey: [Api.bookings, filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      })
      .then();

  return { isLoading, error, bookings, count };
};
