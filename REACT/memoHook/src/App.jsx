import { useState, useMemo, useEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] =useState(false);
  // const doubleNumber = slowFunction(number);

  // useMemo caches a used value of an element in memorization.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);


  // Remember that in JS objects do not have strict equallity even if their attributes are the same. 
  // By adding a useMemo around themeStyles and passing the dark state in the dependency array
  // We have prevented themeStyles object from being re created each render.
  // Theme style will only be re created if the dark attr changes.
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]);

  // Add a use effect to showcase the 'Theme changed' log at every re render
  // This log will show each time themeStyles is re rendered - which without a useMemo on the themeStyles obj would be every time.
  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles]);

  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

// Slow function represents a much larger function that handles a lot - therefore takes time and slows performance
// This function is actually run each time because whenever a state changes in react it re renders the ENTIRE component.
// This means the entire App function will be run top to bottom
// NOTICE: That without the useMemo hook in the browser console 'Calling slow function' is returned every time the theme is changed.
function slowFunction(num) {
  console.log('Calling slow function');
  for (let i = 0; i <= 100000000000000; i++)
  return num * 2
}

// On Line 6 where we have wrapped our doubleNumber in a useMemo hook and passed the number into the dependency array
// This ensures that if the number being passed to the slow function does NOT change then it will not rerender the element. 
// This allows you to then change theme without having to re run the slow function provided that the number does not change.

// IF the number remaind the same but change theme button is pressed the code will be re run and once is reache useMemo it will recognise
// The number has not changed and will skip re running this function.

// IMPORTANT NOTE: don't useMemo everywhere as it does save value in some memory variable making memory larger.


// Lines 14-29:
// =================================================================================================================
// Another use case for useMemo - is preventing re renders as a result of referential equality.
// Similar to in ruby a JS object is different each time it is generated as they are only created in memeory.
// This means that each time the App function is run (each re render) a brand new instance of themeStyles obj is created.
