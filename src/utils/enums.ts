export enum Api {
  user = 'user',
  cabins = 'cabins',
  booking = 'booking',
  avatars = 'avatars',
  bookings = 'bookings',
  settings = 'settings',
  todayActivity = 'today-activity',
}

export enum Status {
  all = 'all',
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

export enum SortBooking {
  startDateDesc = 'startDate-desc',
  startDateAsc = 'startDate-asc',
  totalPriceDesc = 'totalPrice-desc',
  totalPriceAsc = 'totalPrice-asc',
}
