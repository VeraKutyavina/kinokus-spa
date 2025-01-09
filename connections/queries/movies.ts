import { getMovies } from 'connections/api/v1/movies';
import { TMovie } from 'types/movie';
import { useQuery } from '@tanstack/react-query';

export const useGetMoviesQuery = () => {
  const { data, ...rest } = useQuery<TMovie[]>({
    queryFn: getMovies,
    queryKey: ['movies', 'all'],
    staleTime: 1000,
    cacheTime: 1000,
  });

  return {
    movies: data || ([] as TMovie[]),
    ...rest,
  };
};
