// import { useState } from "react";

// function I2() {
//     const [name, setName] = useState("");
//     const [place, setPlace] = useState("");
//     const [name1, setName1] = useState("");
//     const [place1, setPlace1] = useState("");
//     const [msg, setMsg] = useState("");
//     const [submittedData, setSubmittedData] = useState([]);

//     function Name(e) {
//         setName(e.target.value);
//         setName1("");
//     }

//     function Place(e) {
//         setPlace(e.target.value);
//         setPlace1("");
//     }

//     function handleClick() {
//         if (name === "") {
//             setName1("Please enter your name");
//         }
//         if (place === "") {
//             setPlace1("Please enter your place");
//         }
//         if (name === "" || place === "") {
//             setMsg("");
//         } else {
//             setMsg("Submitted");
//             setSubmittedData((prevData) => [...prevData, { name, place }]);
//             setName(""); // Clear input fields
//             setPlace("");
//         }
//     }

//     function handleDelete() {
//         setSubmittedData([]);
//     }

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 onChange={Name}
//                 value={name}
//             />
//             {name1}
//             <input
//                 type="text"
//                 placeholder="Enter your Place"
//                 onChange={Place}
//                 value={place}
//             />
//             {place1}
//             <button onClick={handleClick}>Submit</button>
//             {msg}
//             <button onClick={handleDelete}>Delete</button>
//             <button>Edit</button>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Place</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {submittedData.map((data, index) => (
//                         <tr key={index}>
//                             <td>{data.name}</td>
//                             <td>{data.place}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// export default I2;


import { useState } from "react";

function Task8() {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [name1, setName1] = useState("");
    const [place1, setPlace1] = useState("");
    const [msg, setMsg] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function Name(e) {
        setName(e.target.value);
        setName1("");
    }

    function Place(e) {
        setPlace(e.target.value);
        setPlace1("");
    }

    function handleClick() {
        if (name === "") {
            setName1("Please enter your name");
        }
        if (place === "") {
            setPlace1("Please enter your place");
        }
        if (name === "" || place === "") {
            setMsg("");
        } else {
            setMsg("Submitted");

            if (editIndex !== null) {
                setSubmittedData((prevData) =>prevData.map((item, index) =>index === editIndex ? { name, place } : item));
                setEditIndex(null);
            } 
            else {
            setSubmittedData((prevData) => [...prevData, { name, place }]);
            setName(""); 
            setPlace("");
        }
    }
        
    }

    function handleDelete(index) {
        setSubmittedData((prevData) => prevData.filter((_,i) => i !== index));
    }

    function handleEdit(index) {
        const record = submittedData[index];
        setName(record.name);
        setPlace(record.place);
        setEditIndex(index);
    }

    return (
        <>
            <input type="text" placeholder="Enter your Name"onChange={Name} value={name}/>
            {name1}
            <input type="text"placeholder="Enter your Place"onChange={Place}value={place}/>
            {place1}
            <button onClick={handleClick}>
            {editIndex !== null ? "Update" : "Submit"}
            </button>
            {msg}

            <table border={1}>
                    <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Action</th>
                    </tr>
             
                    {submittedData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.place}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>  Edit</button>
                                  
                                <button onClick={() => handleDelete(index)}> Delete </button>
                               
                            
                            </td>
                        </tr>
                    ))}
            
            </table>
        </>
    );
}

export default Task8;

