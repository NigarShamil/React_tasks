import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import SetTimer from './components/Set_timer';
import Form from './components/Form/Form';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <main>
    //   <button className="primaryBtn" onClick={() => setIsOpen(true)}>
    //     Open Modal
    //   </button>
    //   {isOpen && <Modal setIsOpen={setIsOpen} />}
    // </main>
    // <SetTimer/>
    <Form/>
  );
}

export default App;

