import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom"

import Test1 from "./Test1"
import Test2 from "./Test2"
import Test3 from "./Test3"
import Test4 from "./Test4"
import Test5 from "./Test5"
import Navbar from './Navbar';

const Routing1=()=>{

    return(
            <>
    <Router>
    <Navbar />
        <Routes>
            <Route path='' element={<Test1 />} />
             <Route path='/hello' element={<Test2 />} />
            <Route path='/bye' element={<Test3 />} />
            <Route path='/hi' element={<Test4 />} />
            <Route path='/hey' element={<Test5 />} /> 
        </Routes>
    </Router>
            </>
        )
    }
    export default Routing1;
    