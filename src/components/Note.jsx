import React from 'react';

function Note(props) {
    return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button key={props.id} className="delete" onClick={() => props.delete(props.id)}>delete</button>
    </div>
}

export default Note;