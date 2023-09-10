import TableOperations from '../../ui/TableOperations.tsx';
import Filter from '../../ui/Filter.tsx';
import SortBy from '../../ui/SortBy.tsx';
import { FilterCabin, SortCabin } from '../../utils/enums.ts';

export const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: FilterCabin.all, label: 'All' },
          { value: FilterCabin.noDiscount, label: 'No discount' },
          { value: FilterCabin.withDiscount, label: 'With discount' },
        ]}
      />
      /
      <SortBy
        options={[
          { value: SortCabin.nameAsc, label: 'Sort by name (A-Z)' },
          { value: SortCabin.nameDesc, label: 'Sort by name (Z-A)' },
          {
            value: SortCabin.regularPriceAsc,
            label: 'Sort by price (low first)',
          },
          {
            value: SortCabin.regularPriceDesc,
            label: 'Sort by price (high first)',
          },
          {
            value: SortCabin.maxCapacityAsc,
            label: 'Sort by capacity (low first)',
          },
          {
            value: SortCabin.maxCapacityDesc,
            label: 'Sort by capacity (high first)',
          },
        ]}
      />
    </TableOperations>
  );
};
