import React from 'react';
import "./index.css";


const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="title">
                <h1>Are You Sure You Want To Delete Your Account?</h1>
            </div>
            <div className="body">
                <p>After Deleting Your account You cannot reverse this Action</p>
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
export default Modal