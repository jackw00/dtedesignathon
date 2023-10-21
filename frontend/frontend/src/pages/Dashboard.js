import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

import Lily_Pad from "../imgs/Lily_Pad.png";
import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"


export default function Dashboard() {

  const logMedicine = () => {
    let text = "Testing";
    if (window.confirm(text) == true) {
      
    }
    else {

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
              <button>This is a button to add a new prescription</button>
            </div>
            <div className="w-2/3 flex flex-col">
              <button onClick={logMedicine}>This is a button to log medicine</button>
            </div>
          </div>
        </div>
      </div>
    );
}
