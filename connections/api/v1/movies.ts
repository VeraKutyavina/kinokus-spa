import { sendRequest } from 'connections/base';

export const getMovies = async () => {
  const res = await sendRequest(`/api/v1/movies`);

  return res;
};

type CreateMovie = {
  name: string;
  description: string;
  annotation: string;
  durationInMinutes: number;
  releaseDate: string;
};

export const createMovie = async ({ name, description }: CreateMovie) => {
  const res = await sendRequest(`/api/v1/movies`, {
    method: 'POST',
    body: JSON.stringify({ name, description }),
    headers: { 'content-type': 'application/json' },
  });

  return res;
};

type DeleteMovie = {
  id: number;
};

export const deleteMovie = async ({ id }: DeleteMovie) => {
  const res = await sendRequest(`/api/v1/movies/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });

  return res;
};
