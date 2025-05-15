import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes"

// function createNote(notesItem){
//     return (
//         <Note key={notesItem.key} title={notesItem.title} content={notes.content} />
//     );
// }

function App(){
    return (
        <div>
            <Header />
            <Footer />
            {notes.map((notesItem) => (
            <Note key={notesItem.key} title={notesItem.title} content={notesItem.content} />
            ))};
        </div>
    )
}

export default App;