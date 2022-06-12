import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import UseStatePage from "./UseStatePage"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/useState" element={<UseStatePage/>}/> 
        </Routes>
    )
}

export default Main