import { useContext, useState } from 'react';
import '../styles/Input.css';
import { IoMdAdd } from "react-icons/io";
import { NoteContext } from '../context/NoteContext';

const Input = () => {

  const {dispatch,notes} = useContext(NoteContext);
  const [note,setNote] = useState('');

  function notesHandler(){
    dispatch({type:"Add_Note",payload:{id : notes.length+1, note : note, done : 'idle'}})
    setNote('')
  }

  return (
    <div className='input-wrapper'>
      <div className="input-container">
        <input className='input-bar' type="text" placeholder='Add your note here...' value={note} onChange={(e)=>setNote(e.target.value)
}/>
        <button className='add-note-btn' onClick={notesHandler}>
            <i>
                <IoMdAdd />
            </i>
        </button>
      </div>
    </div>
  )
}

export default Input
