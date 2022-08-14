import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from 'react-bootstrap/Form';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  const [noteDetails, setNoteDetails] = useState({title:"",text:"", date:""})
  const [error,setError] = useState(false)

  const saveNote = () => {
    if (noteDetails.text === "" || noteDetails.title === "") {
      setError(!error)
      return
    } 
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
    <Container className="App m-5">
    { error && (<Alert variant="danger">
          Fill in the blank
        </Alert>)}

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
        <Button onClick={saveNote}>Done</Button>
        </Col>
      </Row>
      </Form>
    </Container>
  );
}

export default App;
