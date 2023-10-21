import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

export default function Dashboard() {
  const [testVar, setTestVar] = useState('')
  const getVar = () => {
    app.get('/example').then((response) => {
      setTestVar(response.data.msg)
    })
  }
  getVar()

    return (

      <div className="login">
      <header className="login-header">
        <h1 className="text-3xl font-bold underline">
          TESTING TAILWIND CSS
        </h1>
        <a
          className="login-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          testing changing something ;  to get something from backend: {testVar}

        </p>
      </header>
      </div>
    );
}



