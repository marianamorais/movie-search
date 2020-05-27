import React, { useState } from "react";
import MovieCard from "./movieCard";
export default function SearchMovies() {

    // states - input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state apropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }

    return (
        <>
        <div className="container">
            <form role="search" className="search-form form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">
                    <span class="screen-reader-text">Search for...</span>
                    <input className="search-field" type="search" name="query" placeholder="Search some movie ..." value={query} onChange={(e) => setQuery(e.target.value)} />
                </label>
                <button type="submit" class="search-submit button" placeholder="Search">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    //Filter all movies and will only keep the one who have a image
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
        </>
    )
}