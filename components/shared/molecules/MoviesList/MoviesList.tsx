import { FC } from 'react';
import { TMovie } from 'types/movie';

import { MovieCard } from '../MovieCard';

import { MoviesListWrapper, Title } from './styled';

type MoviesListProps = {
  moviesList: TMovie[];
  isAdmin?: boolean;
};

export const MoviesList: FC<MoviesListProps> = ({ moviesList, isAdmin }) => {
  return (
    <div>
      <Title>Список фильмов</Title>
      <MoviesListWrapper>
        {moviesList.map((movie, index) => (
          <MovieCard isAdmin={isAdmin} movie={movie} key={index} />
        ))}
      </MoviesListWrapper>
    </div>
  );
};
