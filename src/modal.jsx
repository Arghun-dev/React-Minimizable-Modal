import React from 'react'
import './modal.scss'

export default function Modal({ show, children, closeModal }) {
  if (!show) {
    return null
  }
  return (
    <div 
      className="modal-wrapper"
      style={{ 
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span className="close-modal-btn" onClick={closeModal}>x</span>
        <button className="close modalMinimize">-</button> 
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae enim deleniti quidem tempora earum? Voluptate, quae adipisci facere aliquam odit ex veritatis officiis maiores quos eius ea vitae cum!</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  )
}