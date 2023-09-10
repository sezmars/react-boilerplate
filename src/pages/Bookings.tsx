import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { BookingTable } from '../features/bookings/BookingTable.tsx';
import BookingTableOperations from '../features/bookings/BookingTableOperations.tsx';

export const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
};
