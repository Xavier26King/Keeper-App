import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote]; // Spread operator to add new note
    });
  } 

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      }); // Filter out the note to be deleted
    });
  }

  function notesRender(noteItem, index) {
    return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    ); // Render each note 
  }

  return (
    <div>
      <Header />
      <CreateArea OnAdd={addNote} /> 
      {notes.map(notesRender)}; 
      <Footer />
    </div>
  ); // Map through notes and render each note
}

export default App;