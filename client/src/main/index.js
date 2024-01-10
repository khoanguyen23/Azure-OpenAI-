import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function index() {


  return (
    <>
   <div className="p-10 bg-slate-200">
   <Link to="/login">
                    {/* <img src={logo_light} alt="" /> */}
    <h3>Hello </h3>

                  </Link>
   </div>
    </>
  );
}
