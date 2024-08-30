import { useState } from "react"
import "./Class1task2.css"
function UseState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [count, setCount] = useState("0")
    const [colour, setColour] = useState("")

    function Name(e) {
        setName(e.target.value)
    }
    function Email(e) {
        setEmail(e.target.value)
    }
    function Colour(e) {
        setColour(e.target.value)
    }
    function Add() {
        setCount(count + 1)
    }
    function Sub() {
        setCount(count - 1)
    }


    return (
        <>

            <div>
                <button onClick={Sub}>-</button> {count}<button onClick={Add}>+</button><br></br>

               <input style={{color:colour}} type="text" placeholder="Enter your name" onChange={Name } /> 

                <input style={{color:colour}}  type="email"  placeholder="Enter your Email" onChange={Email}/> 
               
                <input type="text" placeholder="Colour" value={colour} onChange={Colour}/>

<div style={{color:colour}}>
    {name}
    <br></br>
    {email}

</div>
               
            </div>

        </>
    )


}
export default UseState;

