// import './Class1.css'

//     const Class5=(props)=>{
//     const data="Hello this is child"
//     return(
//     <>
// {data}<br></br>
// {props.value}
//     </>

//     )
// }

// export default Class5;

// const Class5=(props)=>{
    // const fun= {
    //     "menu": {
    //         "id": "file",
    //         "value": "File",
    //         "popup": {
    //           "menuitem": [
    //             {"value": "New", "onclick": "CreateNewDoc()"},
    //             {"value": "Open", "onclick": "OpenDoc()"},
    //             {"value": "Close", "onclick": "CloseDoc()"}
    //           ]
    //         }
    //       }}
//     return(

// <>
//     {fun.menu.popup.menuitem.map((el)=>(
//             <>
//             <p>value:{el['value']}</p>
//             <p>value:{el['onclick']}</p>
//             </>



//     ))}


//       {props.employer.name}<br></br>
//       {props.employer.designation}<br></br>
//       {props.hi.menu.items.map((e)=>(
//         <>
//           {e['id']}<br>\
          
          
          
          
          
//           </br>
//         </>
//       ))}


// </>
 


// )
    
// }
// export default Class5;




// import { useState } from 'react'
// import Child from './Child'
// const Class5 =(props)=>{
//     const[clddata,setClddata]= useState("");
//     function handleGetData(e){
//         setClddata(e)
//     }
//     return (
//         <>

//         <Child sendBack={handleGetData}/>
//         {clddata}<br></br>
//         {props.value}<br></br>
//         {props.employer.name}<br></br>
//         {props.employer.designation}



//         </>
       
//     )
// }
// export default Class5;


import { useState } from "react";
import Child  from "./Child";
function Class5(e){
const[clddata1,setClddata1] = useState("");
const[clddata2,setClddata2]= useState();

const handleGetData =(e)=>{
    setClddata1(e);
};
const handleGetData1=(f)=>{
    setClddata2(f);
    console.log(f);
}


return(
<div>

<p>First:{clddata1}</p> 
<p>Second:{clddata2?.menu?.id}</p>

   <Child sendBack1={handleGetData} sendBack2={handleGetData1}/>

   </div>
   
)
}
export default Class5;