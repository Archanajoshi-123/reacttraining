 
import { useState } from 'react';
import './Task4.css'
import { useNavigate } from 'react-router-dom';

function Task4() {

    const [h1, setH1] = useState("");
    const [h2, setH2] = useState("");
    const [h3, setH3] = useState("");
    const [cards, setCards] = useState([]);
    const [image,setImage]=useState("")
const navigate=useNavigate();
    const image2=(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    function handleChangeH1(e) {
        setH1(e.target.value);
    }

    function handleChangeH2(e) {
        setH2(e.target.value);
    }

    function handleChangeH3(e) {
        setH3(e.target.value);
    }

    function handleClick() {
        setCards([...cards, {image, h1, h2, h3 }]);
        setImage("");
        setH1("");
        setH2("");
        setH3("");
        navigate('/hi')
    }

    return (
        <>
            <div>
                <input type="file" onChange={image2}/>
                <input type="text" placeholder="Enter text 1" value={h1} onChange={handleChangeH1} />
                <input type="text" placeholder="Enter text 2" value={h2} onChange={handleChangeH2} />
                <input type="text" placeholder="Enter text 3" value={h3} onChange={handleChangeH3} />
                <button onClick={handleClick}>Add to Card</button>
            </div>

            <div className='flex'>
                {cards.map((e) => (
                    <div className='card'  >
                        {/* <img className="img" src="https://instedia.com/images/courses/html-image.webp"  /> */}
                        <img src={e.image} alt="loading" width="350px"/>
                        <p>{e.h1}</p>
                        <p>{e.h2}</p>
                        <p>{e.h3}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Task4;







// import { useState } from 'react';
// import './Task4.css';

// function Task4() {
//     const [first, setFirst] = useState("");
//     const [last, setLast] = useState("");
//     const [designation, setDesignation] = useState("");
//     const [value, setValue] = useState([]);

//     function handleFirstChange(e) {
//         setFirst(e.target.value);
//     }

//     function handleLastChange(e) {
//         setLast(e.target.value);
//     }

//     function handleDesignationChange(e) {
//         setDesignation(e.target.value);
//     }

//     function handleClick() {
//         setValue([...value, { first, last, designation }]);
//         setFirst("");
//         setLast("");
//         setDesignation("");
//     }

//     // const enabled = first && last && designation;

//     return (
//         <>
//             <div>
//                 <input type="text" placeholder="Enter text 1" value={first} onChange={handleFirstChange} />
//                 <input type="text" placeholder="Enter text 2" value={last} onChange={handleLastChange} />
//                 <input type="text" placeholder="Enter text 3" value={designation} onChange={handleDesignationChange} />
//                 {/* <button onClick={handleClick} disabled={!enabled}>Add</button> */}
//                     <button onClick={handleClick} disabled={!first||!last||!designation}>Add</button>
//             </div>

//             <table border={10} >
           
//                     <tr>
//                         <th>First</th>
//                         <th>Last</th>
//                         <th>Designation</th>
//                     </tr>
              
//                     {value.map((e) => (
//                         <tr key={e}>
//                             <td>{e.first}</td>
//                             <td>{e.last}</td>
//                             <td>{e.designation}</td>
//                         </tr>
//                     ))}
               
//             </table>
//         </>
//     );
// }

// export default Task4;

