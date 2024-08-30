const Child=(props)=>{
    const data="Hello this is child";
    const fun= {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
              "menuitem": [
                {"value": "New", "onclick": "CreateNewDoc()"},
                {"value": "Open", "onclick": "OpenDoc()"},
                {"value": "Close", "onclick": "CloseDoc()"}
              ]
            }
          }}



    props.sendBack1(data);
    props.sendBack2(fun);
    return(
        <>


        
        </>
    )
}
export default Child;



// function Child(props){


// return(
//   <>
//     <table border={6}>
//       <tr>

//         <th>Name</th>
//         <th>Place</th>
//         <th>Gender</th>

//       </tr>
//   {props.Hello.map((e,index)=>(
//     <>
//     <tr>
//       <td>{index+1}</td>
//       <td>{e.name}</td>
//       <td>{e.place}</td>
//       <td>{e.gender}</td>
//     </tr>
//     </>
//   ))}
//     </table>

// </>



// )
  
// }
// export default Child;