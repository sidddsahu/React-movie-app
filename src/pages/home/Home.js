import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"
import MovieList from '../../components/movieList/movieList';
const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
   useEffect(() =>{
        fetch("http://api.themoviedb.org/3/movie/popular?api_key=953342cfe700f137178f21f40cb6c0c9")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    })
  return (
    <div className='poster'>
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={false}
        showStatus={false}>
            {
                popularMovies.map(movie =>(
                
                    <Link style={{textDecoration: "none", color: "white"}} to={`/movie/${movie.id}`}>
                    <div className='posterImage'>
                        <img src={`http://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className='posterImage_overlay '>
                        <div className='posterImage_title'>{movie ? movie.original_title: ""}</div>
                        <div className='poster_Image_runtime'>
                            {movie ? movie.release_date : ""}
                            <span className='posterImage_rating'>
                                {movie ? movie.vote_average : ""}
                                 <i className='fas fa-star'  /> {" "}
                            </span>
                        </div>
                        <div className='posterImage_description'>{movie ? movie.overview : ""}</div>
                    </div>

                    </Link>

                ))
            }
        </Carousel>
      <MovieList/>
    </div>
  )
}

export default Home
