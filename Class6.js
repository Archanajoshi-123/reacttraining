// import { useState  } from "react"
// import Child1 from "./Child1";


// function Class6(){



//     const[name,setName] =useState("");
//     const[place,setPlace]=useState("");
//     const[gender,setGender]=useState("");
//     const[value,setValue] =useState([]);

    
    
//         function Name(e){
//             setName(e.target.value)
//           }
        
//           function Place(e){
//             setPlace(e.target.value)
//           }
        
//           function Gender(e){
//             setGender(e.target.value)
//           }
        
//          function handleclick(){
//         const newValue={name,place,gender};
//          setValue(value=>[...value,newValue]);

      
//             setName("");
//             setPlace("");
//             setGender("");

//         }
//     return(
//         <>
//         <input type="text" placeholder="Enter your name" onChange={Name} value={name} />
//         <input type="text" placeholder="Enter your place" onChange={Place} value={place}/>
//         <input type="text" placeholder="Enter your gender" onChange={Gender} value={gender}/>
//         <button onClick={handleclick}>Submit</button>

    
//         <Child1 Hello={value}/>
//        </>
//     )

// }
// export default Class6;



import { useState } from "react";
import Child1 from "./Child1";

function Class6() {
    const [value, setValue] = useState([]);

    const handleDataFromChild = (data) => {
        setValue((prevValue) => [...prevValue, data]);
    };

    return (
        <>
            <Child1 sendBack={handleDataFromChild} />
            <table>
<th>Name</th>
<th>Place</th>
<th>Gender</th>


                {value.map((e) => (
                    <tr>
              
                    <td>{e.name} </td>
                     <td>{e.place} </td>
                     <td>{e.gender}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default Class6;
