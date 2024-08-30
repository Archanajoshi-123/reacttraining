import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test5 = () => {
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

                            <div>


                            </div> 



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

export default Test5;
