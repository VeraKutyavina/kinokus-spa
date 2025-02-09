'use client';

import { useGetMoviesQuery } from 'connections/queries/movies';

import { MoviesList } from 'components/shared/molecules/MoviesList';
import { MainTemplate } from 'components/shared/templates/MainTemplate';

import { Loader } from '../components/shared/atoms/Loader';

const TSComponent = () => {
  const { movies, isLoading } = useGetMoviesQuery();

  return <MainTemplate>{isLoading ? <Loader /> : <MoviesList moviesList={movies} />}</MainTemplate>;
};

export default TSComponent;
