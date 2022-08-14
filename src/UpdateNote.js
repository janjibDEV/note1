import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"

function UpdateNote() {
  // get noteID from url
  let {noteID} = useParams()
  let navigate = useNavigate()
  const [note, setNote] = useState({id:noteID, title:"",text:""})

  const fetchSelectedNote = (id) => {
    let notesArr = JSON.parse(localStorage.getItem("notes"))
    let editNote = {}
    // search for the respective note using ID
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id === id) {
        editNote = notesArr[i]
      }
    }
    setNote(note => editNote)
  }

  const updateNote = (id) => {
    // get list of notes from localStorage
    let notesArr = JSON.parse(localStorage.getItem("notes"))
    // search for the respective note using ID
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id === id) {
        notesArr[i].title = note.title
        notesArr[i].text = note.text
      }
    }
    // save edited note in localStorage
    localStorage.setItem("notes", JSON.stringify(notesArr))
    // return to homepage
    navigate("/")
  }

  useEffect(()=>{
    fetchSelectedNote(noteID)
    // run when noteID change
  },[noteID])
  
  return (
    <div>
      <h1>Note Trial</h1>
      <input 
        type="text" 
        placeholder="Title"  
        value={note.title} 
        onChange={e => setNote({...note, title: e.target.value})}

        />
      <textarea 
        placeholder='text'  
        value={note.text} 
        onChange={e => setNote({...note, text: e.target.value})}
        />
      <button 
        onClick={() => updateNote(noteID)}>
          Save note
        </button>
      
    </div>
  );
}

export default UpdateNote;
