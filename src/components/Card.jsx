import { useContext } from 'react';
import '../styles/Card.css';
import { NoteContext } from '../context/NoteContext';


const Card = ({content}) => {

  const {dispatch} = useContext(NoteContext);

  function removeHandler(){
    dispatch({type: 'Remove_Note',payload:content})
  }

  function statusHandler(){
    dispatch({type: "Update_Status",payload:content})
  }

  return (
    <div className='card'>
      <div className="action-btn">
        <div className="action green-btn" onClick={statusHandler}></div>
        <div className="action red-btn" onClick={removeHandler}></div>
      </div>
      <div className="content">
        <p>
            {content.note}
        </p>
        
      </div>
      <div className='status' style={content.done == 'completed' ? {color:'#0f0',textShadow:'2px 2px 5px #0f0'} : {color:'yellow', textShadow: '2px 2px 5px yellow'}}>
            {content.done}
        </div>
    </div>
  )
}

export default Card
