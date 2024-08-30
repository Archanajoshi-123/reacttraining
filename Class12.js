// import { useEffect, useState } from 'react';

// import React, { useState, useEffect } from 'react';

// const Class12 = () => {
//     const [fname, setFname] = useState("Navin");
    // const [designation, setDesignation] = useState("");
    // const [role, setRole] = useState("");
    // const [empid, setEmpid] = useState("");
    // const [editIndex, setEditIndex] = useState(null);
    // const [data, setData] = useState([]);

//     const initialValues = [
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         },
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         },
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         },
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         },
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         },
//         {
//             name: "nav",
//             designation: 'SE',
//             role: 'Emp',
//             EmpId: 234
//         }
//     ];

//     useEffect(() => {
//         setFname('Sravan');
//         setData(initialValues);
//     }, []);

//     const handleSubmit = () => {
//         if (editIndex !== null) {
//             const updatedData = [...data];
//             updatedData[editIndex] = { name: fname, designation, role, EmpId: empid };
//             setData(updatedData);
//             setEditIndex(null);
//         } else {
//             setData([...data, { name: fname, designation, role, EmpId: empid }]);
//         }
//         setFname('');
//         setDesignation('');
//         setRole('');
//         setEmpid('');
//     }

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         setFname(data[index].name);
//         setDesignation(data[index].designation);
//         setRole(data[index].role);
//         setEmpid(data[index].EmpId);
//     }

//     const handleDelete = (index) => {
//         const newData = data.filter((_, i) => i !== index);
//         setData(newData);
//     }

//     return (
//         <>
//             UseEffect
//             <br></br>
//             <input placeholder="Name" value={fname} onChange={(e) => setFname(e.target.value)} />
//             <input placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
//             <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
//             <input placeholder="EmpId" value={empid} onChange={(e) => setEmpid(e.target.value)} />
//             <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Submit"}</button>
        
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Designation</th>
//                         <th>Role</th>
//                         <th>EmpId</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((e, index) => (
//                         <tr key={index}>
//                             <td>{e.name}</td>
//                             <td>{e.designation}</td>
//                             <td>{e.role}</td>
//                             <td>{e.EmpId}</td>
//                             <td><button onClick={() => handleEdit(index)}>Edit</button></td>
//                             <td><button onClick={() => handleDelete(index)}>Delete</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Class12;


// import { useEffect, useState } from 'react';

// const Class12 = () => {

//     const [data, setData] = useState(values);
//     const [name, setName] = useState("");
//     const [designation, setDesignation] = useState("");
//     const [role, setRole] = useState("");
//     const [empId, setEmpId] = useState("");
//     const [editIndex, setEditIndex] = useState(-1);

//     useEffect(() => {
     
//         console.log(data);
        
//     }, [data]);



//     const handleSubmit = () => {
//         if (editIndex === -1) {
//             setData([...data, { name, designation, role, empId }]);
//         } else {
//             const updatedData = [...data];
//             updatedData[editIndex] = { name, designation, role, empId };
//             setData(updatedData);
//             setEditIndex();
//         }
//         setName("");
//         setDesignation("");
//         setRole("");
//         setEmpId("");
//     }

//     const handleDelete = (index) => {
//         setData(data.filter((_, ind) => ind !== index));
//     }

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         setName(data[index].name);
//         setDesignation(data[index].designation);
//         setRole(data[index].role);
//         setEmpId(data[index].empId);
//     }

//     return (
//         <>
//             <h4>UseEffect</h4>
//             <input type='text' placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} value={name} />
//             <input type='text' placeholder="Enter your Designation" onChange={(e) => setDesignation(e.target.value)} value={designation} />
//             <input type='text' placeholder="Enter your Role" onChange={(e) => setRole(e.target.value)} value={role} />
//             <input type='text' placeholder="Enter your EmpId" onChange={(e) => setEmpId(e.target.value)} value={empId} />
//             <button onClick={handleSubmit}>{editIndex === -1 ? "Submit" : "Update"}</button>

