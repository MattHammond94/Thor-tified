import { useState } from 'react';
import List from './List.js';

function App() {
  const [dark, setDark] = useState(false);
  const[number, setNumber] = useState(0);

  const getItems = () => {
    return [number, number + 1, number + 2]
  }

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input 
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default App
