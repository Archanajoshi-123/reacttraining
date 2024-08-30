// function Foreach(){
//     const text= {
//         "menu": {
//         "header": "SVG Viewer",
//         "items": [
//             {"id": "Open"},
//             {"id": "OpenNew", "label": "Open New"},
//             {"id": "ZoomIn", "label": "Zoom In"},
//             {"id": "ZoomOut", "label": "Zoom Out"},
//             {"id": "OriginalView", "label": "Original View"},
//             {"id": "Quality"},
//             {"id": "Pause"},
//             {"id": "Mute"},
//             {"id": "Find", "label": "Find..."},
//             {"id": "FindAgain", "label": "Find Again"},
//             {"id": "Copy"},
//             {"id": "CopyAgain", "label": "Copy Again"},
//             {"id": "CopySVG", "label": "Copy SVG"},
//             {"id": "ViewSVG", "label": "View SVG"},
//             {"id": "ViewSource", "label": "View Source"},
//             {"id": "SaveAs", "label": "Save As"},
//             {"id": "Help"},
//             {"id": "About", "label": "About Adobe CVG Viewer..."}
//         ]
//     }}
//     return(
//         <>

//         {text.menu.items.map((el)=>(
//             <ul>
//             <li>id:{el['id']}</li>
//             </ul>
//         ))}

//         <>

//         {text.menu.items.forEach((el)=>(
//             <>
//             <p>id:{el['id']}</p>
//             </>
//         ))}

//         </>

//     </>


//   )  
// }
// export default Foreach;


// function Foreach(){

//     const fun= {
//         "menu": {
//             "id": "file",
//             "value": "File",
//             "popup": {
//               "menuitem": [
//                 {"value": "New", "onclick": "CreateNewDoc()"},
//                 {"value": "Open", "onclick": "OpenDoc()"},
//                 {"value": "Close", "onclick": "CloseDoc()"}
//               ]
//             }
//           }}
//     return(
//     <>
// {fun.menu.popup.menuitem.map((el)=>
// (
//     <>
//     <p>{el['value']}</p>
//     </>
// ))}

// <>
// {fun.menu.popup.menuitem.forEach((el)=>
// (
//     <>
//     <p>{el['value']}</p>
//     </>
// ))}
// </>



//         </>
//     )
// }
// export default Foreach;


// function Foreach(){
//     const example = {
//         "web-app": {
//             "servlet": [
//                 {
//                     "servlet-name": "cofaxCDS",
//                     "servlet-class": "org.cofax.cds.CDSServlet",
//                     "init-param": {
//                         "cachePagesDirtyRead": 10,
//                         "searchEngineListTemplate": "forSearchEnginesList.htm",
//                         "searchEngineFileTemplate": "forSearchEngines.htm",
//                         "dataStoreInitConns": 10,
//                         "dataStoreMaxConns": 100,
//                         "dataStoreConnUsageLimit": 100,
//                         "dataStoreLogLevel": "debug",
//                         "maxUrlLength": 500
//                     }
//                 },
//                 {
//                     "servlet-name": "cofaxEmail",
//                     "servlet-class": "org.cofax.cds.EmailServlet",
//                     "init-param": {
//                         "mailHost": "mail1",
//                         "mailHostOverride": "mail2"
//                     }
//                 },
//                 {
//                     "servlet-name": "cofaxAdmin",
//                     "servlet-class": "org.cofax.cds.AdminServlet"
//                 },

//                 {
//                     "servlet-name": "fileServlet",
//                     "servlet-class": "org.cofax.cds.FileServlet"
//                 },
//                 {
//                     "servlet-name": "cofaxTools",
//                     "servlet-class": "org.cofax.cms.CofaxToolsServlet",
//                     "init-param": {
//                         "log": 1,
//                         "adminGroupID": 4,
//                     }
//                 }],
//             "servlet-mapping": {
//                 "cofaxCDS": "/",
//                 "cofaxEmail": "aemail",
//                 "cofaxAdmin": "/admin",
//                 "fileServlet": "static",
//                 "cofaxTools": "tools"
//             },

//             "taglib": {
//                 "taglib-uri": "cofax.tld",
//                 "taglib-location": "/WEB-INF/tlds/cofax.tld"
//             }
//         }
//     }
//     return(
//         <>
// {example["web-app"].servlet.map((el)=>
// (
//     <>
//    <p>name:{el['servlet-name']}</p>
//    <p>class:{el['servlet-class']}</p>
//     </>
// )
// )}
// <>
// {example["web-app"].servlet.forEach((el)=>
// (
//     <>   
//   <p>name:{el['servlet-name']}</p>
//   <p>class:{el['servlet-class']}</p>
//     </>
// ))}
// </>
// </>
//     )
// }
// export default Foreach;



