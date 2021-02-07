import React, { useState } from 'react'
import './App.css';
import Modal from './modal'
import Modal1 from './modal1'
import UnminimizeIcon from './unminimize.svg'

function App() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [minimize, setMinimize] = useState(false)
  const [minimize1, setMinimize1] = useState(false)
  const closeModal = () => setShow(false)
  const closeModal1 = () => setShow1(false)

  const background = () => {
    if (show) {
      return <div className="back-drop"></div>
    }

    if (minimize) {
      return (
        <div style={{ border: '1px solid #ccc', borderRadius: 5, display: 'flex', justifyContent: 'center', width: 100, bottom: 0, left: 0, position: 'absolute' }}>
          <button 
            style={{ marginRight: 10 }}
            onClick={()=>{
              setShow(false)
              setMinimize(false)
            }}
          >
            X
          </button>
          <button 
            onClick={() => {
              setShow(true)
              setMinimize(false)
            }}
            >
              <img src={UnminimizeIcon} alt="unminimize" />
          </button>
        </div>
      ) 
    }

    return null
  }

  return (
    <div className="App">
      {background()}
      <button 
        className="btn-openModal" 
        onClick={() => {
          setShow(true)
          setMinimize(false)
        }}
      >
        show
      </button>
      <button 
        className="btn-openModal" 
        onClick={() => {
          setShow1(true)
          setMinimize1(false)
        }}
      >
        show1
      </button>
      <Modal show={show} closeModal={closeModal} minimize={minimize} setMinimize={setMinimize}>this is my modal</Modal>
      <Modal1 show={show1} closeModal={closeModal1} minimize={minimize1} setMinimize={setMinimize1}>this is my modal1</Modal1>
    </div>
  );
}

export default App;
