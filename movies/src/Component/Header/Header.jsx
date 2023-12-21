import { useState } from "react"
import { BrowserRoute, Routes, Route, NavLink } from "react-router-dom"
import { MovieCard } from "../MovieCard/MovieCard"

import { MovieCard } from "./MovieCard"


export const Header = () => {

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = 'a00f504d3d786fc72c807ec6e7e97bf8'

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data.results)
      setPeliculas(data.results)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  return (
    <div className="container">

      <h1>POP MOVIES</h1>
      <h4>Disfruta todas tus peliculas solo con un click</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca tu película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>


      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img width={230} height={345} src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
          </div>

        ))}

      </div>

    </div>
  )
}
