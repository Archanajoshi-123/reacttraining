// function Class3(){
//  const values={
//     name:'FirstName',
//     last:'Lastname',
//     education:[
//         {
//             university:'JNTU',
//             Grade:8.1,
//             YearofPassing:2021
//         }
//     ]
//  }


//     return(
//         <>
//         {values.name}

//         {values.education[0].university}


//         </>
//     )
// }
// export default Class3;





// function Class3() {
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

//                     }

//                 }
//             }
//         }
//     }
//     return (
//         <>
//         {glossary.GlossDiv.title}<br></br>
//         {glossary.GlossDiv.GlossList.GlossEntry.ID}<br></br>
//         {glossary.GlossDiv.GlossList.GlossEntry.SortAs}<br></br>
//         {glossary.GlossDiv.GlossList.GlossEntry.GlossTerm}<br></br>
//         {glossary.GlossDiv.GlossList.GlossEntry.Abbrev}<br></br>
//         {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para}
//         </>
//     )
// }
// export default Class3;



// function Class3(){

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
//           }
//         }
//     return(
//         <>
//         {fun.menu.value}<br></br>
//         {fun.menu.popup.menuitem[0].value}<br></br>
//         {fun.menu.popup.menuitem[1].onclick}<br></br>
//         {fun.menu.popup.menuitem[2].value}
//         </>
//     )
// }
// export default Class3;



// function Class3(){

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
//     }
// }
//     return(
//         <>
//         {text.menu.header}<br></br>
//         {text.menu.items[0].id}<br></br>
//         {text.menu.items[1].label}<br></br>
//         {text.menu.items[2].id}<br></br>
//         {text.menu.items[3].label}<br></br>
//         {text.menu.items[4].id}<br></br>
//         {text.menu.items[5].id}<br></br>
//         {text.menu.items[6].label}<br></br>
//         {text.menu.items[7].label}<br></br>
//         {text.menu.items[8].label}<br></br>
//         {text.menu.items[9].label}<br></br>
//         {text.menu.items[10].label}<br></br>
//         {text.menu.items[11].label}<br></br>
//         {text.menu.items[12].label}<br></br>
//         {text.menu.items[13].label}<br></br>
//         {text.menu.items[14].label}<br></br>
//         {text.menu.items[15].id}<br></br>
//         {text.menu.items[16].label}<br></br>
//         {text.menu.items[17].id}<br></br>

//         </>
//     )
// }
// export default Class3;


// function Class3() {
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

//     return (
//         <>
//             {example["web-app"].servlet[0]["servlet-name"]}<br></br>
//             {example["web-app"].servlet[0]["init-param"].cachePagesDirtyRead}<br></br>
//             {example["web-app"].servlet[0]["init-param"].searchEngineListTemplate}<br></br>
//             {example["web-app"].servlet[0]["init-param"].dataStoreMaxConns}<br></br>
//             {example["web-app"].servlet[0]["init-param"].maxUrlLength}<br></br>
//             {example["web-app"].servlet[1]["servlet-class"]}<br></br>
//             {example["web-app"].servlet[1]["init-param"].mailHostOverride}<br></br>
//             {example["web-app"].servlet[1]["init-param"].mailHost}<br></br>
//             {example["web-app"].servlet[2]["servlet-class"]}<br></br>
//             {example["web-app"].servlet[2]["servlet-name"]}<br></br>
//             {example["web-app"].servlet[3]["servlet-name"]}<br></br>
//             {example["web-app"].servlet[3]["servlet-class"]}<br></br>
//             {example["web-app"].servlet[4]["servlet-class"]}<br></br>
//             {example["web-app"].servlet[4]["servlet-name"]}<br></br>
//             {example["web-app"].servlet[4]["init-param"].log}<br></br>
//             {example["web-app"].servlet[4]["init-param"].adminGroupID}<br></br>
//             {example["web-app"]["servlet-mapping"].cofaxEmail}<br></br>
//             {example["web-app"]["servlet-mapping"].cofaxAdmin}<br></br>
//             {example["web-app"]["servlet-mapping"].cofaxCDS}<br></br>
//             {example["web-app"]["servlet-mapping"].cofaxTools}<br></br>
//             {example["web-app"]["servlet-mapping"].fileServlet}<br></br>
//             {example["web-app"]["taglib"]["taglib-location"]}<br></br>
//             {example["web-app"]["taglib"]["taglib-uri"]}
//         </>
//     )
// }
// export default Class3;


//LOOPS//

