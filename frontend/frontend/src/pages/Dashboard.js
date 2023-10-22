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
  const [frogImg, setFrogImg] = useState(Tadpole);

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
              <img src={frogImg} alt="Frog Image"></img>
            </div>
          </div>
          <div className="flex text-center">
            <div className="COLUMN 1 w-1/3 flex flex-col">
              <button><a href='/addmedicine'>add medicine</a></button>
            </div>
            <div className="w-2/3 flex flex-col">
              <button onClick={logMedicine} class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-blue-500 rounded">This is a button to log medicine</button>
            </div>
          </div>
        </div>
      </div>
    );
}
