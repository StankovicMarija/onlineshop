import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

function Backdrop({ onClose }) {
  return (
    <div className={classes.backdrop} onClick={onClose} />
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>{children}</div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
