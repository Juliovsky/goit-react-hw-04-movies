import React, {Component} from "react";
import * as filmsApi from '../services/filmsAPI';


const getIdFromProps = props => props.match.params.movieId;



export default class Cast extends Component {
    state = {cast: []};

    componentDidMount() {
        const id = getIdFromProps(this.props);
        filmsApi
            .fetchActorsWithId(id)
            .then(data => this.setState({cast: data.data.cast}))
    }

    render() {
        return (

                <ul>
                {this.state.cast.map((actor)=>
                <li key = {actor.id}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path} width="150px" height="auto"/>
                <p>{actor.name}</p>
                <p>character: {actor.character}</p>
                </li>
                )}
                 </ul>
        )
    }
}