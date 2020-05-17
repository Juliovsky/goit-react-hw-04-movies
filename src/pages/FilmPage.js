import React, {Component} from "react";
import * as filmsApi from '../services/filmsAPI';
import Film from '../components/Film';
import {Link, Route, Switch} from 'react-router-dom';
import Cast from './Cast'
import Review from './Review'



const getIdFromProps = props => props.match.params.movieId;
console.log()

export default class FilmPage extends Component {
    state = {
        film: [],
        from: '',
        query: ""
    };


    componentDidMount() {
        this.setState({from: this.props.location.state.from, query: this.props.location.state.query?this.props.location.state.query:''})
        const id = getIdFromProps(this.props);
        filmsApi
            .fetchFilmsWithId(id)
            .then(film => this.setState({film: film.data}))
    }


    handleGoBack = () => {
        if (this.state.query) {
            this.props.history.push({pathname: this.state.from, search: `query=${this.state.query}`})
        } else {
            {
                this.props.history.push('/')
            }
        }
    }


    render() {
        const {film} = this.state;
        return (
            <>
                <div>
                    <Film {...film} onGoBack={this.handleGoBack}/>
                    <h3>Additional information</h3>
                    <ul>
                        <li>
                            <Link to={{
                                pathname: `${this.props.match.url}/cast`,
                            }}>Cast</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: `${this.props.match.url}/review`,
                            }}>Review</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/movies/:movieId/cast" component={Cast}/>
                    <Route path="/movies/:movieId/review" component={Review}/>
                </Switch>
            </>

        )
    }
}

