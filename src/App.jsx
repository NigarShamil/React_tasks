import { useState } from 'react'
import './App.css'
import List from './components/UserList/List'
import Accordion from './components//Accordion/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion/>
    </>
  )
}

export default App
