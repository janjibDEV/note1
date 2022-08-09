import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Homepage() {
    let navigate = useNavigate()
    // create state to display list of notes
    const [displayNote, setDisplayNote] = useState([])
    // get list of notes from local storage every the page is load
    useEffect(()=>{
        setDisplayNote(displayNote => JSON.parse(localStorage.getItem("notes")))
    },[])
    // create function to move to new page to view and edit specific note
    const goUpdate = (id) => navigate(`updatenote/${id}`)
    return (
        <div>
            <h1>Homepage</h1>
            {displayNote.map(item => {
                return (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <button onClick={() => goUpdate(item.id)}>Edit</button>
                    <hr />
                </div>
                )
            })}
            <Link to="/app">New Note</Link>
        </div>
    )
}