// function Foreach() {
//     const glossary = {
//         "title": "example glossary",
//         "GlossDiv": {
//             "title": "S",
//             "GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
//                     "SortAs": "SGML",
//                     "GlossTerm": "Standard Generalized Markup Language",
//                     "Acronym": "SGML",
//                     "Abbrev": "ISO 8879:1986",
//                     "GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
//                         "GlossSeeAlso": ["GML", "XML"]
//                     },
//                     "GlossSee": "markup"
//                 }
//             }
//         }
//     }
//     return (
//         <>
//             {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.map((el) =>
//             (
//                 <ul>
//                     <li>{el}</li>
//                 </ul>
//             ))}

//             <>
//                 {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.forEach((el) =>
//                 (
//                     <ul>
//                         <li>{el}</li>
//                     </ul>
//                 ))}
//             </>
//         </>
//     )
// }
// export default Foreach;

// function Foreach(){

//     const json  ={
//         "problems": [{
//             "Diabetes":[{
//                 "medications":[{
//                     "medicationsClasses":[{
//                         "className":[{
//                             "associatedDrug":[{
//                                 "name":"asprin",
//                                 "dose":"",
//                                 "strength":"500 mg"
//                             }],
//                             "associatedDrug#2":[{
//                                 "name":"somethingElse",
//                                 "dose":"",
//                                 "strength":"500 mg"
//                             }]
//                         }],
//                         "className2":[{
//                             "associatedDrug":[{
//                                 "name":"asprin",
//                                 "dose":"",
//                                 "strength":"500 mg"
//                             }],
//                             "associatedDrug#2":[{
//                                 "name":"somethingElse",
//                                 "dose":"",
//                                 "strength":"500 mg"
//                             }]
//                         }]
//                     }]
//                 }],
//                 "labs":[{
//                     "missing_field": "missing_value"
//                 }]
//             }],
//             "Asthma":[{}]
//         }]}

//     return(
//         <>
//                 <>
//                 {json.problems.map((el)=>
//                 {
//                     return(
//                         <>
//                         {el.Diabetes.map((item)=>{
//                             return(
//                                 <>
//                                 {item.medications.map((hi)=>{
//                                     return(
//                                         <>
//                                         {hi.medicationsClasses.map((hello)=>{
//                                             return(
//                                                 <>
//                                                 {hello.className.map((ho)=>{
//                                                     return(
//                                                         <>
//                                                         {ho.associatedDrug.map((e)=>{
//                                                             return(
//                                                                 <>
//                                                                 {e.name}<br></br>
//                                                                 {e.strength}<br></br>
//                                                                 {ho["associatedDrug#2"].map((e)=>
//                                                                 {
//                                                                     return(
//                                                                         <>
//                                                                         {e.name}<br></br>
//                                                                         {e.strength}
//                                                                         {hello.className2.map((g)=>{
//                                                                             return(
//                                                                                 <>
//                                                                                 {g.associatedDrug.map((h)=>{
//                                                                                     return(
//                                                                                         <><br></br>
//                                                                                         {h.name}<br></br>
//                                                                                         {h.strength}
//                                                                                         {g["associatedDrug#2"].map((i)=>
//                                                                                         {
//                                                                                             return(
//                                                                                                 <><br></br>
//                                                                                                 {i.name}<br></br>
//                                                                                                 {i.strength}
//                                                                                                 {item.labs.map((j)=>{
//                                                                                                     return(
//                                                                                                         <><br></br>
//                                                                                                         {j.missing_field}
//                                                                                                         {el.Asthma.map((k)=>{
//                                                                                                             return(
//                                                                                                                 <><br></br>
//                                                                                                                 {k.Asthma}
//                                                                                                                 </>
//                                                                                                             )
//                                                                                                         })}
//                                                                                                         </>
//                                                                                                     )
//                                                                                                 })}
                                                                                                
//                                                                                                 </>
//                                                                                             )
//                                                                                         })}
//                                                                                         </>
//                                                                                     )
//                                                                                 }
//                                                                                 )}
//                                                                                 </>
//                                                                             )
//                                                                         })}
//                                                                         </>
//                                                                     )
//                                                                 })}
//                                                                 </>
//                                                             )
//                                                         })}
//                                                         </>
//                                                     )
//                                                 })}
//                                                 </>
//                                             )
//                                         })}
//                                         </>
//                                     )
//                                 })}
//                                 </>
//                             )
//                         })}
//                         </>
//                     )
//                 })}
//                 </>
            
        

//         </>
//     )
// }
// export default Foreach;


