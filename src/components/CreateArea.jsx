import React from "react";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input onChange={props.titleFunction} name="title" placeholder="Title" />
        <textarea onChange={props.contentFunction} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.addFunction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
