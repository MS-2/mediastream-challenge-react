/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Exercise 02: Movie Library
 * We are trying to make a movie library for internal users. We are facing some issues by creating this, try to help us following the next steps:
 * !IMPORTANT: Make sure to run yarn movie-api for this exercise
 * 1. We have an issue fetching the list of movies, check why and fix it (handleMovieFetch)
 * 2. Create a filter by fetching the list of gender (http://localhost:3001/genres) and then loading
 * list of movies that belong to that gender (Filter all movies).
 * 3. Order the movies by year and implement a button that switch between ascending and descending order for the list
 * 4. Try to recreate the user interface that comes with the exercise (exercise02.png)
 * 
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import "./assets/styles.css";
import { useEffect, useState, useCallback } from "react";
import Title from "./components/tittle";
import axios from "axios";
import { Provider } from "./context";
import MovieList from "./components/movieList";
import Actions from "./components/actions";
import { sort_list } from "./utils";
import Loader from "./components/loader";

const instance = axios.create({ baseURL: 'http://localhost:3001' })

export default function Exercise02() {

  const [movies, setMovies] = useState([]);
  const [genres, setgenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [order, setOrder] = useState(sort_list.ASC.value);
  const [loading, setloading] = useState(false);

  const setMovieFetch = async () => {
    setloading(true);
    const { data } = await instance.get('/movies?_limit=50');
    setMovies(data);
    setloading(false);
  }

  const setGenreFetch = async () => {
    const { data } = await instance.get('/genres');
    setgenres(data);
  }

  const setChangeOrder = useCallback(() => {
    setOrder((pre_sort) =>
      pre_sort === sort_list.ASC.value ? sort_list.DESC.value : sort_list.ASC.value
    );
  }, []);

  useEffect(() => {
    setMovieFetch()
    setGenreFetch()
  }, [])

  return (
    <Provider
      value={{
        loader: loading,
        movies: movies, genres: genres,
        filters: {
          selectedGenre: {
            value: selectedGenre,
            setSelectedGenre: setSelectedGenre,
          },
          order: {
            value: order,
            setSort: setChangeOrder,
          },
        },
      }}
    >
      <section className="movie-library">
        <Title></Title>
        <Actions></Actions>
        <Loader></Loader>
        <MovieList></MovieList>
      </section>
    </Provider>
  )
}