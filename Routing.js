import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Test from "./Test"
import Task3 from "./Task3"
import Task4 from "./Task4"
import Class1 from "./Class1"
import Class4 from "./Class4"

const Routing=()=>{

return(
        <>
<Router>
    <Routes>
        <Route path='' element={<Test />} />
        <Route path='/hello' element={<Task3 />} />
        <Route path='/bye' element={<Task4 />} />
        <Route path='/hi' element={<Class1 />} />
        <Route path='/oh' element={<Class4 />} />
    </Routes>
</Router>
        </>
    )
}
export default Routing;