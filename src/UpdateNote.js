import {useParams} from "react-router-dom"

function UpdateNote() {
  let params = useParams()
  return (
    <div>
      <h1>Note Trial</h1>
      <input type="text" placeholder="Title" />
      <textarea placeholder='text' />
      {/* <button onClick={saveNote}>Done</button> */}
      
    </div>
  );
}

export default UpdateNote;
