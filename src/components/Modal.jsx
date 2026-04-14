import React from 'react';
import { createPortal } from 'react-dom';

const Modal = React.forwardRef(function Modal({ children }, ref) {
  const dialog = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
