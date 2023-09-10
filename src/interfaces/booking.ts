import { TStatus } from '../utils/types.ts';

export interface IGuests {
  fullName?: string;
  email?: string;
  country?: string;
  countryFlag?: string;
  nationalID?: string;
}

export interface IBooking {
  id: number | string;
  status: TStatus;
  created_at: string | number | Date;
  startDate: string | number | Date;
  endDate: string;
  cabinId: number;
  guestId: number;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  hasBreakfast: boolean;
  observations: string;
  isPaid: boolean;
  guests?: IGuests;
  cabins?: { name?: string }[];
}

export interface IRecentBooking {
  created_at: string;
  extrasPrice: number;
  totalPrice: number;
}
