import { sendRequest } from 'connections/base';

export const getMovies = async () => {
  const res = await sendRequest(`/api/v1/movies`);

  return res;
};

export const createMovie = async ({ name, description }: { name: string; description: string }) => {
  const res = await sendRequest(`/api/v1/movies`, {
    method: 'POST',
    body: JSON.stringify({ name, description }),
    headers: { 'content-type': 'application/json' },
  });

  return res;
};
