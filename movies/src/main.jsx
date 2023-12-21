import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Component/Header/Header'
import './Component/Header/Header.css'
import { MovieCard } from './Component/MovieCard/MovieCard'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   <MovieCard/>
  </React.StrictMode>,
)
