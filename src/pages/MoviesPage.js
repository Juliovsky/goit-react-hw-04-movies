import React, {Component} from "react";
import * as filmsApi from '../services/filmsAPI'
import {Link} from "react-router-dom";
import queryString from 'query-string';

export default class MoviesPage extends Component {
    state = {
        query: '',
        films: []
    }

    componentDidMount() {
       if( this.props.location.search ){
     const getQueryFromLocation =
         queryString.parse(this.props.location.search).query;
     this.fetchQueryFilms(getQueryFromLocation)
      }

    }

    handleChange = e => {
        this.setState({query: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchQueryFilms(this.state.query);
        this.props.history.push({pathname:this.props.location.pathname, search:`query=${this.state.query}`})

    }


    fetchQueryFilms = (query) => {

        filmsApi
            .fetchQueryFilms(query)
            .then(data => this.setState({
                films: data.data.results, query
            }))
    }

    render() {
        console.log(this.props)
        return (

            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.query}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Search movie"
                    />
                    <button type="submit">
                        <span>Search</span>
                    </button>
                </form>
                <ul>
                    {this.state.films.length > 0 &&
                    this.state.films.map((film) =>
                        film.title !== "UNdefined" &&
                        <li key={film.id}>
                            <Link to={{
                                pathname: `/movies/${film.id}`,
                                state: {from: this.props.location.pathname, query: this.state.query}
                            }}>{film.title}</Link>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}
