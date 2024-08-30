import { useEffect, useState } from "react";
import "./Ex3.css";

function UseState() {
    const [value, setValue] = useState("lightgreen");
    // useEffect(()=>{
    //     setValue("red");
    // },[])
    return (

        <>
            <div>
                <p>UseState {value}</p>
                <h1><span style={{ color: value }}>Lorem Ipsum is simply dummy </span>text of the printing and typesetting industry. </h1>


                <h2>
                    <span style={{ color: value }}>Lorem Ipsum is not simply random text.</span> It has roots in a piece of classical Latin words.

                </h2>

                <h3 className={value == 'blue' ? 'blueclass' : "redclass"} >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </h3 >

                <h4>
                    There are many variations of <span style={{color:value}}>{value}</span>  passages of Lorem Ipsum available, but the majority havesuffered alteration useEffect {value}
                </h4>

                <p>
                    Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>

            </div>
        </>
    )
}
export default UseState;
