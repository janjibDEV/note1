import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';

function UpdateNote() {
  // get noteID from url
  let {noteID} = useParams()
  let navigate = useNavigate()
  const [noteDetails, setNoteDetails] = useState({id:noteID, title:"",text:""})

  const fetchSelectedNote = (id) => {
    let notesArr = JSON.parse(localStorage.getItem("notes"))
    let editNote = {}
    // search for the respective note using ID
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id === id) {
        editNote = notesArr[i]
      }
    }
    setNoteDetails(note => editNote)
  }

  const updateNote = (id) => {
    // get list of notes from localStorage
    let notesArr = JSON.parse(localStorage.getItem("notes"))
    // search for the respective note using ID
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id === id) {
        notesArr[i].title = noteDetails.title
        notesArr[i].text = noteDetails.text
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
    // <div>
    //   <h1>Note Trial</h1>
    //   <input 
    //     type="text" 
    //     placeholder="Title"  
    //     value={note.title} 
    //     onChange={e => setNote({...note, title: e.target.value})}

    //     />
    //   <textarea 
    //     placeholder='text'  
    //     value={note.text} 
    //     onChange={e => setNote({...note, text: e.target.value})}
    //     />
    //   <button 
    //     onClick={() => updateNote(noteID)}>
    //       Save note
    //     </button>
      
    // </div>

    <Container className="m-5">
    

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Title" 
          value={noteDetails.title} 
          onChange={e => setNoteDetails({...noteDetails,title:e.target.value})}
        />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
          as="textarea"
          size="lg"
          placeholder='Write Something' 
          value={noteDetails.text} 
          onChange={e => setNoteDetails({...noteDetails,text:e.target.value})}
        />
        </Form.Group>
        <Row className='my-5'>
          <Col>
        <Button onClick={() => updateNote(noteID)}>Done</Button>
        </Col>
      </Row>
      </Form>
    </Container>

  );
}

export default UpdateNote;
