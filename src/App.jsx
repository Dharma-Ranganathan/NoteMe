import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/header';
import Input from './components/Input';
import NoteContextProvider from './context/NoteContext';

const App = () => {
  return (
    <div className='app'>
      <NoteContextProvider>
        <Header />
        <Input/>
        <CardContainer/>
      </NoteContextProvider>
    </div>
  )
}

export default App
