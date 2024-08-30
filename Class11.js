import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Class11 = () => {
    const[fname,setFname]=useState("AJ");
    // const[lname,setLname]=useState("HI")
    const[subbtn,setSubbtn]=useState("");
 
    useEffect(()=>{
    // setFname("Archana")
    console.log(fname)
    },[subbtn]);
  return (
    <div>
        UseEffect
        <br></br>
       <input onChange={(e)=>setFname(e.target.value)}/><br></br>
     
       {/* <input onChange={(e)=>setLname(e.target.value)}/><br></br> */}
       


     {/* {fname}<br></br> */}
     {/* {lname}<br></br> */}
{/* <button onClick={()=>setSubbtn(fname,lname)}>Submit</button> */}
<button onClick={()=>setSubbtn(fname)}>edit</button>

{subbtn}
    </div>
  );
};

export default Class11;