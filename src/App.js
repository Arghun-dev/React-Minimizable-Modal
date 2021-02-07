import React, { useState } from 'react'
import './App.css';
import Modal from './modal'

function App() {
  const [show, setShow] = useState(false)
  const [minimize, setMinimize] = useState(false)
  const closeModal = () => setShow(false)

  return (
    <div className="App">
      { show ? <div className="back-drop"></div> : null }
      <button className="btn-openModal" onClick={() => setShow(true)}>show</button>
      <Modal show={show} closeModal={closeModal}>this is my modal</Modal>
      <div className="minmaxCon"></div>  
    </div>
  );
}

export default App;
