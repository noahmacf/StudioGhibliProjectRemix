import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Film, getFilms } from "~/api/films";

// SERVER SIDE
export const loader: LoaderFunction = async () => {
    return getFilms();
}

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Films | Studio Ghibli",
    description: "List of films",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: 'styles' }];
};

// CLIENT SIDE
export default function FilmsIndex() {
    const films = useLoaderData<Film[]>();
    return <div>Films
        <div>
            {films.map((film) => (
                <div>
                    <div>{film.title}</div>
                    <img src={film.image} alt={film.title} />
                </div>
            ))}
        </div>
    </div>
}
