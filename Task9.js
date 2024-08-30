

// import { useState } from "react";

// function Task9() {
//     const [name, setName] = useState("");
//     const [place, setPlace] = useState("");
//     const [data, setData] = useState([]);
//     const [editIndex, setEditIndex] = useState();

//     function Name(e) {
//         setName(e.target.value);
//     }

//     function Place(e) {
//         setPlace(e.target.value);
//     }

//     function handleClick() {
//         setData([...data, { name, place }]);
//         setName("")
//         setPlace("")
//     }

//     function handleDelete(index) {
//         const newData = [...data];
//         newData.splice(index,1);
//         setData(newData);
//     }

//     function handleEdit(index) {
//         setName(data.name);
//         setPlace(data.place);
//     }

//     function handleUpdated(index) {
//         const updatedData = [...data];
//         updatedData.index();
//         setData(updatedData);   
//     }

//     return (
//         <>
//             <input type="text" placeholder="Enter your Name" onChange={Name} value={name} />
//             <input type="text" placeholder="Enter your Place" onChange={Place} value={place} />
//             <button onClick={handleClick}  >Submit</button>
//             <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>Place</th>
//                         <th>Actions</th>
//                     </tr>
//                     {data.map((item,index) => (
//                         editIndex === index? (
//                             <tr><td><button onClick={handleUpdated} >Update</button></td></tr>) : 
//                             (<tr>
//                                 <td>{item.name}</td>
//                                 <td>{item.place}</td>
//                                 <td><button onClick={ handleDelete(index)} >Delete</button></td>
//                                 <td><button onClick={ handleEdit(index)} >Edit</button></td>
//                             </tr>
//                         )
//                     ))}
               
//             </table>
//         </>
//     );
// };
// export default Task9;
import { useState } from "react";

function Task9() {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function Name(e) {
        setName(e.target.value);
    }

    function Place(e) {
        setPlace(e.target.value);
    }

    function handleClick() {
        if (editIndex !== null) {
            const updatedData = [...data];
            updatedData[editIndex] = { name, place };
            setData(updatedData);
            setEditIndex(null);
        } else {
            setData([...data, { name, place }]);
        }
        setName("");
        setPlace("");
    }

    function handleDelete(index) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    function handleEdit(index) {
        setName(data[index].name);
        setPlace(data[index].place);
        setEditIndex(index);
    }

    return (
        <>
            <input type="text" placeholder="Enter your Name" onChange={Name} value={name} />
            <input type="text" placeholder="Enter your Place" onChange={Place} value={place} />
            <button onClick={handleClick}>{editIndex !== null ? "Update" : "Submit"}</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.place}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Task9;
