import React, { useState, useEffect } from 'react'
import './note-app.css'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [noteEditing, setNoteEditing] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    }
    setNotes([...notes, newNote])
    e.target.note.value = ''
  }

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete)
    setNotes(filteredNotes)
  }

  const submitEdits = (event, idToEdit) => {
    event.preventDefault()
    const updatedNotes = notes.map((note) => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          text: event.target.note.value,
        }
      } else {
        return note
      }
    })
    setNotes(updatedNotes)
    setNoteEditing('')
  }

  useEffect(() => {
    const json = localStorage.getItem('note')
    const savedNotes = JSON.parse(json)
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  return (
    <div className="App-note-app">
      <form onSubmit={addNote}>
        <input className="add-input" type="text" name="note" />
        <button className="add">
          <FontAwesomeIcon icon={faPlus} />
          Add Note
        </button>
      </form>

      {notes.map((note) => (
        <div key={note.id}>
          {/* <button onClick={() => deleteNote(note.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <button type="Submit" onClick={() => setNoteEditing(note.id)}>
            <FontAwesomeIcon icon={faEdit} />
          </button> */}

          {note.id !== noteEditing ? (
            <div style={{ margin: '0 25px 0 25px' }}>
              <div className="tools">
                <button
                  //   className="tools-btn"
                  onClick={() => setNoteEditing(note.id)}
                  className="edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  //   className="tools-btn"
                  onClick={() => deleteNote(note.id)}
                  className="delete"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="note" style={{ padding: '10px' }}>
                {note.text}
              </div>
            </div>
          ) : (
            <form
              style={{ margin: '120px 25px 0 25px' }}
              className="note"
              onSubmit={(e) => submitEdits(e, note.id)}
            >
              <div className="tools-btn">
                <button type="Submit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
              <textarea name="note" defaultValue={note.text}></textarea>
            </form>
          )}
        </div>
      ))}
    </div>
  )
}

export default NoteApp
