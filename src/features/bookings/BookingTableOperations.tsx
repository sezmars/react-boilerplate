import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter.tsx';
import TableOperations from '../../ui/TableOperations.tsx';
import { SortBooking, Status } from '../../utils/enums.ts';

const BookingTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: Status.all, label: 'All' },
          { value: Status.checkedOut, label: 'Checked out' },
          { value: Status.checkedIn, label: 'Checked in' },
          { value: Status.unconfirmed, label: 'Unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          { value: SortBooking.startDateDesc, label: 'Sort by date (recent first)' },
          { value: SortBooking.startDateAsc, label: 'Sort by date (earlier first)' },
          {
            value: SortBooking.totalPriceDesc,
            label: 'Sort by amount (high first)',
          },
          { value: SortBooking.totalPriceAsc, label: 'Sort by amount (low first)' },
        ]}
      />
    </TableOperations>
  );
};

export default BookingTableOperations;
