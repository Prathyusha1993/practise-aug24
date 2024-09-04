import React from 'react'

const Modal = ({isVisible, title,content, onClose}) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal;