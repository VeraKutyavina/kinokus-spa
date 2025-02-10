'use client';

import { useGetMoviesQuery } from 'connections/queries/movies';

import { MoviesList } from 'components/shared/molecules/MoviesList';
import { MainTemplate } from 'components/shared/templates/MainTemplate';

import { CreateFilmForm } from 'components/pages/admin/CreateFilmForm';

const TSComponent = () => {
  const { movies } = useGetMoviesQuery();

  return (
    <MainTemplate>
      <CreateFilmForm />
      <MoviesList isAdmin moviesList={movies} />
    </MainTemplate>
  );
};

export default TSComponent;
