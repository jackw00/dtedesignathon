import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

import Lily_Pad from "../imgs/Lily_Pad.png";
import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"


export default function Dashboard() {
  
  const [medicineList, setMedicineList] = useState([])

  const logMedicine = () => {
    let text = "Testing";
    if (window.confirm(text) == true) {
      
    }
    else {

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
      from-blue-200 to-blue-500">
        <div className="">
          <div className="flex-row text-center">
            <h1 className="text-3xl font-bold underline">
              TESTING TAILWIND CSS
            </h1>
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
                <img src={Lily_Pad}></img>
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
