'use client';

import { createMovie, getMovies } from 'connections/api/v1/movies';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const TSComponent = () => {
  // Положить в кастомные хуки ()
  // Хочется тоастер с ошибкой

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: getMovies,
    queryKey: ['movies', 'all'],
    staleTime: 1000,
    cacheTime: 1000,
  });

  console.log(data, isLoading, isSuccess);

  const client = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: createMovie,
    // onSuccess: () => {
    //   client.invalidateQueries({ queryKey: ['movies', 'all'] });
    // },
    onSuccess: newMovie => {
      // client.setQueryData(['movies', 'all'], [client.getQueriesData(['movies', 'all']), newMovie]);
      client.setQueryData<any>(['movies', 'all'], (oldMovies: any) => [...oldMovies, newMovie]);
      // На всякий случай чтобы точно не было запроса к беку
      client.invalidateQueries({ queryKey: ['movies', 'all'], refetchType: 'none' });
    },
  });

  const onClick = () => {
    create({ name: 'wed', description: 'weddw' });
  };

  return (
    <div className="App">
      <br />
      <a style={{ color: 'black' }} href="/WithoutTS">
        Hello world page!]
      </a>
      <br />
      <br />
    </div>
  );
};

export default TSComponent;
