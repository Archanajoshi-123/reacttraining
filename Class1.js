import { useState } from 'react'
import './Class1.css'
import { useNavigate } from 'react-router-dom';

function UseState(){
    const [value,setValue]=useState("blue");
    const [text,setText]=useState(" we Learning")
    const navigate=useNavigate();
    function handleChange(){
        setValue("red");
        setText("Want Learn")
        navigate('/oh')
    }
return(
    <>
<div>
<p className={value=='red' ?'redclass':"blueclass"}> UseState {value}</p>
<button onClick={handleChange}>Submit</button>
<p>
    {text}
       Welcome to Enormous!
       {text}
       {text}
</p>

</div>
</>
)
}
export default UseState;


// axios.get('https://fakestoreapi.com/products').then(json => setFakeData(json.data));}, [submitBtn]);