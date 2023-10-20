import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0, 
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={ onClose }>Close</button>
        { children }
      </div>
    </>,
    document.getElementById('portal')
  )
}

/* The Modal component was a child of the div within the App component */
/* Now we have created a portal to the div element 'portal' within index.html */
/* Because the MODAL comp now renders outside of its parent element it does not fall victim to the casciding styles applied
in the parent element. */

/* =========================================== */

/* Event delegation is built into portals - all events on this modal component will now delegate up to parents of the modal */

/* The Modals parent in App.js is class "a-name" the container for our button and Modal. by adding a console log to "a-name" 
not only causes a log when that div/button is clicked but also when the rendered Modal is clicked. */

/* Because the Modal is a child of both the portal div in index.js and also within "a-name" it inherits this onclick functionality. */ 