import { useState } from "react";
import './Ex4.css';
function UseState(){
    const [value,setValue]=useState("red");
    return(
        <>
<div >
 <div className="f1">  
<form  className="form ">
   <div className="f1 ">
    <div >
        <h4 >
           <span style={{color:value}}> Hi,</span>Welcome on Board!
        </h4>
<h4 className={value=='green'?'greenclass':"blueclass"}>
    What You are up to?
</h4>

<img className="img" src="https://t4.ftcdn.net/jpg/04/35/70/65/360_F_435706578_iKt4EF7w3xv3ajxb1AG0ZDe30OEztaXS.jpg"/>

<div>

<button  className="b"    style={{color:value}}>Welcome</button>
</div>



    </div>



    </div> 

</form>
</div> 


    










</div>


        </>

    )
}
export default UseState;