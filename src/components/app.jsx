import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      });
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
    );
  }

  return (
    <div>
      <Header />
      <CreateArea OnAdd={addNote} />
      {notes.map(notesRender)};
      <Footer />
    </div>
  );
}

export default App;