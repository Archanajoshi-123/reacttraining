import { useState } from "react";
import Task10c from "./Task10c";

function Task10p() {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePlaceChange(e) {
        setPlace(e.target.value);
    }

    function handleSubmit() {
        if (editIndex === -1) {
            setData([...data, { name, place }]);
        } else {
            const updatedData = [...data];
            updatedData[editIndex] = { name, place };
            setData(updatedData);
            setEditIndex(-1);
        }
        setName("");
        setPlace("");
    }

    // function handleDelete(index) {
    //     const newData = [...data];
    //     newData.splice(index, 1);
    //     setData(newData);
    // }

    function handleDelete(index) {
        const newData = [...data];
        data.filter((I,ind)=>ind!==index)
        setData(data.filter((I,ind)=>ind!==index));
    }



    function handleEdit(index) {
        setEditIndex(index);
        setName(data[index].name);
        setPlace(data[index].place);
    }

    return (
        <>
            <input type="text" placeholder="Enter your Name" onChange={handleNameChange} value={name} />
            <input type="text" placeholder="Enter your Place" onChange={handlePlaceChange} value={place} />
            <button onClick={handleSubmit}>{editIndex === -1 ? "Submit" : "Update"}</button>
            <Task10c data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
        </>
    );
}

export default Task10p;
