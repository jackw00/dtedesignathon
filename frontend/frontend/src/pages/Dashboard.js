import React from "react";
import app from "../axiosConfig.js";
import { useState, useEffect } from "react";

import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"

export default function Dashboard() {
  
  const [medicineList, setMedicineList] = useState([])
  const [frogImg, setFrogImg] = useState(Tadpole);

  useEffect(() => {
    let newPoints = localStorage.getItem('points')
    if (newPoints <= 5) {
      setFrogImg(Tadpole);
    }
    else if (newPoints > 5 && newPoints <= 10) {
      setFrogImg(Tadpole_Frog);
    }
    else if (newPoints > 10 && newPoints <= 15) {
      setFrogImg(Frog);
    }
    else if (newPoints > 15 && newPoints <= 20) {
      setFrogImg(Old_Frog);
    } 
  }, []);


  const logMedicine = () => {
    const storedPoints = parseInt(localStorage.getItem("points"), 10) || 0;
    let text = "Have you really taken your medicine? :)";
    let rebirthText = "Congratulations! Your frog has made it to old age and is ready to retire. Do you wish to receive a new tadpole?";
    
  if (window.confirm(text) == true) {
    if (storedPoints === 0) {
      localStorage.setItem("points", 1);
    }

    else if (storedPoints !== 0) {
      const newPoints = storedPoints + (Math.floor(Math.random() * 3) + 1);
      localStorage.setItem("points", newPoints);

      if (newPoints > 20) {
        localStorage.setItem("points", 0);
        if (window.confirm(rebirthText) == true) {
          setFrogImg(Tadpole);
        }
      }
      else if (newPoints <= 5) {
        setFrogImg(Tadpole);
      }
      else if (newPoints > 5 && newPoints <= 10) {
        setFrogImg(Tadpole_Frog);
      }
      else if (newPoints > 10 && newPoints <= 15) {
        setFrogImg(Frog);
      }
      else if (newPoints > 15 && newPoints <= 20) {
        setFrogImg(Old_Frog);
      } 
    }}
  };
  var user = localStorage.getItem('user')

  const getMedicine = () => {
    app.post('/show', {
      "user": user
    }).then((response) => {
      const currDate = new Date();
      const currHour = parseInt(currDate.getHours());
      const currMin = parseInt(currDate.getMinutes()) / 100;
      const currTime = currHour + currMin
      setMedicineList(response.data.sort((a, b)=> (
        (currTime - a.timeFloat) > (currTime - b.timeFloat)) ? 1 : -1
        ))
    })
  }

  const deleteMedicine = (id) => {
    console.log(id)
    app.delete(`/deleteMed/${id}`).then((response) => {

    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('points')
    
  }

  const resetFrog = () => {
    let text = "Are you sure you want to reset your frog?"
    if (window.confirm(text) == true) {
      localStorage.removeItem('points')
      setFrogImg(Tadpole);
    }
  }

  const checkAuth = () => {
    if(localStorage.getItem('user') == '' || localStorage.getItem('user') == null){
      return true
    } else {
      user = localStorage.getItem('user')
      return false
    }
  }

  if(checkAuth()){
    return (
      <div className="flex flex-col items-center h-screen bg-[#c3ffd4]">
        <h1 className="text-3xl font-bold font-mono m-10">
          Froggy Pill
        </h1>
        <p>You aren't logged in!</p>
        <button className="bg-[#97de70] my-5 hover:bg-[#50763c] font-bold py-2 px-8 text-lg shadow border rounded"><a href="/">Click here to go to sign in.</a></button>
      </div>
    )
  }

  getMedicine();

    return (
      <div class="overscroll-none">
      <div class="min-h-screen bg-gradient-to-b 
      from-[#f5f7fa] to-[#54a7ff]">
        <div className="">
          <div className="flex-row text-center bg-[#97de70] shadow-lg shadow-[#50763c] box-sizing: h-28 w-200 p-7 text-5xl font-mono font-bold">
              Froggy Pill
          </div>
          <div className="flex">
            <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 flex flex-col p-5 mt-10 font-mono text-center justify-center">
              <div className="bg-gray-200 border border-black rounded-md border-4 min-h-full">
              <p className="p-2 font-bold text-2xl underline" >Medicine List</p>
              <ol className="m-2">
                {medicineList.map((val, key) => {
                  return (
                    <li>
                      <p className="font-bold text-lg">{val.name}</p>
                      <p className="text-">- amount: {val.dosage}</p>
                      <p>- take at {val.timeStr}</p>
                      <button className="mb-2 text-sm text-red-800 hover:text-red-500" onClick={() => {deleteMedicine(val.id)}}>delete</button>
                    </li>
                  )
                })}
              </ol>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5 flex flex-col items-center justify-center py-4 ">
              <img className="max-h-96" src={frogImg} alt="Frog Image"></img>
              <div className="w-2/4 flex flex-col">
              <button onClick={logMedicine} class="bg-[#97de70] hover:bg-green-400 font-mono font-bold py-2 px-2 
              border-b-4 border-green-700 hover:border-blue-500 rounded">Feed the Frog
              </button>
            </div>

            </div>
          </div>
          <div className="flex">
            <div className="text-center w-2/5 p-10">
              <div className="w-full">
                <button class="bg-[#97de70] hover:bg-green-400 font-mono font-bold py-2 px-8
                border-b-4 border-green-700 hover:border-blue-500 rounded">
                  <a href='/addmedicine'>Add Medicine</a></button>
              </div>
            </div>
            <div className="w-3/5 p-10">
              <div className="text-center">
                <button class="mr-20 bg-[#97de70] hover:bg-green-400 font-mono font-bold py-2 px-10
                border-b-4 border-green-700 hover:border-blue-500 rounded" onClick = {resetFrog}>
                  Reset Frog</button>
                <button class="bg-[#97de70] hover:bg-green-400 font-mono font-bold py-2 px-12
                border-b-4 border-green-700 hover:border-blue-500 rounded" onClick = {logout}>
                  <a href='/'>Logout</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
