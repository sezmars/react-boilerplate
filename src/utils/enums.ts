export enum Api {
  cabins = 'cabins',
  booking = 'booking',
  avatars = 'avatars',
  bookings = 'bookings',
  settings = 'settings',
  todayActivity = 'today-activity',
}

export enum Status {
  unconfirmed = 'unconfirmed',
  checkedIn = 'checked-in',
  checkedOut = 'checked-out',
}

export enum FilterCabin {
  all = 'all',
  noDiscount = 'no-discount',
  withDiscount = 'with-discount',
}
export enum SortCabin {
  nameAsc = 'name-asc',
  nameDesc = 'name-desc',
  maxCapacityAsc = 'maxCapacity-asc',
  maxCapacityDesc = 'maxCapacity-desc',
  regularPriceAsc = 'regularPrice-asc',
  regularPriceDesc = 'regularPrice-desc',
}
