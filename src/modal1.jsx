import React, { useState } from 'react'
import './modal.scss'

export default function Modal({ show, children, closeModal, minimize, setMinimize }) {
  const [inputValue, setInputValue] = useState('')
  if (!show) {
    return null
  }

  if (minimize) {
    return (
      <div 
        // className="modal-wrapper-minimized"
        // style={{ 
        //   transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        //   opacity: 1,
        // }}
        style={{ backgroundColor: 'red' }}
      >
      {/* <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span 
        className="close-modal-btn" 
        onClick={() => {
          closeModal()
          setMinimize(false)
        }}
        >
          x
        </span>
        <button className="close modalMinimize" onClick={() => setMinimize(true)}>-</button> 
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae enim deleniti quidem tempora earum? Voluptate, quae adipisci facere aliquam odit ex veritatis officiis maiores quos eius ea vitae cum!</p>
        </div>
        <div className="modal-footer">
          <button 
            className="btn-cancel" 
            onClick={() => {
              closeModal()
              setMinimize(false)
            }}
          >
            Close
          </button>
        </div>
      </div> */}
      <p>Minimized Modal1</p>
    </div>
    )
  }

  return (
    <div 
      className="modal-wrapper"
      style={{ 
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <div className="Modal-header">
        <div className="icons">
          <button 
            type="button" 
            className="close" 
            data-dismiss="modal"
            onClick={() =>{
              closeModal()
              setMinimize(false)
            }}
          > 
            <i class='fa fa-times'></i> 
          </button>
          <button 
            className="close modalMinimize"
            onClick={() => {
              setMinimize(true)
              closeModal()
            }}
          >
            <i class='fa fa-minus'></i>
          </button>
        </div>
      </div>
      <div className="Modal-content">
        <div className="Modal-body">
          <h4>Modal1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae enim deleniti quidem tempora earum? Voluptate, quae adipisci facere aliquam odit ex veritatis officiis maiores quos eius ea vitae cum!</p>
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </div>
        <div className="Modal-footer">
          
        </div>
      </div>
    </div>
  )
}