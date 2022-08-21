import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function Homepage() {
    let navigate = useNavigate()
    // create state to display list of notes
    const [displayNote, setDisplayNote] = useState([])
    // get list of notes from local storage everytime the page is load
    useEffect(() => {
        setDisplayNote(displayNote => JSON.parse(localStorage.getItem("notes")))
    }, [])
    // create function to move to new page to view and edit specific note
    const goUpdate = (id) => navigate(`update/${id}`)
    const goDelete = (id) => {
        // filter the list from deleted note using id
        let cleanList = displayNote.filter(item => {
            return item.id !== id
        })
        localStorage.setItem("notes",JSON.stringify(cleanList))
        setDisplayNote(displayNote => cleanList)
    }
    return (
        <Container className='m-5'>
            <h1 className='title'>Note 1</h1>
            <div className='m-5 d-flex flex-wrap'>
            {displayNote && displayNote.map(item => {
                return (
                <div key={item.id} className="m-3 notebox p-4">
                    <h3>{item.title}</h3>
                    <Button className="m-3"  onClick={() => goUpdate(item.id)}><i className="fa-solid fa-pen-to-square"></i></Button>
                    <Button className="m-3"  onClick={() => goDelete(item.id)}><i class="fa-solid fa-trash"></i></Button>
                </div>
                )
            })}
            </div>
            <Row>
                <Col>
                    <Button className='create-button' onClick={() => navigate("/app")}>New Note</Button>
                </Col>
            </Row>
        </Container>
    )
}
