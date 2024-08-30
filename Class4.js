import { useState } from "react";

function Class4(){

// const[no,setNo]=useState("");
const[first,setFirst]=useState("");
const[last,setLast]=useState("");
const[designation,setDesignation]=useState("");
const[emp,setEmp]=useState("");
const[value,setValue]=useState([]);
const[count,setCount]=useState(1)

// function No(e){
//     setNo(e.target.value);
// }
function First(e){
setFirst(e.target.value);
}

function Last(e){
setLast(e.target.value);
}
function Designation(e){
setDesignation(e.target.value);
}
function Emp(e){
setEmp(e.target.value);
}
function handleClick(){
const newValue={no:count,first,last,designation,emp};
setValue(value=>[...value,newValue]);
// setNo("");
setFirst("");
setLast("");
setDesignation("");
setEmp("");
setCount(count+1);
  

}

    return(
        <>
    
        {/* <input type="number" placeholder="Sl.No" onChange={No}/>   */}
        <input type="text" placeholder="Enter your firstname" onChange={First} />
        <input type="text" placeholder="Enter your lastname" onChange={Last}/>
        <input type="text" placeholder="Enter your designation" onChange={Designation}/>
        <input type="text" placeholder="Enter your employer" onChange={Emp} />
        <button onClick={handleClick}>Add</button>
        <table>
            <tr>
                
                    <th>Sl.No</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Designation</th>
                    <th>Employer</th>

            </tr>

            {value.map((el)=>(
                   
                       <tr>
                     
                      <td>{el.no}</td>
                       <td>{el.first}</td>
                       <td>{el.last}</td>
                       <td>{el.designation}</td>
                       <td>{el.emp}</td>
                       
              
                       </tr>
                    

                ))}
           







           
        </table>
      
     
        </>
    )
}
export default Class4;