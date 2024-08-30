import { useState } from 'react'
import './Class1.css'

function UseState() {
    const [value, setValue] = useState("blue");
    const [text, setText] = useState(" we Learning")
    const [count, setCount] = useState(0)
    function handleChange(e) {
        setValue("red");
        setText("Want Learn")
    }
    function changeEvent(e) {
        setValue(e.target.value)
    }
    function Submit(e) {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <p className={value == 'red' ? 'redclass' : "blueclass"}> UseState {value}</p>
                <button onClick={handleChange}>Submit</button>
                <p>
                    {text}
                    Welcome to Enormous!
                </p>

               
                <p><input type="text" onChange={changeEvent} /></p>
                <button onClick={Submit}>Submit</button>
                {count}
             
            </div>
        </>
    )
}
export default UseState;






