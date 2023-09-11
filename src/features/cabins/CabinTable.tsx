import Spinner from '../../ui/Spinner.tsx';
import CabinRow from './CabinRow.tsx';
import { useCabins } from './useCabins.ts';
import Menus from '../../ui/Menus.tsx';
import Table from '../../ui/Table.tsx';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty.tsx';
import { FilterCabin } from '../../utils/enums.ts';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins?.length) return <Empty resourceName="cabins" />;

  // 1) FILTER
  const filterValue = searchParams.get('discount') || FilterCabin.all;

  let filteredCabins;
  if (filterValue === FilterCabin.all) filteredCabins = cabins;
  if (filterValue === FilterCabin.noDiscount) filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  if (filterValue === FilterCabin.withDiscount) filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins?.sort((a, b) => ((a as never)[field] - (b as never)[field]) * modifier);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
