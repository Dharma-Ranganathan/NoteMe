import { createContext, useReducer } from "react"

export const NoteContext = createContext();

const notesReducer = (state, action) =>{
  switch(action.type){
    case 'Add_Note':
      return [...state, action.payload];

    case 'Remove_Note':
      return state.filter((item) => item.id !== action.payload.id);

    case 'Update_Status':
      return state.map((note)=> note.id == action.payload.id ? {...note, done:'completed'} : note)

    default:
      return state
  }
}



const NoteContextProvider = ({children}) => {

    const [notes,dispatch] = useReducer(notesReducer,[
      {id : 1, note : 'buy grocery', done :'idle' },
      {id : 2, note : 'get mobile', done : 'idle'}
    ]);


  return (
    <NoteContext.Provider value={{notes,dispatch}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteContextProvider
