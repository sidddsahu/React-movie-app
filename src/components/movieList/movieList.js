import { useEffect,useState } from "react"
import Card from "../card/Card"
import './movieList.css'
import { useParams } from "react-router"

const MovieList = () => {
    const [movieLists, setMovieList] = useState([])
    const {type} = useParams()
    useEffect(() =>{
        getData()
    }, [])
    useEffect(() =>{
        getData()
    }, [type])

    const getData = () => {
        fetch(`http://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=953342cfe700f137178f21f40cb6c0c9`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }


  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toLocaleUpperCase()}</h2>
      <div className="list_cards">
        {
            movieLists.map(movie =>(
               <Card movie={movie} />
            ))
        }
      </div>
    </div>
  )
}

export default MovieList
