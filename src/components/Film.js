import React from "react";


const Film = ({poster_path, title, popularity, overview, release_date, genres=[], onGoBack}) => (
    <>
        <button type = "button" onClick={onGoBack}> ← Go back</button>
        <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} width="270px" height="auto"/>
        <div>
            <h3>{title} ({release_date}) </h3>
            <p>Popularity <span>{popularity}</span></p>
            <h4>Overview</h4>
            <p>
                {overview}
            </p>
            <h4>Genres</h4>
            {genres.map((genre) =>
                <li key={genre.id}>
                     {genre.name}
                </li>
            )}

        </div>
    </>
)

export default Film