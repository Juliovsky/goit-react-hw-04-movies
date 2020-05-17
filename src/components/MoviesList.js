import React from "react";
import {Link, withRouter} from 'react-router-dom'


const MoviesList = ({movies = [],location}) => (
    <ul>

        {movies.map(movie => (
            <li key={movie.id}>

                <Link to={{
                    pathname: `/movies/${movie.id}`,
                    state: {from: location.pathname}
                }}>{movie.original_title}</Link>
            </li>
        ))}
    </ul>
);


export default withRouter(MoviesList)



