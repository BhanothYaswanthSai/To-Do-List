import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import ColorPicker from './ColorPicker'
import ToDoList from './ToDoList.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoList />
    </>
  );
}

export default App
