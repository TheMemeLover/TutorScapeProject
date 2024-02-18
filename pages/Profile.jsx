import '../src/App.css'
import React from 'react'
import { Link } from "react-router-dom"
import UserContext from './UserContext';

export default function Profile() {
  const { information } = React.useContext(UserContext);

  return(
    
    <div className="TutorDetailsWrapper profileWrapper">
      {information.name ? <div className="TutorDetails">
        <div className="tutorDetailsMain">
          <div className="tutorDetailsMainTop">
            <img src={`../pics/placeholder.jpg`} className="tutorDetailsPfp" />
              <div className="infoWrapper">
                <h1>{information.name} {information.public && <p className="publicStatus">Public</p>}</h1>
                <h2 className="profileRating">Rating: -/5⭐</h2>
                <p>Wants to learn <b>{information.learn}</b> and will teach <b>{information.teach}</b>.</p>
            </div>
          </div>
          <div className="tutorDetailsMainBackground">
            <h3>Background</h3>
            <div>
              <p><b>Age:</b> {information.age}</p>
              <p><b>Grade:</b> {information.grade}</p>
              <p><b>Gender:</b> {information.gender}</p>
            </div>
          </div>
        </div>
        <div className="tutorDetailsBio">
          <h3>About {information.name}</h3>
          <p>{information.bio}</p>
        </div>
        <div className="tutorDetailsReview">
          <h3>Reviews (0)</h3>
          <div className="reviewSummary">
            <span><b>5 ★</b><div className='bar empty'></div></span>
            <span><b>4 ★</b><div className='bar empty'></div> </span>
            <span><b>3 ★</b><div className='bar empty'></div> </span>
            <span><b>2 ★</b><div className='bar empty'></div> </span>
            <span style={{paddingLeft: '4px'}}><b>1 ★</b><div className='bar empty'></div> </span>
          </div>
          
        </div>
      </div> : <div className="lockScreen"><img src='../pics/clipboard.jpg' className="clipboard" /><h1>Fill Out Your Profile First!</h1></div>}
        
    </div>
  )
}