import '../src/App.css'
import React from 'react'
import data from './tutors.js'
import { Link } from 'react-router-dom'
import UserContext from './UserContext';
import OpenAI from "openai";
import { process } from './env';

const mySecret = process.env['key']
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default function Tutor() {
  const [tutors, setTutors] = React.useState(data)
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [filter, setFilter] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [matching, setMatching] = React.useState(false);
  const [AIInput, setAIInput] = React.useState('')
  const [AIOutput, setAIOutput] = React.useState('')

  const { information } = React.useContext(UserContext)
  let tutorsArray = tutors.map(tutor => {
    return (
      <Link 
        aria-label={`View ${tutor.name}'s profile. ${tutor.name}'s biography preview says ${tutor.bio.split('.')[0]}. ${tutor.name} wants to learns ${tutor.learn} and will teach ${tutor.teach}.`} 
        to={`/tutors/${tutor.id}`} 
        key={tutor.id} 
        className="tutor"
      >
        <img src={`../pics/${tutor.image}.jpg`} className="pfp" />
        <h2 className="tutorName">{tutor.name}</h2>
        <p className="bioPreview">{tutor.bio.split('.')[0]+'.'}</p>
        <p className="trade"><span>{tutor.learn}</span><img src="https://th.bing.com/th/id/R.69f50294be4b2668a12fd7d706d0838b?rik=IF0fZzYp%2b8qc0A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_187129.png&ehk=RaBlSa36ZNV8ULYxfJNhwff60%2bY87StG3KdPWy53nQU%3d&risl=&pid=ImgRaw&r=0" height="15px" /><span>{tutor.teach}</span></p>
        <h3>Rating: {tutor.rating}/5⭐</h3>
      </Link>
    )
  })
  function filterAndSortTutors(tutors, sortByRating, sortByPopularity, subject) {
    let filteredTutors = [...tutors];

    if (subject !== '') {
      filteredTutors = filteredTutors.filter(tutor => tutor.learn.toLowerCase() == subject.toLowerCase());
    }

    if (sortByRating) {
      filteredTutors.sort((a, b) => b.rating - a.rating);
    }

    if (sortByPopularity) {
      filteredTutors.sort((a, b) => b.review.length - a.review.length);
    }

    setTutors(filteredTutors)
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
    setIsOpen2(false);
    console.log(!isOpen)
    filterAndSortTutors(tutors, !isOpen, false, inputValue)
  };

  function toggleDropdown2() {
    setIsOpen(false)
    setIsOpen2(!isOpen2);
    console.log(!isOpen2)
    filterAndSortTutors(tutors, false, !isOpen2, inputValue)
  };

  function toggleFilter() {
    setFilter(!filter);
    setMatching(false)
  };
  function toggleMatching() {
    setMatching(!matching);
    setFilter(false)
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value) {
      filterAndSortTutors(data, isOpen, isOpen2, inputValue)
    }
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };

  async function handleSubmit() {
    if (AIInput) {
      const prompt = `This is your database: "Tutor ID 1: Alice is a 15-year-old female in 9th grade passionate about Biology and eager to teach Chemistry. She holds a 4-star rating, loves exploring biology, hiking, and experimenting with recipes. Her bio reflects her excitement to delve deeper into Biology and share expertise in Chemistry.

Tutor ID 2: Bob, a 16-year-old male in 10th grade, adores History and teaches Physics. His 5-star rating showcases his genuine passion for history, ancient civilizations, and the captivating world of Physics, aiming to expand knowledge in History.

Tutor ID 3: Josh, an 18-year-old male in 12th grade, loves Literature and is keen on teaching Creative Writing. With a perfect 5-star rating, his passion for classic novels and storytelling shines through.

Tutor ID 4: David, a 17-year-old male in 11th grade, finds joy in Art History and is ready to teach Drawing. His 5-star rating highlights his enthusiasm for art history and sketching, aiming to discover the beauty of art.

Tutor ID 5: Emma, a 16-year-old female in 10th grade, delves deep into Coding and is excited to teach Web Development. Her 4-star rating reflects dedication to coding, expertise in web development, and simplifying complex coding.

Tutor ID 6: Frank, a 14-year-old male in 9th grade, explores Music Theory and happily shares guitar knowledge. He holds a 4-star rating, showing impressive understanding of music theory and patience in teaching guitar.

Tutor ID 7: Grace, a 15-year-old female in 9th grade, delves into Psychology and teaches Mindfulness. Her 5-star rating speaks volumes about her commendable insights into psychology and practical guidance in mindfulness techniques.

Tutor ID 8: Henry, a 17-year-old male in 11th grade, explores Astrophysics and teaches Astronomy. With a 5-star rating, his fascination with astrophysics and engaging explanations about astronomy offer glimpses into the wonders of the universe.

Tutor ID 9: Ivy, a 16-year-old female in 10th grade, explores Foreign Languages and teaches English. Her 5-star rating highlights enthusiasm for languages and proficiency in English, making the learning experience enjoyable.

Tutor ID 10: Jack, a 15-year-old male in 9th grade, learns Cooking and teaches Baking. Holding a 3-star rating, his evident passion for cooking and budding baking skills promise enriching lessons.

Tutor ID 11: Karen, a 15-year-old female in 10th grade, learns Finance and teaches Investing. Her 5-star rating reflects commendable understanding of investing principles, making finance concepts understandable.

Tutor ID 12: Liam, a 17-year-old female in 11th grade, explores Photography and teaches Photo Editing. His 4-star rating showcases passion for photography, insights into photo editing, and the journey of capturing moments.

Tutor ID 13: Mia, a 17-year-old female in 11th grade, practices Yoga and guides through Meditation. With a 5-star rating, her dedication to yoga and calming guidance in meditation offer peaceful and rejuvenating sessions.

Tutor ID 14: Nathan, a 16-year-old male in 10th grade, intrigued by Geology, shares knowledge of Earth Science. His 5-star rating reflects curiosity about Earth, making geological concepts fascinating."
Take in this information from me: ${AIInput}. Who would I be most compatible with? Make sure list their stats. Do not include the ID number in the title. Make sure to give an explanation on why I would be compatible with the said peer tutor. Return your entire response in HTML form, with the entire thing wrapped in a <a> component with a property of 'href' that equals "https://tutor.tulsacity2.repl.co/tutors/{insert tutor's id number}". Don't include the word html at the beginning of your response, and don't include any tick marks. I will format the code myself.`
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [
          {"role": "system", "content": "You are gpt-3.5-turbo, a friendly assistant that only responds in HTML form."},
          {"role": "user", "content": prompt}
        ],
        max_tokens: 1500,
      });
      setAIOutput(response.choices[0].message.content)
    }
  }
  
  return(
    <div className='Tutor'>
      {information.public && 
        <>
          <h1 className="findPeerTutors" style={{marginBottom: '100px'}}>Your Profile</h1>
          <Link to='/profile' className="tutor">
            <img src='../pics/placeholder.jpg' className="pfp" />
            <h2 className="tutorName">{information.name}</h2>
            <p className="bioPreview">{information.bio.split('.')[0]+'.'}</p>
            <p className="trade"><span>{information.learn}</span><img src="https://th.bing.com/th/id/R.69f50294be4b2668a12fd7d706d0838b?rik=IF0fZzYp%2b8qc0A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_187129.png&ehk=RaBlSa36ZNV8ULYxfJNhwff60%2bY87StG3KdPWy53nQU%3d&risl=&pid=ImgRaw&r=0" height="15px" /><span>{information.teach}</span></p>
            <h3>Rating: -/5⭐</h3>
          </Link>
        </>
      }
      <div className="tutorHeading">
        <h1 className="findPeerTutors" style={{paddingTop: information.public && '50px'}}>Find Peer Tutors</h1>
        <div style={{display: 'flex'}}>
          <button className="filters" style={{marginRight: '10px'}} onClick={toggleFilter}><img src="../pics/filter.png" height="20px" /> Filters</button>
          <button className="AIFilter" style={{marginRight: '80px'}} onClick={toggleMatching}>AI Matching</button>
        </div>
      </div>

      <div className="filterBar" style={{display: filter ? 'block' : 'none'}}>
        <div style={{paddingLeft: '5px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between'}}><h3>Sort By</h3><button onClick={() => setTutors(data)} className="reset">Reset</button></div>
        <div className="filterOptionsWrapper">
          <button onClick={toggleDropdown} className="filterButton stars">Stars {isOpen && <span style={{fontSize: '15px', paddingRight: '10px'}}>✔</span>}</button>
          <button onClick={toggleDropdown2} className="filterButton stars">Popularity {isOpen2 && <span style={{fontSize: '15px', paddingRight: '10px'}}>✔</span>}</button>
          <input 
            className="filterButton" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Subject - Learn"
          />
        </div>

      </div>
      
      <h2 style={{display: matching ? 'block' : 'none', textAlign: 'center', paddingTop: '30px', paddingRight: '130px'}}>AI Matching</h2>
      <div className="AIWrapper">
        
        <div className="AI" style={{display: matching ? 'block' : 'none'}}>
          <h3 className="AIHeading">Describe yourself</h3>
          <textarea 
            className="AITextArea" 
            placeholder="Type here..."
            value={AIInput}
            onChange={(e) =>
              setAIInput(e.target.value )
            }
          ></textarea>
          <button className="submitAI" onClick={handleSubmit}>Submit</button>
        </div>
        
        <div className="AI" style={{display: matching ? 'block' : 'none'}}>
          <h3 className="AIHeading">Your matching tutor is...</h3>
          <p className="AIOutput" dangerouslySetInnerHTML={{ __html: AIOutput }}></p>
        </div>
        
      </div>
        
      <div className="tutorsArrayWrapper">
        {tutorsArray}
      </div>
    </div>
  )
}