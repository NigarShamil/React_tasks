import { useState } from 'react'
import './App.css'
import List from './components/UserList/List'
import Accordion from './components//Accordion/Accordion'
import Dropdown from './components/Dropdown/Dropdown'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dropdown/>
    </>
  )
}

export default App
