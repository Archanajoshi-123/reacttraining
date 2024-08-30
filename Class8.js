import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Class11 from "./Class11";

function Class8() {
    const [btn, setBtn] = useState(["Pending,Success"])
    const [text, setText] = useState("pending")
    const navigate=useNavigate();
    function Btn(e) {
        setText(text === "pending" ? "success" : "pending");
        navigate('about');
    }



    return (
        <>
            <button onClick={Btn}>submit</button>
            {text}


        </>
    )
}
export default Class8;

