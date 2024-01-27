
import { useState } from "react"
import MovieCard from "./movieCard"
import { json } from "react-router-dom"
import "./App.css"


const App = () => {
  

  return (
    <>
      <div id="input-wrapper">
        <input type="search" id="search-input"/>
      </div>
      <div id="card-section">
       <MovieCard/>
      </div>
    </> 
  )
}



export default App

