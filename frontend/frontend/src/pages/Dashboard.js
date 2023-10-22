import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"
import Pill from "../imgs/Pill.png"




export default function Dashboard() {
  
  const [medicineList, setMedicineList] = useState([])

  

  const logMedicine = () => {
    let text = "Have you really taken your medicine? :)";
    const storedPoints = parseInt(localStorage.getItem("points"), 10) || 0;

  if (window.confirm(text) == true) {
    if (storedPoints === 0) {
      localStorage.setItem("points", 1);
    } 
    else if (storedPoints !== 0) {
      const newPoints = storedPoints + (Math.floor(Math.random() * 3) + 1);
      localStorage.setItem("points", newPoints);
    }
  }
};

  var user = localStorage.getItem('user')

  const getMedicine = () => {
    app.post('/show', {
      "user": user
    }).then((response) => {
      setMedicineList(response.data)
    })
  }

  getMedicine()

    return (
      <div class="h-screen bg-gradient-to-b 
      from-[#f5f7fa] to-[#54a7ff]">
        <div className="">
          <div className="flex-row text-center bg-[#faf796] shadow-lg shadow-[#ffd105] box-sizing: h-28 w-200 p-7 text-5xl font-Georgia font-bold underline">
                Froggy Pill
      
          </div>
          <div className="flex">
            <div className="COLUMN 1 w-1/3 flex flex-col">
              <p className="font-bold" >Medicine</p>
              <ol>
                {medicineList.map((val, key) => {
                  return (
                    <li>
                      <p className=""><span className="font-bold">Name: </span>&nbsp;{val.name}</p>
                      <p>Dosage: {val.dosage}</p>
                      <p>Time: {val.time}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="w-2/3 flex flex-col">
                <img src={Tadpole}></img>
            </div>
          </div>
          <div className="flex text-center">
            <div className="COLUMN 1 w-1/3 flex flex-col">
              <button><a href='/addmedicine'>add medicine</a></button>
            </div>
            <div className="w-2/3 flex flex-col">
              <button onClick={logMedicine}>This is a button to log medicine</button>
            </div>
          </div>
        </div>
      </div>
    );
}
