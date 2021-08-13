import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import '../styles.scss';
// import notes from '../notes';

function App() {

    const [notes, setNotes] = React.useState([]);
    
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    
    function setNoteTitle(event) {
        setTitle(event.target.value);
    
    }
    
    function setNoteContent(event) {
        setContent(event.target.value);
    }
    
    
    function addNote(event) {
        setNotes(prev => {
            return [...prev, {
                key: prev.length === 0 ? 1 : prev.slice(-1)[0].key + 1 ,
                title: title,
                content: content
            }]
        })
        event.preventDefault();
    }

    function deleteNote (id) {
        setNotes(prev => {
            return prev.filter(function(note){
                return note.key !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea titleFunction={setNoteTitle} contentFunction={setNoteContent} addFunction={addNote}/>
        <div className='notes'>
        {notes.map(note => note.title !== "" || note.content !== "" ? <Note delete={deleteNote} key={note.key} id={note.key} title={note.title} content={note.content}/> : null)}
        </div>
        <Footer />
    </div>
}

export default App;