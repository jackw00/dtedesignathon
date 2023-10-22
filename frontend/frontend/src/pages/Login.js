import React, { useState } from "react";
import app from '../axiosConfig.js'

export default function Login() {
  const [input, setInput] = useState('')

  var user = ''
  
  //check if already logged in
  const checkAuth = () => {
    if(localStorage.getItem('user') == '' || localStorage.getItem('user') == null){
      return true
    } else {
        user = localStorage.getItem('user')
    }
  }

  const handleClick = (val) => {
    localStorage.setItem('user', val)
    window.location.reload(false)
  }

  
  if(!checkAuth()) {
    return (
      <div className="flex flex-col items-center h-screen bg-[#c3ffd4]">
        <h1 className="text-3xl font-bold m-10">
          Froggy Pill
        </h1>
        <p>Welcome back {user}!</p>
        <button className="bg-[#97de70] my-5 hover:bg-[#50763c] font-bold py-2 px-8 text-lg shadow border rounded"><a href="/dashboard">Go to Dashboard</a></button>
      </div>

    );
  }

  return (
    <div className="flex flex-col items-center h-screen bg-[#c3ffd4]">
    <h1 className="text-3xl font-bold m-10">
        Froggy Pill
      </h1>
      <p>Enter your username below to sign up</p>

      <label className='p-2 font-medium text-lg'>Username</label>
        <input className="block p-2 shadow border rounded" type="text" placeholder="Username" onChange={(e) => {setInput(e.target.value)}}></input>
        <button className="bg-[#97de70] my-5 hover:bg-[#50763c] font-bold py-2 px-8 text-lg shadow border rounded"><a href="/dashboard">Go to Dashboard</a></button>
    </div>
  )

}