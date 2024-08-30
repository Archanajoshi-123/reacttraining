import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Test(){

    const [msg, setMsg] = useState(" ");

    const[con,setCon]=useState(" ")
    const[con1,setCon1]=useState(" ")

    const [lastname, setLastname] = useState(" ");
    const [last, setLast] = useState(" ")

    const [age, setAge] = useState(" ");
    const [ages, setAges] = useState(" ")

    const [firstname, setFirstname] = useState(" ");
    const [first, setFirst] = useState(" ")

    const [description, setDescription] = useState(" ");
    const [desc, setDesc] = useState(" ")
   
    const navigate=useNavigate();


     function Contacts(e){
        setCon(e.target.con);
        setCon1(" ");
     }

    function Lastname(e) {
        setLastname(e.target.lastname);
        setLast(" ");
    }

    function Age(e) {
        setAge(e.target.age);
        setAges(" ");
    }
    function Firstname(e) {
        setFirstname(e.target.firstname);
        setFirst(" ");
    }
    function Description(e) {
        setDescription(e.target.description);
        setDesc(" ");
    }

    function handleClick() {
          if(con === " "){
            setCon1("Please fill the Mobile")
          }

        if (lastname === " ") {
            setLast("Please fill the Lastname")
        }
        if (age === " ") {
            setAges("Please fill the Age")
        }
        if (firstname === " ") {
            setFirst("Please fill the Firstname")
        }
        if (description === " ") {
            setDesc("Please fill the Description")
        } 
    if (con === " " || lastname === " " || age === " " || firstname === " " || description === " " ){
        setMsg(" ");
    }

        else {
            setMsg("Submitted");
        }
    }
   navigate('hello')

    return  (
        <>
            <div>

            <input type="text" placeholder="Enter your Mobilenumber" onChange={Contacts} />
         <p>{con1}</p>
            <input type='text' placeholder='Enter your Lastname' onChange={Lastname} />
            <p>{last}</p>
            <input type='age' placeholder='Enter your age' onChange={Age} />
            <p>{ages}</p>
            <input type='text' placeholder='Enter your First name' onChange={Firstname} />
            <p>{first}</p>
            <input type='text' placeholder='Enter your description' onChange={Description} />
            <p>{desc}</p>


            <button onClick={handleClick}>submit</button>
            {msg}
            </div>

        
        </>
    )
}
export default Test;