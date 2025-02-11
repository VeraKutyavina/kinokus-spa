import { FC } from 'react';
import Link from 'next/link';
import { useDeleteMovieMutation } from 'connections/mutations/movies';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TMovie } from 'types/movie';

import { Image } from 'components/shared/atoms/Image';
import { Skeleton } from 'components/shared/atoms/Skeleton';

import { IconButton, MovieContainer, Overlay, StyledLink, Title } from './styled';

type MovieCardProps = {
  movie: TMovie;
  isAdmin?: boolean;
};

export const MovieCard: FC<MovieCardProps> = ({ movie, isAdmin = false }) => {
  const { posterUrl, name, id } = movie;

  const { deleteMovie } = useDeleteMovieMutation();

  return (
    <MovieContainer>
      <StyledLink href="/">
        {posterUrl ? (
          <Image
            src={posterUrl}
            style={{ objectFit: 'cover' }}
            height={263}
            width={162}
            alt={name}
          />
        ) : (
          <Skeleton width="162px" height="263px" />
        )}
      </StyledLink>
      {isAdmin && (
        <Overlay className="overlay">
          <IconButton>
            <FaEdit />
          </IconButton>
          <IconButton onClick={() => deleteMovie({ id })}>
            <FaTrash />
          </IconButton>
        </Overlay>
      )}
      <Link href="/">
        <Title>{name}</Title>
      </Link>
    </MovieContainer>
  );
};
