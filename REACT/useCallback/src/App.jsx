import { useState, useCallback } from 'react';
import List from './List.jsx';

// Just like useMemo - useCallback prevents re renders of certain elements 
// =======================================
// The only difference is that useCallback takes a function and returns a whole function
// useMemo would return the return value of said function.

export default function App() {
  const [dark, setDark] = useState(false);
  const[number, setNumber] = useState(1);

  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2]
  // }, [number]);

  // because useCallback returns a function we can pass params:
  // This function allows us to increment each time via the incrementor amount.
  const getItemsWithParams = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItemsWithParams={getItemsWithParams} />
    </div>
  )
}