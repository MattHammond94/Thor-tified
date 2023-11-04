import { useState, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  // A use ref returns an object which would look like this:
  // { current: 0 }
  
  // If you used a useEffect here you would cause an infinite loop.
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => + 1)
  // });

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div>
    </>
  )
}

export default App
