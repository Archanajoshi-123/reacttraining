function Task10c({ data, handleDelete, handleEdit }) {
    return (
        <table>
      
                <tr>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Actions</th>
                </tr>
           
      
                {data.map((item, index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.place}</td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                    </tr>
                ))}
         
        </table>
    );
}

export default Task10c;
