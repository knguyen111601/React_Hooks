import {Routes, Route} from "react-router-dom"
import Home from "./Home"

import UseStatePage from "./HookPages/UseStatePage"
import UseReducerPage from "./HookPages/UseReducerPage"
import UseEffectPage from "./HookPages/UseEffectPage"
import UseRefPage from "./HookPages/UseRefPage"

const Main = () => {
    return (
        <Routes>
            <Route path="*" element={<h1>404 Page Here</h1>}/>

            <Route path="/" element={<Home/>}/>
            <Route path="/useState" element={<UseStatePage/>}/> 
            <Route path="/useReducer" element={<UseReducerPage/>}/> 
            <Route path="/useEffect" element={<UseEffectPage/>}/> 
            <Route path="/useRef" element={<UseRefPage/>}/> 

        </Routes>
    )
}

export default Main