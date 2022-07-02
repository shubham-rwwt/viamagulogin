import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/LoginPage/Login'
import Date from './pages/DatePage/Date'
import Video from './pages/VideoPage/Video'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="video" element={<Video />} />
        <Route path="date" element={<Date />} />
      </Routes>
    </div>
  )
}

export default App
