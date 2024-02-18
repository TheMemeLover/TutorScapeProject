import '../src/App.css'
import React from 'react'
import data from './tutors.js'
import { useParams } from "react-router-dom"

export default function TutorDetails() {
  const [messageArray, setMessageArray] = React.useState([])
  const [inputValue, setInputValue] = React.useState('');
  const params = useParams()
  let object = data.find(tutor => tutor.id === parseInt(params.id))

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };
  function stars() {
    let str = ''
    for (let i = 0; i < object.rating; i++) {
      str+='★'
    }
    let num = 5 - object.rating
    for (let x = 0; x < num; x++) {
      str+='☆'
    }
    return str
  }
  function sendText() {
    if (inputValue.length) {
      setMessageArray(prevMessageArray => [...prevMessageArray, inputValue])
      setInputValue('')
    }
  }
  function conversation() {
    const texts = messageArray ? messageArray.map((message, id) => {
      return <div key={id} className="textBubble">{message}</div>
    }) : ''
    return texts
  }
  function reviews() {
    let list = []
    for (let j = 0; j < object.review.length; j++) {
      console.log(object.review[j].reviewer)
      list.push(
        <div className="reviewer">
          <h4 style={{width: '200px'}}>{object.review[j].reviewer}</h4>
          <div>
            <div className="stars">
              {stars()}
            </div>
            <div className="description">{object.review[j].description}</div>
            <div className="date">Posted Aug 31, 2023</div>
          </div>
        </div>
      )
    }
    console.log(list)
    return list
  }
  function handleKeyPress(event) {

    if (event.key === 'Enter' && event.target.value) {
      sendText();
    }
  };
  return (
    <div className="TutorDetailsWrapper">
      <div className="TutorDetails">
        <div className="tutorDetailsMain">
          <div className="tutorDetailsMainTop">
            <img src={`../pics/${object.image}.jpg`} className="tutorDetailsPfp" />
              <div className="infoWrapper">
                <h1>{object.name}</h1>
                <h2 className="profileRating">Rating: {object.rating}/5⭐</h2>
                <p>Wants to learn <b>{object.learn}</b> and will teach <b>{object.teach}</b>.</p>
            </div>
          </div>
          <div className="tutorDetailsMainBackground">
            <h3>Background</h3>
            <div>
              <p><b>Age:</b> {object.age}</p>
              <p><b>Grade:</b> {object.grade}</p>
              <p><b>Gender:</b> {object.gender}</p>
            </div>
          </div>
        </div>
        <div className="tutorDetailsBio">
          <h3>About {object.name}</h3>
          <p>{object.bio}</p>
        </div>
        <div className="tutorDetailsReview">
          <h3>Reviews ({object.review.length})</h3>
          <div className="reviewSummary">
            <span><b>5 ★</b><div className={`bar ${object.rating == 5 ? 'full' : 'empty'}`}></div></span>
            <span><b>4 ★</b><div className={`bar ${object.rating == 4 ? 'full' : 'empty'}`}></div> </span>
            <span><b>3 ★</b><div className={`bar ${object.rating == 3 ? 'full' : 'empty'}`}></div> </span>
            <span><b>2 ★</b><div className='bar empty'></div> </span>
            <span style={{paddingLeft: '4px'}}><b>1 ★</b><div className='bar empty'></div> </span>
          </div>
          <hr />
          {reviews()}
          
        </div>
      </div>
        <div className="message">
          <div className="messageTop">Chat</div>
          <div className="messageContent">{conversation()}</div>
          <div className="inputWrapper">
            <input className="messageInput" type="text" value={inputValue} onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder={`Message ${object.name}...`} />
            <button onClick={sendText}>Send</button>
          </div>
        </div>
    </div>
  )
}