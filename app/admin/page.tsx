'use client';

import { useCreateMovieMutation } from 'connections/mutations/movies';
import { useGetMoviesQuery } from 'connections/queries/movies';

import { Button } from 'components/shared/atoms/Button';
import { MainTemplate } from 'components/shared/templates/MainTemplate';

const TSComponent = () => {
  const { movies } = useGetMoviesQuery();

  const { createMovie } = useCreateMovieMutation();

  const onClick = () => {
    createMovie({ name: 'Новый фильм', description: 'Хороший новый фильм' });
  };

  return (
    <MainTemplate>
      <br />
      <br />
      <br />
      <Button label="Click to create!" onClick={onClick} />
      <br />
      <br />
      {movies.map((movie, index) => (
        <div key={index}>
          - {movie.attributes.name}: {movie.attributes.description}
        </div>
      ))}
    </MainTemplate>
  );
};

export default TSComponent;
