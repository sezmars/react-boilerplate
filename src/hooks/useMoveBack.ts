import { useNavigate } from 'react-router-dom';

export const useMoveBack = () => {
  const navigate = useNavigate();
  return () => navigate(-1);
};
