import { useState } from 'react';
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="a-name" style={BUTTON_WRAPPER_STYLES} onClick={ () => console.log('clicked') }>
          <button onClick={ () => setIsOpen(true) }>Open Modal</button>

          <Modal open={isOpen} onClose={ () => setIsOpen(false) }>
            Fancy Modal
          </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

export default App;

/* If zIndex of an element is within a container which has a zIndex its zIndex will be subservient to that zIndex.*/
/* See MODAL component for further notes... */