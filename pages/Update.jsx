import '../src/App.css'
import React from 'react'
import { Link } from "react-router-dom"
import UserContext from './UserContext';

export default function Update() {
  const [buttonText, setButtonText] = React.useState('Save')
  const { information, setInformation } = React.useContext(UserContext);
  const [inputStates, setInputStates] = React.useState({
    name: information.name,
    learn: information.learn,
    teach: information.teach,
    age: information.age,
    gender: information.gender,
    grade: information.grade,
    bio: information.bio,
    public: information.public
  });
  function save() {
    if (inputStates.name && inputStates.learn && inputStates.teach && inputStates.age && inputStates.gender && inputStates.grade && inputStates.bio) {
      setInformation(inputStates);
      setButtonText('Saved!')
    }
    
  }
  function handleCheckboxChange(e) {
    setInputStates({ ...inputStates, [e.target.name]: e.target.checked });
  };
  return(
    <div className="Update">
      <div className="form">
        <div className="topWrapper">
          <h2 className="updateTitle">Update Profile</h2>
          <div>
            <input
              type="checkbox"
              id="public"
              name="public"
              value="public"
              checked={inputStates.public}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="public">Public</label>
          </div>
        </div>
        <input
          className="updateInput Big" 
          value={inputStates.name}
          onChange={(e) =>
            setInputStates({ ...inputStates, name: e.target.value })
          }
          placeholder='Name'
        />
        <div>
          <input 
            className="updateInput Small"
            value={inputStates.age}
            onChange={(e) =>
              setInputStates({ ...inputStates, age: e.target.value })
            }
            placeholder='Age'
          />
          <input 
            className="updateInput Small"
            value={inputStates.gender}
            onChange={(e) =>
              setInputStates({ ...inputStates, gender: e.target.value })
            }
            placeholder='Gender'
          />
          <input 
            className="updateInput Small"
            value={inputStates.grade}
            onChange={(e) =>
              setInputStates({ ...inputStates, grade: e.target.value })
            }
            placeholder='Grade'
          />
        </div>
        <div>
          <input
            className="updateInput Medium"
            value={inputStates.learn}
            onChange={(e) =>
              setInputStates({ ...inputStates, learn: e.target.value })
            }
            placeholder='Learn'
          />
          <input
            className="updateInput Medium"
            value={inputStates.teach}
            onChange={(e) =>
              setInputStates({ ...inputStates, teach: e.target.value })
            }
            placeholder='Teach'
          />
        </div>
        <textarea
          className="bioArea"
          value={inputStates.bio}
          onChange={(e) =>
            setInputStates({ ...inputStates, bio: e.target.value })
          }
          placeholder="Biography"
        ></textarea>
        <button className="saveButton" onClick={save}>{buttonText}</button>
      </div>
    </div>
  )
}