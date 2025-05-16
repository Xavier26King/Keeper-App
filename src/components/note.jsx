import React from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  } // Function to handle delete action
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button> 
    </div>
  ); // Render the note with title and content
  // Using props to pass data from parent to child component
}

export default Note;