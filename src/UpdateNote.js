import { useEffect } from "react";
import {useParams} from "react-router-dom"

function UpdateNote() {
  let {noteID} = useParams()
  const fetchSelectedNote = (id) => {
    let notesArr = JSON.parse(localStorage.getItem("notes"))
    let editNote = {}
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id == id) {
        editNote = notesArr[i]
      }
    }
    console.log(editNote)
  }
  fetchSelectedNote(noteID)
  return (
    <div>
      <h1>Note Trial</h1>
      <input type="text" placeholder="Title" />
      <textarea placeholder='text' />
      {noteID && noteID}
      
    </div>
  );
}

export default UpdateNote;
