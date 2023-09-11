import { differenceInDays, formatDistance, parseISO } from 'date-fns';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1: string | Date, dateStr2: string | Date): number =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// Функція для форматування відстані від поточної дати
export const formatDistanceFromNow = (dateStr: string): string =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = { end: false }): string {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end) {
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }
  return today.toISOString();
};

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value);

export const networkTypeDetect = () => {
  const navigatorTyped = navigator as { connection?: { effectiveType?: string } } | undefined;

  const type =
    navigatorTyped && 'connection' in navigatorTyped
      ? navigatorTyped.connection?.effectiveType
      : console.error('The browser does not support the Network Information API.');

  return type;
};
