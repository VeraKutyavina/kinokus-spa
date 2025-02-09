import { FC } from 'react';
import Link from 'next/link';
import { TMovie } from 'types/movie';

import { Image } from 'components/shared/atoms/Image';
import { Skeleton } from 'components/shared/atoms/Skeleton';

import { MovieContainer, StyledLink, Title } from './styled';

type MovieCardProps = {
  movie: TMovie;
};

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { posterUrl, name } = movie;

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
      <Link href="/">
        <Title> {name} </Title>
      </Link>
    </MovieContainer>
  );
};
