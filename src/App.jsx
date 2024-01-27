import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
}

export default App;

