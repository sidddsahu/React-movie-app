import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className='header_icon' src="https://th.bing.com/th?id=OIP.bGF9z8xpM9riEPa7DBxx0gHaHT&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /></Link>
            <Link to="/movies/popular" style={{textDecoration : "none"}}> <span>Popular-movies</span> </Link>
            <Link to="/movies/top_rated" style={{textDecoration : "none"}}> <span>Top-Movies</span> </Link>
            <Link to="/movies/upcoming" style={{textDecoration : "none"}}> <span>Upcoming-Movies</span> </Link>

        </div>
      </div>
    </div>
  )
}

export default Header
