import '../src/App.css'
import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return(
    <div className="Home">
      <div className="homeBanner">
        <div className="homeBannerElements">
          <h1 className="homeBannerTitle">TutorScape®</h1>
          <h2 className="homeBannerTagline">Learn Together, Succeed Together</h2>
          <Link to="/tutors" className="homeBannerButton">Find Peer Tutors Now</Link>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}