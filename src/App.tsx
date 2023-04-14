import './App.css'
import Modal from './components/Modal'
import { useState } from 'react'
import AgreementContext from './components/AgreementContext'
import TestAgree from './components/TestAgree';

function App() {

  //const [acknowledged, setAcknowledged] = useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <AgreementContext.Provider value={{ isOpen, setOpen }}>
      <Modal isOpen={isOpen} setOpen={setOpen} />
      <button 
        className="px-5 py-2 bg-yellow-200 rounded-md" 
        onClick={() => setOpen(true)}>
          Show Modal
      </button>
      <TestAgree />
    </AgreementContext.Provider>
  );

}

export default App
