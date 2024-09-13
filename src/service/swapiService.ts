import { SWAPIResponse, Person, Film } from '../types/swapi';

const rootURL = "https://swapi.dev/api/";

type Callback<T> = (data: T) => void;

const request = async <T>(url: string, cb?: Callback<T>): Promise<T | undefined> => {
  try {
    const res = await fetch(url);
    const data: T = await res.json();

    if (cb) {
      cb(data);
    }

    return data;
  } catch (err) {
    console.error(err);
  }
};

const getResources = <T>(cb?: Callback<T>) => request(rootURL, cb);

const singularRequestGenerator = <T>(path: string) => (id: string, cb?: Callback<T>) =>
  request<T>(`${rootURL}${path}/${id}/`, cb);

const pluralRequestGenerator = <T>(path: string) => async (queryObject?: Record<string, string>, cb?: Callback<SWAPIResponse<T>>) => {
  let url = `${rootURL}${path}/`;

  if (queryObject) {
    const searchParams = new URLSearchParams(queryObject);
    url += `?${searchParams.toString()}`;
  }

  return request<SWAPIResponse<T>>(url, cb);
};

export const swapiService = {
  getResources,
  getPerson: singularRequestGenerator<Person>("people"),
  getPeople: pluralRequestGenerator<Person>("people"),
  getFilm: singularRequestGenerator<Film>("films"),
  getFilms: pluralRequestGenerator<Film>("films"),
  // ...
  // ...
  // ...
};
