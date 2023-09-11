import { getToday } from '../utils/helpers';
import supabase from './supabase';
import { PAGE_SIZE } from '../utils/constants';
import { Api } from '../utils/enums.ts';
import { IBooking } from '../interfaces/booking.ts';

export const getBookings = async ({
  filter,
  sortBy,
  page,
}: {
  filter: { field: string; value: string; method?: string } | null;
  sortBy: { field: string; direction: string };
  page: number;
}) => {
  let query = supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)',
      { count: 'exact' },
    );

  // FILTER
  if (filter)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query = (query as any)[filter.method || 'eq'](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }

  return { data, count };
};

export const getBooking = async (id: string) => {
  const { data, error } = await supabase.from(Api.bookings).select('*, cabins(*), guests(*)').eq('id', id).single();

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return data;
};

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
// date: ISOString
export const getBookingsAfterDate = async (date: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('created_at, totalPrice, extrasPrice')
    .gte('created_at', date)
    .lte('created_at', getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return data;
};

// Returns all STAYS that are were created after the given date
export const getStaysAfterDate = async (date: string) => {
  const { data, error } = await supabase
    .from(Api.bookings)
    .select('*, guests(fullName)')
    .gte('startDate', date)
    .lte('startDate', getToday());

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return data;
};

// Activity means that there is a check in or a check out today
export const getStaysTodayActivity = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, guests(fullName, nationality, countryFlag)')
    .or(`and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`)
    .order('created_at');

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }
  return data;
};

export const updateBooking = async (id: number, obj: Partial<IBooking>) => {
  const { data, error } = await supabase.from(Api.bookings).update(obj).eq('id', id).select().single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  return data;
};

export const deleteBooking = async (id: number) => {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
};
