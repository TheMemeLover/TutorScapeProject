import './App.css'
import Home from '../pages/Home.jsx'
import Tutor from '../pages/Tutor.jsx'
import Update from '../pages/Update.jsx'
import Profile from '../pages/Profile.jsx'
import TutorDetails from '../pages/TutorDetails.jsx'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom"
import { UserProvider } from '../pages/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <header className="navbar">
          <Link to="/"><h1 className="logo">TutorScape®</h1></Link>
          <div className="navbarLinks">
            <Link to="/profile">My Profile</Link>
            <Link to="/update">Update Profile</Link>
            <Link to="/tutors" className="findTutors">Find Tutors</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutors" element={<Tutor />} />
          <Route path="/tutors/:id" element={<TutorDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        <footer>
          <p>© 2024 by Daniel Wang</p>
        </footer>
      </UserProvider>
    </BrowserRouter>
  )
}
