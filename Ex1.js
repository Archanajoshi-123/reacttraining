import { useEffect, useState } from "react";
import "./Ex1.css";

function UseState() {
    const [value, setValue] = useState("Something");
    useEffect(() => {
        setValue("Anything");
    }, [])
    return (
        <>
            <div>
                <p>UseState {value} </p>
            </div>




            
        </>
    )
}
export default UseState;