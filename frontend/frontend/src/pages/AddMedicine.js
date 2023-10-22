import React, { useState } from "react";
import app from '../axiosConfig.js'

export default function Login() {
    const [name, setName] = useState('')
    const [dosage, setDosage] = useState('')
    const [time, setTime] = useState('')

    var user = localStorage.getItem('user')

    const addMedicine = () => {
        var newtime = time
        if(time.length == 4){
            newtime = "0" + newtime
        }
        var hours = newtime.substring(0, 2)
        var mins = newtime.substring(3, 5)
        var timeint = parseInt(hours) + parseInt(mins) / 100
        var dosageint = parseInt(dosage)
        app.post('/create', {
            "name": name,
            "user": user,
            "dosage": dosageint,
            "time": timeint
        })
    }

  const handleClick = (val) => {
    localStorage.setItem('user', val)
    window.location.reload(false)
  }

  

  return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl p-5 underline">Add New Medicine</h2>
        <form className="w-full max-w-md rounded-2xl p-5 mx-10 flex flex-col">
            <label className="p-2 font-bold text-lg">Name: </label>
            <input className="p-2 shadow border rounded" placeholder="Flintstone Gummy" onChange={(e) => {setName(e.target.value)}}></input>
            <label className="block p-2 font-bold text-lg text-left">Dosage: </label>
            <input className="block p-2 shadow border rounded" type="text" placeholder="3" onChange= {(e) => {setDosage(e.target.value)}}></input>
            <label className="block p-2 font-bold text-lg">Time (military time): </label>
            <input className="block p-2 shadow border rounded" placeholder="12:00" type="text" onChange= {(e) => {setTime(e.target.value)}}></input>
            <button className="bg-gray-400 my-5 hover:bg-gray-200 font-bold py-2 px-8 text-lg shadow border rounded" onClick={addMedicine}>Add Medicine</button>
        </form>
        <button className="bg-gray-300 my-5 hover:bg-gray-200 font-bold py-2 px-8 text-lg shadow border rounded"><a href='/dashboard'>return to dashboard</a></button>

    </div>
  )

}



