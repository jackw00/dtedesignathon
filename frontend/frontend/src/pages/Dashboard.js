import React from "react";
import app from "../axiosConfig.js";
import { useState } from "react";

import Lily_Pad from "../imgs/Lily_Pad.png";
import Frog from "../imgs/Frog.png";
import Old_Frog from "../imgs/Old_Frog.png";
import Tadpole_Frog from "../imgs/Tadpole_Frog.png";
import Tadpole from "../imgs/Tadpole.png"


export default function Dashboard() {

    return (

      <div className="login">
      <header className="login-header">
        <h1 className="text-3xl font-bold underline">
          TESTING TAILWIND CSS
        </h1>
        <div class="inset-44">
          <img src = {Lily_Pad}>
          </img>
        </div>
          
        <a
          className="login-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          testing changing something ;  to get something from backend:

        </p>
      </header>
      </div>
    );


}



