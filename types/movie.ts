export type TMovie = {
  attributes: {
    name: string;
    description?: string;
    annotation?: string;
    duration_in_minutes?: string;
    poster_url?: string;
    release_date?: string;
  };
  id: number;
  type: 'movie';
};
