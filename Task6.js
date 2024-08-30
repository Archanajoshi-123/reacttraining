
import { useState } from "react";
import Child1 from "./Child1";
import './Task6.css';

function Task6() {
    const [data, setData] = useState([]);

    const handleGetData = (e) => {
        setData((value) => [...value, e]);
    };

    return (
        <div>
            <Child1 sendBack={handleGetData} />

            
                {data.map((e) => (
                    <div className="card" >
                        <p>Name:{e.name}</p>
                        <p>Place: {e.place}</p>
                        <p>Gender: {e.gender}</p>
                    </div>
                ))}
            </div>
       
    );
}

export default Task6;
