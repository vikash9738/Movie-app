import React, { Component } from 'react'
import {movies} from './getMovies.js'

export default class Banner extends Component {
  render() {
    let movie =movies.results[0]
    return (
        <>
        {
             movie ==='' ?
             <div classNme="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
             :
             <div class="card banner-card">
             <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt={movie.title}/>
             {/* <div className="card-body"> */}
                  <h1 className="card-title banner-title">{movie.original_title}</h1>
                  <p className="card-text banner-text">{movie.overview}</p>
                  {/* <a href="https://leetcode.com/vikash9738/" className="btn btn-primary">Go somewhere</a> */}
             {/* </div> */}
            </div> 
        }
        </>
    )
  }
}
