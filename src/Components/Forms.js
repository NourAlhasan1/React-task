import React from 'react'
import { useState } from "react";
import "./Forms.css";


const Forms = () => {
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[eduction,setEduction]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[experiance,setExperiance]=useState("");
    const[address,setAddress]=useState("");
    
    
    const buttonsubmit = (event) => {
      event.preventDefault();

      console.log(
        {'First Name':fname,
         'Last Name':lname,
         'Eduction':eduction,
         'Email':email,
         'Phone':phone,
         'Experiance':experiance,
         'Address':address }
              );     
     
  }
   
  return (
     
    <div className="container m-5 w-25 ">
      <form className=' form-control '>
         First Name:
         <input type="text" name="First Name" className="form-control " value={fname} onChange={(e) => setFname(e.target.value)} />
         Last Name:
         <input type="text" name="Last Name" className="form-control p-2 "value={lname} onChange={(e) => setLname(e.target.value)}  />
         Eduction:
         <input type="text" name="Eduction" className="form-control  p-2" value={eduction} onChange={(e) => setEduction(e.target.value)}  />
         Email:
         <input type="email" name="Email" className="form-control p-2 " placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}  />
         Password:
         <input type="password" name="password" className="form-control p-2  " placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}  />
         Phone:
         <input type="tel" name="Phone" className="form-control  p-2" value={phone} onChange={(e) => setPhone(e.target.value)}  />
         Experiance:
         <textarea type="text" name="Experiance" className="form-control  p-2" value={experiance} onChange={(e) => setExperiance(e.target.value)} />
         Address:
         <input type="text" name="Address" className="form-control  p-2" value={address} onChange={(e) => setAddress(e.target.value)}  />
         <button type="submit" class="btn btn-primary m-1" onClick={buttonsubmit}>Submit</button>
     </form>
   </div>
  )
}



export default Forms

