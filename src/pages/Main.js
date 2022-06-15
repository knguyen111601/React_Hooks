import {Routes, Route} from "react-router-dom"
import Home from "./Home"

import UseStatePage from "./HookPages/UseStatePage"
import UseReducerPage from "./HookPages/UseReducerPage"
import UseEffectPage from "./HookPages/UseEffectPage"
import UseRefPage from "./HookPages/UseRefPage"
import UseLayoutEffectPage from "./HookPages/UseLayoutEffectPage"
import UseImperativeHandlePage from "./HookPages/UseImperativeHandlePage"
import UseContextPage from "./HookPages/UseContextPage"
import UseMemoPage from "./HookPages/UseMemoPage"
import UseCallbackPage from "./HookPages/UseCallbackPage"

const Main = () => {
    return <>
        <Routes>
            <Route path="*" element={<h1>404 Page Here</h1>}/>

            <Route path="/" element={<Home/>}/>
            <Route path="/useState" element={<UseStatePage/>}/> 
            <Route path="/useReducer" element={<UseReducerPage/>}/> 
            <Route path="/useEffect" element={<UseEffectPage/>}/> 
            <Route path="/useRef" element={<UseRefPage/>}/> 
            <Route path="/useLayoutEffect" element={<UseLayoutEffectPage/>}/>
            <Route path="/useImperativeHandle" element={<UseImperativeHandlePage/>}/>
            <Route path="/useContext" element={<UseContextPage/>}/>
            <Route path="/useMemo" element={<UseMemoPage/>}/>
            <Route path="/useCallback" element={<UseCallbackPage/>}/>
        </Routes>
    </>
}

export default Main