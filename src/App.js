import Modal from './Component/Modal';
import './App.css';
import { useState } from 'react';

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="App">
      <h1>Hey, Click on the button to open the model.</h1>
      <button 
        className="openModalBtn" 
        onClick={() => {
          setModalOpen(true);
          }}
      >
        Open
      </button>
      
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
