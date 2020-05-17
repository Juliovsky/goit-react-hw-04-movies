import React, {Component} from "react";
import * as filmsApi from '../services/filmsAPI';


const getIdFromProps = props => props.match.params.movieId;


export default class Cast extends Component {
    state = {review: []};

    componentDidMount() {
        const id = getIdFromProps(this.props);
        filmsApi
            .fetchReviewsWithId(id)
            // .then(data=> console.log(data.data.results))
            .then(data => this.setState({review: data.data.results}))

    }

    render() {
        return (
            <ul>
                {this.state.review.map((item)=>
                    <li key = {item.id}>
                        <p>{item.author}</p>
                        <p>character: {item.content}</p>
                    </li>
                )}
            </ul>
        )
    }
}