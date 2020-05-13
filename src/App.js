import React, { useEffect, useState } from 'react';

function Home() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Home Page
    </h1>
  );
}

function Page1() {
  const [ processId, setProcessId ] = useState(null);

  const getExternalProcessId = () => {
    // return Math.floor(Math.random() * 10000) + 1;
    return 'abc123';
  }

  const stopExternalProcess= (processId) => {
    alert(`stopping process ${processId}`);
  }

  useEffect(() => {
    // Anything in here is fired on component mount.
    setProcessId( getExternalProcessId() );
    return () => {
      // Anything in here is fired on component unmount ()
      stopExternalProcess(processId);
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Page With Action
      </h1>
      <h2>Executing process id: {processId}</h2>
    </div>
  );
}

function App() {
  const [ isHomePage, setIsHomePage ] = useState(true);

  return (
    <div>
      <button 
        onClick={() => setIsHomePage( !isHomePage )}
      >
        Switch component
      </button>
      { isHomePage ? 
        (
          <Home />
        ) : (
          <Page1 />
        ) 
      }
    </div>
  );
}

export default App;
