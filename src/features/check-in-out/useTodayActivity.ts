import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';
import { Api } from '../../utils/enums.ts';

export const useTodayActivity = () => {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: [Api.todayActivity],
  });
  return { activities, isLoading };
};
