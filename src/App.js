import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [noteDetails, setNoteDetails] = useState({title:"",text:""})
  const saveNote = () => {
  // get list of notes from local storage
  let notesArr = JSON.parse(localStorage.getItem("notes"))
  let notes = []
  // if no note created before
  if (notesArr == null){
    // insert current note details to array
    notes.push({...noteDetails, id:uuidv4()})
  }
  // if previous note existed
  else{
    //insert previous notes in new array 
    notes = notesArr
    // insert current note details to array
    notes.push({...noteDetails, id: uuidv4()})
  }
  // save updates list of notes in localStorage
  localStorage.setItem("notes",JSON.stringify(notes))
  setNoteDetails({title:"",text:""})
  }
  
  return (
    <div className="App">
      <h1>Note Trial</h1>
      <input 
        type="text" 
        placeholder="Title" 
        value={noteDetails.title} 
        onChange={e => setNoteDetails({...noteDetails,title:e.target.value})}
      />
      <textarea 
        placeholder='text' 
        value={noteDetails.text} 
        onChange={e => setNoteDetails({...noteDetails,text:e.target.value})}
      />
      <button onClick={saveNote}>Done</button>
    </div>
  );
}

export default App;
