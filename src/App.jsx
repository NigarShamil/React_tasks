import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import SetTimer from './components/Set_timer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <main>
    //   <button className="primaryBtn" onClick={() => setIsOpen(true)}>
    //     Open Modal
    //   </button>
    //   {isOpen && <Modal setIsOpen={setIsOpen} />}
    // </main>
    <SetTimer/>
  );
}

export default App;

