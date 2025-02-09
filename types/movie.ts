export type TMovie = {
  attributes: {
    name: string;
    description?: string;
    annotation?: string;
    durationInMinutes?: string;
    posterUrl?: string;
    releaseDate?: string;
  };
  id: number;
  type: 'movie';
};
