import React, { useState } from "react";

function CreateArea(props) {
  // const [Istitle, setTitle] = useState("");
  // const [IsContent, setContent] = useState("");
  const [note, setNote] = useState({
    title: "",
    content: "",
  }); // Using object destructuring to set the initial state of note

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value, // Using computed property names to set the value of the input field
      };
    });
  } // Using object destructuring to get the name and value of the input field
  // Using spread operator to update the state of note

  function submitNotes(event) {
    props.OnAdd(note); // Passing the note object to the parent component
    setNote({
      title: "",
      content: "",
    }); // Resetting the state of note after submission
    event.preventDefault(); // Preventing the default behavior of the form submission
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange} // OnChange event handler to update the state of note
          placeholder="Title"
          value={note.title} // Using object destructuring to get the value of the input field
        />
        <textarea
          name="content"
          onChange={handleChange} 
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
