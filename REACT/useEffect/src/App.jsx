import { useState, useEffect } from 'react'

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   console.log('render');
  // }, [resourceType])

  // useEffect(() => {
  //   console.log('onMount');
  // }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {
        items.map((item) => {
          return <pre>{ JSON.stringify(item) }</pre>
        })
      }
    </>
  )
}

export default App


// The most basic use case of useEffect as per line 6 is to trigger a function every single time there is a re render on said page/component
// The useEffect on line 6 with log render for every action that takes place in the App component.

// Adding the dependency array as the second param means that a re render will only take place when whatever is within the depency array changes.
// Notice that if the resource type is changed by clicking one of the buttons then render is logged to the console.
// If you then click the same button there is no log in the console because Resource Type did not change it remained the same. 

// On lines 10-13 because nothing is within the dependency array this effect will only run on the first initial render because nothing is being checked for change.


// Notes on mounting: 

// The mount is the process of inserting a component into the DOM
// There are three main phases in the lifecycle of a React component: mounting, updating, and unmounting.
// During the mounting phase - React initializes the component, creates its corresponding DOM elements, and inserts them into the browser's DOM
// First render is the same as mounting to the page. 
