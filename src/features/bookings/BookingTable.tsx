import BookingRow from './BookingRow';
import Table from '../../ui/Table.js';
import Menus from '../../ui/Menus.js';
import { useBookings } from './useBookings.ts';
import Spinner from '../../ui/Spinner.tsx';
import Empty from '../../ui/Empty.tsx';
import Pagination from '../../ui/Pagination.tsx';

export const BookingTable = () => {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={booking => <BookingRow key={booking.id} booking={booking} />}
        />
      </Table>

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Menus>
  );
};
