import { useState, useRef, useEffect } from 'react';

//useRef is similar to state but does not cause re-renders:
//The most likley use case for a useRef is to persist values between renders.
//useRef can also be used to effectively store the previous value of state.

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef();

  // A use ref returns an object which would look like this:
  // { current: 0 }
  
  // If you used a useEffect here and used state instead of useRef you would cause an infinite loop.
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => + 1)
  // });

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  //This function utilises useRef similar to how we use the Dom in vanilla JS
  // On clock this function is called and the inputRef is selected.
  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);

    // Below is not good practice:
    // inputRef.current.value = 'A Value'; ======== Notice how this does not change the state only the inputRef.
  }

  useEffect(() => {
    prevName.current = name
  }, [name]);

  //using useRef to reference html attributes
  // each attribute has a ref by default:
  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      {/* Notice that an object cannot be passed into jsx element as below: */}
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
