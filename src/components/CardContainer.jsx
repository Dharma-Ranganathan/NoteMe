import {useContext} from 'react';
import '../styles/CardContainer.css';
import Card from './Card';
import { NoteContext } from '../context/NoteContext';

const CardContainer = () => {

  const {notes} = useContext(NoteContext);
  return (
    <div className='card-wrapper'>
      <div className="card-container">
        {
          notes.length !==0 && notes.map((content) => <Card content={content} key={content.id}/> )
        }
        
      </div>
    </div>
  )
}

export default CardContainer
