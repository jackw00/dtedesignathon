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

  getMedicine()

    return (
      <div class="h-screen bg-gradient-to-b 
      from-[#f5f7fa] to-[#54a7ff]">
        <div className="">
          <div className="flex-row text-center bg-[#97de70] shadow-lg shadow-[#50763c] box-sizing: h-28 w-200 p-7 text-5xl font-mono font-bold">
                Froggy Pill
          </div>
          <div className="flex">
            <div className="w-1/3 flex flex-col p-5">
              <p className="font-bold text-2xl underline" >Medicine</p>
              <ol className="m-2">
                {medicineList.map((val, key) => {
                  return (
                    <li>
                      <p className="font-bold text-lg">{val.name}</p>
                      <p className="text-">- amount: {val.dosage}</p>
                      <p>- take at {val.timeStr}</p>
                      <button className="text-sm text-red-800 hover:text-red-500" onClick={() => {deleteMedicine(val.id)}}>delete</button>
                      <hr className=""></hr>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="w-2/3 flex flex-col items-center justify-center">
              <img src={frogImg} alt="Frog Image"></img>
              <div className="w-2/3 flex flex-col">
              <button onClick={logMedicine} class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 
              border-b-4 border-green-700 hover:border-blue-500 rounded">This is a button to log medicine
              </button>
            </div>

            </div>
          </div>
          <div className="flex text-center">
            <div className="w-1/3 flex flex-col">
              <button><a href='/addmedicine'>add medicine</a></button>
            </div>
          </div>
        </div>
      </div>
    );
}
