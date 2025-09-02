import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../store/index';
import { setUser, clearUser } from '../store/UserPorfileSlice';
import { getUser } from '../api/auth/auth';

export const useUserQuery = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryFn: () => getUser().then(data => {
      dispatch(setUser(data));
      return data;
    }).catch(error => {
      dispatch(clearUser());
      throw error;
    }),
    queryKey: ["user", "profile"],
    retry: false,
  });
};  