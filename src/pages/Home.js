import React, {Component} from "react";
import * as filmsApi from '../services/filmsAPI';
import MoviesList from "../components/MoviesList";





export default class Home extends Component {
    state ={
        movies: []
    };

    componentDidMount() {
        filmsApi.fetchFilms().then(data=>this.setState({movies: data.data.results}))

    }


    render(){
        const {movies} = this.state
        console.log(this.props)
        return (
            <div>
                <h3>Movies</h3>
                <MoviesList movies ={movies}/>
            </div>
        );
    }
}


