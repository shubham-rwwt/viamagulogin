import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <nav className="homenav">
        <h1 style={{ color: 'darkgreen' }}>Tasks</h1>
      </nav>
      <main className="homemain">
        <Link
          to="/login"
          style={{ textDecoration: 'none', color: 'darkGreen' }}
        >
          <h1>Login</h1>
        </Link>

        <Link
          to="/video"
          style={{ textDecoration: 'none', color: 'darkGreen' }}
        >
          <h1>Video</h1>
        </Link>
        <Link to="/date" style={{ textDecoration: 'none', color: 'darkGreen' }}>
          <h1>Date</h1>
        </Link>
      </main>
    </div>
  )
}

export default Home
