import { useState, useEffect } from 'react'

function Effect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  // The code below (lines 10-17) showcases two logs being triggered when the windowWidth state changes. 
  // The second return (explicit return) will be run first and is considered 'clean up'
  // it acts as a form of refresh to clean up any existing code from the the useEffect was run last.
  useEffect(() => {
    console.log('resource changed')
    
    return () => {
      console.log('return from resource change')
    }
  }, [windowWidth])

  // If an event listener is added it also needs to be removed - particularly if it has been added by an element which has since been removed/unmounted
  // We use our second function (explicit return function) to 'clean up' any existing event listeners.
  // As this useEffect is run onMount and adds the eventListener before it does so it will first remove the existing eventlistener.
  // The code in the explicit return will run on each unMount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
   <div>
      {windowWidth}
   </div>
  )
}

export default Effect