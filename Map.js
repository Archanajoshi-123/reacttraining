// function Map(){
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
//         {text.menu.items.map((el)=>{
//             return(
//                 <>
//                 <p>id:{el['id']}</p>
//                 </>
//             )
//         })}
           
       
//         </>
//     )
// }
// export default Map;


// function Map(){
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
//         <>
        // {fun.menu.popup.menuitem.map((el)=>(
        //     <>
        //     <p>value:{el['value']}</p>
        //     <p>value:{el['onclick']}</p>
        //     </>

        // ))}
//         </>
//     )
// }
// export default Map;



// function Map(){

//     const glossary= {
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
//     return(
//         <>
//         {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.map((el)=>
// (
//     <>
//     <p>GlossSeeAlso:{el}</p>
//     </>

// ))}
//         </>
//     )
// }
// export default Map;



// function Map(){
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
//         {example["web-app"].servlet.map((hi)=>
        
//         (
//             <>
//             <p> Servlet-name:{hi['servlet-name']}</p>
//             <p> Servlet-class:{hi['servlet-class']}</p>
//             </>

//         )
        
//         )}
//         </>
//     )
// }
// export default Map;


