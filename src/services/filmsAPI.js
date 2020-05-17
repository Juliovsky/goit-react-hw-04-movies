import axios from 'axios';
import React from "react";

const popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=cfb8edf1e5e1f70963d42b8114b105b1&language=en-US&page=1'

export const fetchFilms = () =>
    axios.get(popularURL )

export const fetchFilmsWithId = id =>
axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cfb8edf1e5e1f70963d42b8114b105b1&language=en-US`)

export const fetchActorsWithId = id =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfb8edf1e5e1f70963d42b8114b105b1&language=en-US`)

export const fetchReviewsWithId =id=>
    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cfb8edf1e5e1f70963d42b8114b105b1&language=en-US`)
export const fetchQueryFilms = (query)=>
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfb8edf1e5e1f70963d42b8114b105b1&language=en-US&query=${query}&page=1&include_adult=false`)

