import React from "react";

export default function Login() {

  const centerTextHeader = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  };

  const offsetInput = {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",

  };

  const labelStyle = {
    marginBottom: "10px", 
    display: "block",
  };

  return (
    <div className="login">
      <header className="login-header">
        <div style={centerTextHeader}>
          <h1 className="text-3xl font-bold underline">
            Welcome to FroggyPill!
          </h1>
          <p>Enter your username below to log in</p>
          </div>

          
          <div style={offsetInput}>
            <label className='p-2 font-medium text-lg' style={labelStyle}>
              Username</label>
              <input className="block p-2 shadow border rounded" type="text" 
                    placeholder="Username">
              </input>
          </div>
      </header>
    </div>

  );

}



