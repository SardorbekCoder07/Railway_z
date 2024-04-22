// Modal.js
import React from 'react'

const Modal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <p>This is a modal!</p>
      </div>
    </div>
  )
}

export default Modal