//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Designation</th>
//                         <th>Role</th>
//                         <th>EmpId</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((e, index) => (
//                         <tr key={index}>
//                             <td>{e.name}</td>
//                             <td>{e.designation}</td>
//                             <td>{e.role}</td>
//                             <td>{e.empId}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(index)}>Edit</button>
//                                 <button onClick={() => handleDelete(index)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// const values = [
//     {
//         name: "nav",
//         designation: 'SE',
//         role: 'Emp',
//         empId: 234
//     },
//     {
//         name: "sai",
//         designation: 'SE',
//         role: 'Emp',
//         empId: 235
//     },
//     {
//         name: "nav",
//         designation: 'SE',
//         role: 'Emp',
//         empId: 236
//     },
//     {
//         name: "nav",
//         designation: 'Tester',
//         role: 'Emp',
//         empId: 237
//     },
//     {
//         name: "sam",
//         designation: 'SE',
//         role: 'Emp',
//         empId: 238
//     },
//     {
//         name: "ram",
//         designation: 'TL',
//         role: 'Emp',
//         empId: 239
//     }
// ];
// export default Class12;
// import {useEffect, useState} from 'react';

//  const Class12=()=>{
//     const [fname , setFname] = useState("Navin")
//     const [submitBtn , setSubmitBtn] = useState("Navin")
//     const [data , setData] = useState();
//     const [fakeData , setFakeData] = useState([])
//     useEffect(()=>{
//         setFname('Sravan');
//         setData(values);
//         console.log(fname);
//         fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then(json=>setFakeData(json));
//     },[submitBtn]);

//     const handleSubmit=()=>{
//         setSubmitBtn(fname)
//     }
//     return(
//         <>
//             UseEffect
//             <br></br>
//             <input onChange={(e) => setFname(e.target.value)} />

//             {fname}
//             <button onClick={() => handleSubmit()}>Submit</button>
//             {fakeData.map((el)=>{
//                 return(
//                 <div>
//                     <span>{el.id}</span>
//                     <h3>
//                         {el.title}
//                     </h3>
//                     <p>
//                         {el.description}
//                     </p>
//                     <p>
//                         {el.price}
//                     </p>
//                     <p>
//                         {el.category}
//                     </p>
//                     <img src={el.image} width={100}/>
//                 </div>)})}
//         </>
//     )
// }


//  const values =[
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     },
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     },
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     },
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     },
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     },
//     {
//         name:"nav",
//         designation:'SE',
//         role:'Emp',
//         EmpId:234
//     }
// ]
// export default Class12;
import axios from 'axios';
import { useEffect, useState } from 'react';

const Class12 = () => {
    const [fname, setFname] = useState("AJ");
    const [submitBtn, setSubmitBtn] = useState("AJ");
    const [data, setData] = useState([]);
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        setFname('Archana');
        setData(values);
        console.log(fname);
        // fetch('https://fakestoreapi.com/products').then((res) => res.json()).then(json => setFakeData(json));}, [submitBtn]);
        axios.get('https://fakestoreapi.com/products').then(json => setFakeData(json.data));}, [submitBtn]);




    const handleSubmit = () => {
        setSubmitBtn(fname);
    };

    return (
        <>
            <h4>UseEffect</h4>
            <input onChange={(e) => setFname(e.target.value)} />
            <p>{fname}</p>
            <button onClick={() => handleSubmit()}>Submit</button>
            <div style={{ display: 'grid',gridTemplateColumns:"3fr 3fr 3fr 3fr",  gap: '20px',justifyContent:"center"}}>
                {fakeData.map((el) => {
                    return (
                        <div style={{ 
                            border: '1px', 
                            padding: '20px', 
                            width: '90%', 
                            backgroundColor: '#f9f9f9', 
                            borderRadius: '10px', 
                            textAlign: 'center',
                            marginLeft:"20px"

                        }}>
                            <img src={el.image} style={{ width: '150px', height: '150px' }} />
                            <h3 style={{ fontSize: '16px' }}>{el.title}</h3>
                            <p style={{  fontSize: '14px' }}>{el.description}</p>
                            <p style={{  fontSize: '14px' }}>Price: ${el.price}</p>
                            <p style={{  fontSize: '14px' }}>Category: {el.category}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const values = [
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    }
];

export default Class12;



