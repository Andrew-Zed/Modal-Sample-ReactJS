import Modal from './Component/Modal';
import './App.css';
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h1>Hey, Click on the button to open the model.</h1>
      <button className="openModalBtn" onClick={() => {setOpenModal(true);}}>Open</button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
