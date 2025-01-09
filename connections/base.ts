const BASE_URL = process.env.API_URL;

export const sendRequest = async (url: string, init?: RequestInit) => {
  const res = await fetch(`${BASE_URL}${url}`, init);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};
