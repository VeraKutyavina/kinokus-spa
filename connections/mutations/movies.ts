import { createMovie } from 'connections/api/v1/movies';
import { TMovie } from 'types/movie';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateMovieMutation = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createMovie,
    // onSuccess: () => {
    //   client.invalidateQueries({ queryKey: ['movies', 'all'] });
    // },
    onSuccess: newMovie => {
      // client.setQueryData(['movies', 'all'], [client.getQueriesData(['movies', 'all']), newMovie]);
      client.setQueryData<TMovie[]>(['movies', 'all'], (oldMovies = []) => [
        ...oldMovies,
        newMovie,
      ]);
      // На всякий случай чтобы точно не было запроса к беку
      client.invalidateQueries({ queryKey: ['movies', 'all'], refetchType: 'none' });
    },
  });

  return { createMovie: mutate };
};
