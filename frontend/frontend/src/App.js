import { useState } from "react";
import app from './axiosConfig.js'

function App() {
  const [testVar, setTestVar] = useState('')
  const getVar = () => {
    app.get('/example').then((response) => {
      setTestVar(response.data.msg)
    })
  }

  getVar()

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          TESTING TAILWIND CSS
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          trying to get something from backend: {testVar}
        </p>
      </header>
    </div>
  );
}

export default App;
