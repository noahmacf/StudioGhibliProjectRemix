import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFilmById, Film } from "~/api/films";
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({params}) => {
    invariant(params.filmId, 'expected params.filmId');
    const film = await getFilmById(params.filmId);
    return film;
}

export default function Film() {
    const film = useLoaderData<Film>();
    return <div>{film.title}</div>
}