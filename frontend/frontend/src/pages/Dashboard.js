import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"
import Pill from "../imgs/Pill.png"




export default function Dashboard() {

  

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
              this is where the sticky note thing will be
            </div>
            <div className="w-2/3 flex flex-col">
                <img src={Lily_Pad}></img>
            </div>
          </div>
          <div className="flex text-center">
            <div className="COLUMN 1 w-1/3 flex flex-col">
              <button>add medicine</button>
            </div>
            <div className="w-2/3 flex flex-col">
              <button onClick={logMedicine}>This is a button to log medicine</button>
            </div>
          </div>
        </div>
      </div>
    );
}
